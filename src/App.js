import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Tables from "./components/Table";
import Hotline from "./components/Hotline";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Tables />
      <Hotline />
      <Footer />
    </div>
  );
}

export default App;
