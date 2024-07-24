import PropTypes from "prop-types";
import styles from "./tutorial-image-group.module.css";

const TutorialImageGroup = ({ className = "" }) => {
  return (
    <div className={[styles.tutorialimagegroup, className].join(" ")}>
      <div className={styles.trainer3}>
        <img className={styles.trainer3Child} alt="" src="/group-142@2x.png" />
        <div className={styles.kanchanRai}>{`Kanchan Rai `}</div>
        <div className={styles.professionalMuayThaiContainer}>
          <p className={styles.professionalMuayThai}>
            Professional Muay Thai Athelete
          </p>
          <p
            className={styles.professionalMuayThai}
          >{`4 years of Experience in Muay Thai `}</p>
        </div>
      </div>
      <div className={styles.tutorial2}>
        <img className={styles.trainer3Child} alt="" src="/group-147@2x.png" />
        <div className={styles.kanchanRai}>{`Kosan Rai `}</div>
        <div className={styles.professionalMuayThaiContainer1}>
          <p className={styles.professionalMuayThai}>
            Professional Muay Thai Athelete
          </p>
          <p
            className={styles.professionalMuayThai}
          >{`4 years of Experience in Muay Thai `}</p>
        </div>
      </div>
      <div className={styles.tutorial1}>
        <img className={styles.tutorial1Child} alt="" src="/group-146@2x.png" />
        <div className={styles.rajuRai}>Raju Rai</div>
        <div className={styles.wbcMuayThaiContainer}>
          <p className={styles.professionalMuayThai}>
            WBC Muay Thai national champion
          </p>
          <p className={styles.professionalMuayThai}>
            3 times national champion
          </p>
          <p
            className={styles.professionalMuayThai}
          >{`14 years of experience in Muay Thai `}</p>
        </div>
      </div>
    </div>
  );
};

TutorialImageGroup.propTypes = {
  className: PropTypes.string,
};

export default TutorialImageGroup;
