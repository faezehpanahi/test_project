import React from "react";
// import ContextAPI from "../ContextAPI/ContextAPI";
// import DragToRight from "../DragToRight/DragToRight";
// import DragToLeft from "../DragToLeft/DragToLeft";
// import style from "./ShowItem.module.css";

const ShowItems = ({ item }) => {
  // const context = useContext(ContextAPI);

  return (
    <div>
      {/* <div
        className={style.left_container}
        onMouseEnter={() => context.setDragRight(true)}
        onMouseLeave={() => context.setDragRight(false)}
      >
        {context.dragRight && <DragToRight />} */}
      {item.name}
      {/* </div>
      <div
        className={style.right_container}
        onMouseEnter={() => context.setDragLeft(true)}
        onMouseLeave={() => context.setDragLeft(false)}
      >
        {context.dragLeft && <DragToLeft />}
      </div> */}
      {/* <h3>{data.name}</h3> */}
    </div>
  );
};

export default ShowItems;
