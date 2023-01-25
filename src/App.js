import './App.css';
import Carousel from './componentes/Carousel/Carousel';
import Header from './componentes/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel />
      <h2 id='titulo-footer'>Desarrollador: - Argüello Ignacio -</h2>
    </div>
  );
}

export default App;
