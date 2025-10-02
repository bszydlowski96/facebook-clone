import React from "react";
import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app_content">
        <h2>Facebook Clone</h2>
        <p>Header działa!</p>
      </main>
    </div>
  );
}

export default App;
