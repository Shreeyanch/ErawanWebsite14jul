import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./m-m-a.module.css";

const MMA = ({ className = "", onClose }) => {
  const onGroupContainerClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/samparka.nep/";
  }, []);

  const onENROLLNOWClick = useCallback(() => {
    window.open("https://www.instagram.com/erawanmuaythaifightgym/");
  }, []);

  return (
    <div className={[styles.mma, className].join(" ")}>
      <img className={styles.icon} alt="" src="/53@2x.png" />
      <div className={styles.menuParent} onClick={onGroupContainerClick}>
        <div className={styles.menu} />
        <button className={styles.enrollNow} onClick={onENROLLNOWClick}>
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

MMA.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default MMA;
