import PropTypes from "prop-types";
import styles from "./fighter1.module.css";

const Fighter1 = ({
  className = "",
  imageBarun,
  title,
  threeTimesNationalChampio,
  wBCMuayThaiNationalChampi,
  yearsOfExperienceInMuayTh,
  fightRecords62,
}) => {
  return (
    <div className={[styles.column6, className].join(" ")}>
      <div className={styles.exercisecard}>
        <img className={styles.imagebarunIcon} alt="" src={imageBarun} />
        <div className={styles.text}>
          <div className={styles.titles}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>
              <p className={styles.bantamWeightDivision}>
                {threeTimesNationalChampio}
              </p>
              <p className={styles.bantamWeightDivision}>
                {wBCMuayThaiNationalChampi}
              </p>
              <p className={styles.bantamWeightDivision}>
                {yearsOfExperienceInMuayTh}
              </p>
              <p className={styles.fightRecords}>{fightRecords62}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Fighter1.propTypes = {
  className: PropTypes.string,
  imageBarun: PropTypes.string,
  title: PropTypes.string,
  threeTimesNationalChampio: PropTypes.string,
  wBCMuayThaiNationalChampi: PropTypes.string,
  yearsOfExperienceInMuayTh: PropTypes.string,
  fightRecords62: PropTypes.string,
};

export default Fighter1;
