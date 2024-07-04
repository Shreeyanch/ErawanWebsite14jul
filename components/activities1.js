import PropTypes from "prop-types";
import styles from "./activities1.module.css";

const Activities1 = ({
  className = "",
  screenshot20240606At14081,
  nepalsRajinaErawanIsPoise,
}) => {
  return (
    <div className={[styles.activities1, className].join(" ")}>
      <img
        className={styles.screenshot20240606At1408}
        alt=""
        src={screenshot20240606At14081}
      />
      <div className={styles.vouchers}>
        <div className={styles.downloadapp}>
          <div className={styles.vouchers}>
            <div className={styles.nepalsRajinaErawan}>
              {nepalsRajinaErawanIsPoise}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Activities1.propTypes = {
  className: PropTypes.string,
  screenshot20240606At14081: PropTypes.string,
  nepalsRajinaErawanIsPoise: PropTypes.string,
};

export default Activities1;
