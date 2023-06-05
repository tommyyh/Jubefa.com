import React, { useEffect, useState } from 'react';
import css from './contact.module.scss';
import Input from './components/Input';
import { post } from 'lib/axios';
import infoJson from 'data/info.json';

const Contact = ({ lang, langCode, contactOpen, setContactOpen }) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    msg: '',
  });
  const [feedback, setFeedback] = useState({
    type: '',
    msg: '',
    new: '', // This is used for setting timer
  });
  const [timeoutId, setTimeoutId] = useState(null);
  const [processing, setProcessing] = useState(false);
  const l = lang.contact;

  // Set timer every time a new message is set
  useEffect(() => {
    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set the new timeout
    const newTimeoutId = setTimeout(() => {
      setFeedback({
        ...feedback,
        type: '',
        msg: '',
      });
    }, 6000);

    // Store the new timeout ID in state
    setTimeoutId(newTimeoutId);

    // Clean up the timeout ID when the component unmounts or the effect is called again
    return () => {
      clearTimeout(newTimeoutId);
    };
  }, [feedback.new]);

  const sendMessage = async () => {
    setProcessing(true);

    // Regulate form
    const { name, email, msg } = info;
    const re = /\S+@\S+\.\S+/;

    // If empty
    if (!name || !email || !msg) {
      setFeedback({
        type: 'error',
        msg: l.missing,
        new: 1,
      });
      return setProcessing(false);
    }

    // Check email validity
    if (!re.test(email)) {
      setFeedback({
        type: 'error',
        msg: l.invalidMail,
        new: 2,
      });
      return setProcessing(false);
    }

    // Send message ----------------------------------------------------------
    const res = await post(`${infoJson.api}/contact/contact/`, info);

    try {
      if (res.data.status === 200) {
        console.log(res.data.status);
        setFeedback({
          type: 'success',
          msg: l.success,
          new: 3,
        });
        setInfo({
          name: '',
          email: '',
          msg: '',
        });
      } else {
        setFeedback({
          type: 'error',
          msg: l.serverError,
          new: 4,
        });
        setInfo({
          name: '',
          email: '',
          msg: '',
        });
      }
    } catch {
      setFeedback({
        type: 'error',
        msg: l.serverError,
        new: 6,
      });
      setInfo({
        name: '',
        email: '',
        msg: '',
      });
    }

    setProcessing(false);
  };

  return (
    <>
      <div
        className={
          feedback.msg
            ? `${css['feedback']} ${css['feedback-active']}`
            : css['feedback']
        }
        data-type={feedback.type === 'error' ? 'error' : 'success'}
      >
        <p>{feedback.msg}</p>

        {/* Close button */}
        <div
          className={css['feedback-close']}
          onClick={() =>
            setFeedback({
              ...feedback,
              type: '',
              msg: '',
            })
          }
        ></div>
      </div>
      <aside
        className={
          contactOpen
            ? `${css['contact']} ${css['contact-open']}`
            : css['contact']
        }
      >
        <div className={css['contact-inner']}>
          <div className={css['form']}>
            <Input
              type={'text'}
              name={'name'}
              placeholder={l.name}
              maxLength={100}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
              value={info.name}
            />
            <Input
              type={'email'}
              name={'email'}
              placeholder={l.email}
              maxLength={254}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              value={info.email}
            />
            <Input
              type={'textarea'}
              name={'msg'}
              placeholder={l.msg}
              maxLength={900}
              onChange={(e) => setInfo({ ...info, msg: e.target.value })}
              value={info.msg}
            />

            <button
              onClick={sendMessage}
              disabled={processing}
              className={processing ? css['processing'] : css['']}
            >
              {processing ? l.processing : l.submit}
            </button>
          </div>

          {/* Close button */}
          <div
            className={css['lang-close']}
            onClick={() => setContactOpen(false)}
          ></div>
        </div>
      </aside>
    </>
  );
};

export default Contact;
