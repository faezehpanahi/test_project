import React, { useContext, useEffect } from "react";
import ContextAPI from "../ContextAPI/ContextAPI";
import ShowItems from "./ShowItems";
import style from "./ShowItem.module.css";
// import DragToRight from "../DragToRight/DragToRight";
import DragToLeft from "../DragToLeft/DragToLeft";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

const ShowItem = () => {
  const context = useContext(ContextAPI);

  // useEffect(() => {
  //   fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(context.setDatas(data));
  //       context.setDatas(data);
  //     })
  //     .catch((errore) => console.log(errore));
  // }, []);

  const posLeft = useSpring({ x: 0 });
  const handlePosLeft = useDrag((params) => {
    posLeft.x.set(params.offset[0]);
  });

  return (
    <div>
      {context.datas.map((item) => (
        <h3 className={style.item} key={item._id}>
          <div className={style.left_container}>
            <animated.div
              {...handlePosLeft()}
              style={{ x: posLeft.x }}
              className={style.app_handle_left}
            >
              <div className={style.app_handle}></div>
            </animated.div>
            <animated.div className={style.btn1} style={{ x: posLeft.x }}>
              <button type="button" className={style.edit}>
                ویرایش
              </button>
              <button type="button" className={style.delete}>
                حذف
              </button>
            </animated.div>
            <animated.div className={style.show_name}>{item.name}</animated.div>
          </div>
          <div
            className={style.right_container}
            onMouseEnter={() => context.setDragLeft(true)}
            onMouseLeave={() => context.setDragLeft(false)}
          >
            {context.dragLeft && <DragToLeft />}
          </div>
        </h3>
      ))}
    </div>
  );
};

export default ShowItem;

ShowItem.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {},
};
