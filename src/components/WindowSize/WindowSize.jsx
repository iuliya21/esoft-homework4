import { useEffect } from "react";
import { useState } from "react";
import styles from "./WindowSize.module.css";

function WindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setSize(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);

  return (
    <div>
      <h2 className={styles.title}>Текущий размер окна</h2>
      <p className={styles.size}>{size}</p>
    </div>
  );
}

export default WindowSize;
