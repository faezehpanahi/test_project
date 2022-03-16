import React, { useState, useEffect } from "react";
import "./app.css";
import ContextAPI from "./components/ContextAPI/ContextAPI";
import data from "./components/Data/Data";
import ShowItem from "./components/ShowItem/ShowItem";

function App() {
  const [datas, setDatas] = useState(data);
  // const [datas, setDatas] = useState([]);
  const [displayButton, setDisplayButton] = useState(false);
  const [dragRight, setDragRight] = useState(false);
  const [dragLeft, setDragLeft] = useState(false);

  return (
    <ContextAPI.Provider
      value={{
        datas: datas,
        setDatas: setDatas,
        displayButton: displayButton,
        setDisplayButton: setDisplayButton,
        dragRight: dragRight,
        setDragRight: setDragRight,
        dragLeft: dragLeft,
        setDragLeft: setDragLeft,
      }}
    >
      <div className="app">
        <ShowItem />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
