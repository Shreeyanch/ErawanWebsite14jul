import PropTypes from "prop-types";
import styles from "./w-e-i-g-h-t-l-o-s-s.module.css";

const WEIGHTLOSS = ({ className = "", onClose }) => {
  return <div className={[styles.weightloss, className].join(" ")} />;
};

WEIGHTLOSS.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default WEIGHTLOSS;
