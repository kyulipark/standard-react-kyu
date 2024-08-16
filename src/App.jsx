import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="main-container">
      <h1 className="h1">2024 올림픽 메달</h1>

      <Input countries={countries} setCountries={setCountries} />
      <List countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
