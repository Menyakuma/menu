import React from "react";
import MenuComponent from "./Menu";
import GlobalStyles from "./styles/GlobalStyles"; // GlobalStyles 컴포넌트 임포트

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <MenuComponent />
    </div>
  );
}

export default App;
