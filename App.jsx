import React from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <TaskList />
      </main>
      <Footer />
    </div>
  );
};

export default App;