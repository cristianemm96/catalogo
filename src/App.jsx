import "./App.css";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import ContenedorRutas from "./rutas/ContenedorRutas";

function App() {
  return (
    <div className="App">
      <Header/>
      <ContenedorRutas/>
      <Footer/>
    </div>
  );
}

export default App;
