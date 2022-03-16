import React, { useContext } from "react";
import ContextAPI from "../ContextAPI/ContextAPI";
import style from "./DaragToLeft.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell, faFile } from "@fortawesome/free-solid-svg-icons";

const DragToRight = () => {
  const context = useContext(ContextAPI);

  return (
    <div
      className={`${style.btn} ${
        context.displayButton ? "" : style.display_buttons
      }`}
    >
      <button type="button" className={style.bell}>
        {/* <FontAwesomeIcon icon={faBell} /> */}
        bell
      </button>
      <button type="button" className={style.file}>
        {/* <FontAwesomeIcon icon={faFile} /> */}
        file
      </button>
    </div>
  );
};

export default DragToRight;
