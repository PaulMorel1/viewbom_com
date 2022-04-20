import { Outlet } from 'react-router-dom';
import AppStyles from './App.module.css';
import Header from './components/Header';


function App() {
  return (
    <div className={AppStyles.App}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
