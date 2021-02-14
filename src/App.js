import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Tables from "./components/Table";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Chart />
      <Tables />
      <Footer />
    </div>
  );
}

export default App;
