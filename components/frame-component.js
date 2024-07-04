import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "", onClose }) => {
  return (
    <div
      className={[styles.whatsappImage20240527At1Parent, className].join(" ")}
    >
      <img
        className={styles.whatsappImage20240527At1}
        alt=""
        src="/whatsapp-image-20240527-at-1434-1@2x.png"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default FrameComponent;
