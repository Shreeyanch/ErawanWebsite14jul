import Fighter1 from "./fighter1";
import Fighter from "./fighter";
import PropTypes from "prop-types";
import styles from "./our-fighters.module.css";

const OurFighters = ({ className = "" }) => {
  return (
    <div className={[styles.popularexercises, className].join(" ")}>
      <div className={styles.title} />
      <div className={styles.exercisecards}>
        <Fighter1
          imageBarun="/heroimage@2x.png"
          title="Raju Rai "
          threeTimesNationalChampio="Three times national champion "
          wBCMuayThaiNationalChampi="WBC Muay Thai national champion "
          yearsOfExperienceInMuayTh="14 years of experience in Muay Thai "
          fightRecords62="Fight records 6 - 2"
        />
        <Fighter1
          imageBarun="/imagebarun@2x.png"
          title="Barun Ghale Gurung"
          threeTimesNationalChampio="Bantam weight division "
          wBCMuayThaiNationalChampi="National champion "
          yearsOfExperienceInMuayTh="Multiple time win over Thai fighters "
          fightRecords62="Fight records  21 - 5 "
        />
        <Fighter
          cardImageRajina="/cardimagekarishma@2x.png"
          title="Karishma karki"
          weightDivisionFlyWeight="Weight division - fly weight "
          wBCMuayThaiNationalChampi="WBC Muay Thai national champion "
          fightRecord20="Fight record  4 - 0 "
        />
        <Fighter
          cardImageRajina="/CardImageRajina.png"
          title="Rajina Bista "
          weightDivisionFlyWeight="Super fly weight division "
          wBCMuayThaiNationalChampi="WBC Muay Thai gold medalist"
          fightRecord20="Fight records  3 - 1 "
        />
      </div>
    </div>
  );
};

OurFighters.propTypes = {
  className: PropTypes.string,
};

export default OurFighters;
