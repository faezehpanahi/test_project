import { createContext } from "react";

const ContextAPI = createContext({
  datas: [],
  setDatas: () => {},
  displayButton: false,
  setDisplayButton: () => {},
  dragRight: false,
  setDragRight: () => {},
  dragLeft: false,
  setDragLeft: () => {},
});

export default ContextAPI;
