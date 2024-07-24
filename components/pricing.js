import PropTypes from "prop-types";
import styles from "./pricing.module.css";

const Pricing = ({ className = "" }) => {
  return (
    <div className={[styles.loyaltypricing, className].join(" ")}>
      <div className={styles.trainingPackagesWrapper}>
        <div className={styles.trainingPackages}>Training packages:</div>
      </div>
      <div className={styles.loyaltypricingframe}>
        <div className={styles.with}>
          <div className={styles.forFemaleAndUnder12YearsWrapper}>
            <div className={styles.forFemaleAnd}>
              For female and under 12 years
            </div>
          </div>
          <div className={styles.points}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>Monthly fee</p>
              <p className={styles.monthlyFee}>Rs.5,000/-</p>
            </div>
          </div>
          <div className={styles.points1}>
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <div className={styles.month15DiscountContainer}>
              <p className={styles.monthlyFee}>3 Month</p>
              <p className={styles.discount}>(15% Discount)</p>
              <p className={styles.monthlyFee}>Rs.12,750/-</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>6 Month</p>
              <p className={styles.discount}>(25% Discount)</p>
              <p className={styles.monthlyFee}>Rs.22,500/-</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>Yearly</p>
              <p className={styles.discount}>(35% Discount)</p>
              <p className={styles.monthlyFee}>Rs.39,000/-</p>
            </div>
          </div>
        </div>
        <div className={styles.with1}>
          <div className={styles.regularPackageWrapper}>
            <div className={styles.forFemaleAnd}>Regular Package</div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>Monthly fee</p>
              <p className={styles.monthlyFee}>Rs.6,500/-</p>
            </div>
          </div>
          <div className={styles.points5}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>3 Month</p>
              <p className={styles.discount}>(15% Discount)</p>
              <p className={styles.monthlyFee}>Rs.16,575/-</p>
            </div>
          </div>
          <div className={styles.points5}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>6 Month</p>
              <p className={styles.discount}>(25% Discount)</p>
              <p className={styles.monthlyFee}>Rs.29,250/-</p>
            </div>
          </div>
          <div className={styles.points5}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>Yearly</p>
              <p className={styles.discount}>(35% Discount)</p>
              <p className={styles.monthlyFee}>Rs.50,700/-</p>
            </div>
          </div>
        </div>
        <div className={styles.with2}>
          <div className={styles.regularPackageWrapper}>
            <div className={styles.forFemaleAnd}>Day Package</div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>1 Day</p>
              <p className={styles.monthlyFee}>Rs.500/-</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>7 Days</p>
              <p className={styles.monthlyFee}>Rs.2,100/-</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>14 Days</p>
              <p className={styles.monthlyFee}>Rs.3,500/-</p>
            </div>
          </div>
        </div>
        <div className={styles.with3}>
          <div className={styles.regularPackageWrapper}>
            <div className={styles.personalTraining}>
              <p className={styles.monthlyFee}>{`Personal `}</p>
              <p className={styles.monthlyFee}>Training</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>1 Session</p>
              <p className={styles.monthlyFee}>Rs.1,500/-</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>7 Days</p>
              <p className={styles.monthlyFee}>Rs.9,800/-</p>
            </div>
          </div>
          <div className={styles.points2}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <div className={styles.monthlyFeeRs5000Container}>
              <p className={styles.monthlyFee}>14 Days</p>
              <p className={styles.monthlyFee}>Rs.18,200/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Pricing.propTypes = {
  className: PropTypes.string,
};

export default Pricing;
