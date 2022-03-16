import React, { useContext } from "react";
import ContextAPI from "../ContextAPI/ContextAPI";
import style from "./DragToRight.module.css";

const DragToRight = () => {
  const context = useContext(ContextAPI);

  return (
    <div
      className={`${style.btn} ${
        context.displayButton ? "" : style.display_buttons
      }`}
    >
      <button type="button" className={style.edit}>
        ویرایش
      </button>
      <button type="button" className={style.delete}>
        حذف
      </button>
    </div>
  );
};

export default DragToRight;
