import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Tables from "./components/Table";
import Hotline from "./components/Hotline";
import Footer from "./components/Footer";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Chart />
        <Tables />
        <Hotline />
        <Footer />
      </div>
    );
  }
}

export default App;
