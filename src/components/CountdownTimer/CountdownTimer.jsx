import styles from "./CountdownTimer.module.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [current, setCurrent] = useState(10);

  const lowerTimer = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      lowerTimer();
    }, 1000)
    if(current === 0) {
      clearInterval(timer);
    }
  }, [current]);

  return (
    <div>
      <div className={styles.titleGroup}>
        <h2 className={styles.title}>Таймер обратного отсчета</h2>
        <AccessTimeFilledIcon />
      </div>
      <p className={styles.timer}>{current}</p>
    </div>
  );
}

export default CountdownTimer;
