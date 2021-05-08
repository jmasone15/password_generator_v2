import React, { useState } from "react";
import DisplayCard from "./components/DisplayCard";
import Navbar from "./components/Navbar";
import OptionsCard from "./components/OptionsCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [password, setPassword] = useState("password");
  const [showPass, setShowPass] = useState(false);
  const [options, setOptions] = useState({
    length: 5,
    lower: true,
    upper: true,
    number: true,
    special: true
  });


  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>Password Generator</h1>
        <OptionsCard
          options={options}
          setOptions={setOptions}
        />
        <DisplayCard
          password={password}
          setPassword={setPassword}
          showPass={showPass}
          setShowPass={setShowPass}
          options={options}
        />
      </div>
    </div >
  );
}

export default App;
