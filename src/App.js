import './App.css';
import Header from './components/Header'
import Logo from './assets/logo.svg'
import Menu from './assets/menu.svg'
import Item from './components/Item'
import ModelY from './assets/modely.jpg'
import Model3 from './assets/model3.jpg'
import ModelS from './assets/models.jpg'
import ModelX from './assets/modelx.jpg'
import Cybertruck from './assets/cybertruck.jfif'

function App() {
  return (
    <div className='App'>
        <Header logo={Logo} menu={Menu} />
        
        <div className="item-container">
            <Item heading="Cybertruck" link="Jelentkezés tesztvezetésre" bgImage={Cybertruck} />
            <Item heading="Model Y" bgImage={ModelY} />
            <Item heading="Model 3" bgImage={Model3} />
            <Item heading="Model S" bgImage={ModelS} />
            <Item heading="Model X" bgImage={ModelX} />
        </div>

    </div>
  );
}

export default App;
