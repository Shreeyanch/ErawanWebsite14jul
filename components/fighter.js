import PropTypes from "prop-types";
import styles from "./fighter.module.css";

const Fighter = ({
  className = "",
  cardImageRajina,
  title,
  weightDivisionFlyWeight,
  wBCMuayThaiNationalChampi,
  fightRecord20,
}) => {
  return (
    <div className={[styles.column5, className].join(" ")}>
      <div className={styles.exercisecard}>
        <img
          className={styles.cardimagerajinaIcon}
          alt=""
          src={cardImageRajina}
        />
        <div className={styles.text}>
          <div className={styles.titles}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>
              <p className={styles.superFlyWeight}>{weightDivisionFlyWeight}</p>
              <p className={styles.superFlyWeight}>
                {wBCMuayThaiNationalChampi}
              </p>
              <p className={styles.fightRecords}>{fightRecord20}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Fighter.propTypes = {
  className: PropTypes.string,
  cardImageRajina: PropTypes.string,
  title: PropTypes.string,
  weightDivisionFlyWeight: PropTypes.string,
  wBCMuayThaiNationalChampi: PropTypes.string,
  fightRecord20: PropTypes.string,
};

export default Fighter;
