import Searchbar from "./Searchbar.js";
import Location from "./Location.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Searchbar />
        <Location />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
