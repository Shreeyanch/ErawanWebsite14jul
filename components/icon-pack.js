import PropTypes from "prop-types";
import styles from "./icon-pack.module.css";

const IconPack = ({ className = "", onClose }) => {
  return (
    <button className={[styles.iconPack, className].join(" ")}>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onClose}
      />
    </button>
  );
};

IconPack.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default IconPack;
