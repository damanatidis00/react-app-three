import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Forecast defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
