import React from "react";
import "./App.css";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
