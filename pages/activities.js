import Header from "../components/header";
import Activities1 from "../components/activities1";
import Footer from "../components/footer";
import styles from "./activities.module.css";

const Activities = () => {
  return (
    <div className={styles.activities}>
      <Header />
      <div className={styles.activities1}>Activities</div>
      <Activities1
        screenshot20240606At14081="/screenshot-20240606-at-1408-1@2x.png"
        nepalsRajinaErawanIsPoise="Nepal’s Rajina Erawan is poised to make combat sports history in Tokyo on December 17. She will participating ina kickboxing match: under Kross-Over promotion, competing at 52kg. Having trained at Erawn Muay Thai fight gym for a year. Both of them are heading towards to Tokyo on December 13 to present Nepal with pride."
      />
      <Activities1
        screenshot20240606At14081="/screenshot-20240606-at-1551@2x.png"
        nepalsRajinaErawanIsPoise="In 2024 Feb 1- 5 we successfully participated in Amazing Muay Thai world festival in lumpinee boxing Stadium Bangkok where our four official took part in referee and judge seminar and got certified from wbc Muay Thai which is sensational for Nepali ring officials"
      />
      <Activities1
        screenshot20240606At14081="/screenshot-20240606-at-1550@2x.png"
        nepalsRajinaErawanIsPoise="Barun Ghale TKO’s Thai fighter at Max Muay Thai."
      />
      <Activities1
        screenshot20240606At14081="/screenshot-20240606-at-1550@2x.png"
        nepalsRajinaErawanIsPoise="Raju Rai participated at FairTex Fight Night at Lumpinee Boxing Stadium, Bangkok"
      />
      <Activities1
        screenshot20240606At14081="/screenshot-20240606-at-1551@2x.png"
        nepalsRajinaErawanIsPoise="Three WBC athletes secure 3 silver medal at Thailand Cup tournament. Hosted By WBC Muay Thai"
      />
      <Activities1
        screenshot20240606At14081="/screenshot-20240606-at-1551@2x.png"
        nepalsRajinaErawanIsPoise="Barun Ghale TKO’s Thai Boxer At Rajadamnern (RWS) stadium 2 times ."
      />
      <Footer />
    </div>
  );
};

export default Activities;
