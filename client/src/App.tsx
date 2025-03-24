import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import PrivateRoute from './components/utils/PrivateRoute';

function App() {
  return (
    <Routes>
      {routes.map(({ path, element, isPrivate }) => 
        isPrivate ? (
          <Route key={path} element={<PrivateRoute />}>
            <Route path={path} element={element} />
          </Route>
        ) : (
          <Route key={path} path={path} element={element} />
        )
      )}
    </Routes>
  );
}

export default App;
