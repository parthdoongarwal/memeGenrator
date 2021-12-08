import React, { useState } from "react";
import Header from "./comp/Header";
import Main from "./comp/Main";
function App() {
  const [dark, setdark] = useState(false);

  function toggle() {
    setdark((pvalue) => !pvalue);
  }

  return (
    <div className="App">
      <Header darkMode={dark} Click={toggle} />
      <Main darkMode={dark} />
    </div>
  );
}

export default App;
