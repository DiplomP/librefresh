import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Components/Shared/Header/Menu/Menu';
import { useState } from 'react';
import { items } from './Components/store';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function App() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className="App">
      <nav>
        <button onClick={() => setMenuActive(!menuActive)}>
          <MenuIcon color="primary" sx={{ fontSize: 50 }}/>
        </button>
        <div className='logo'>
          <a href='/'><MenuBookIcon color="primary" sx={{ fontSize: 50 }}/></a>
        </div>
      </nav>
      <div className='content'>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} header='Этапы обучения' items={items} />
    </div>
  );
}

export default App;
