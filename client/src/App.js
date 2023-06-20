import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLang, setLangCode } from 'features/langSlice';
import Home from 'pages/Home/Home';
import Solar from 'pages/Solar/Solar';
import NotFound from 'pages/NotFound/NotFound';
import Construction from 'pages/Construction/Construction';

function App() {
  const ModifiedRoute = ({ Component }) => {
    const { langCode } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = window.location.pathname;

    useEffect(() => {
      import(`./data/lang/${langCode}.json`)
        .then((data) => dispatch(setLang(data)))
        .catch(() => {
          navigate('/en'); // In production - DE
        });

      dispatch(setLangCode(langCode));
    }, [location]);

    return <Component />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to={'/en'} />} />

        <Route
          exact
          path='/:langCode'
          element={<ModifiedRoute Component={Home} />}
        />
        <Route
          exact
          path='/:langCode/solar'
          element={<ModifiedRoute Component={Solar} />}
        />
        <Route
          exact
          path='/:langCode/construction'
          element={<ModifiedRoute Component={Construction} />}
        />

        <Route
          path='/:langCode/*'
          element={<ModifiedRoute Component={NotFound} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
