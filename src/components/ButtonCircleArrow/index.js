
import {
  FiArrowLeft,
  FiArrowRight
} from "react-icons/fi";

import styles from "./styles.module.scss";

export function ButtonCircleArrow({left = false, bgColor = '#3E7CC5', handleClick}){

  const handleClickArrow = () => {
    return handleClick();
  }

  return(
    <div className={styles.btn} style={{backgroundColor: bgColor}} onClick={handleClickArrow}>
      {left ? <FiArrowLeft /> : <FiArrowRight />}
    </div>
  )
}