import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  const router = useRouter();

  const onScreenshot20240513AtClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTelephoneNumberClick = useCallback(() => {
    window.location.href = "tel:015900097";
  }, []);

  const onWhatsappClick = useCallback(() => {
    window.open("https://wa.me/9779843594183");
  }, []);

  const onErawanmuaythaifightgymgmailcTextClick = useCallback(() => {
    window.location.href = "mailto:erawanmuaythaifightgym@gmail.com";
  }, []);

  const onItemClick = useCallback(() => {
    window.open(
      "https://www.instagram.com/erawanmuaythaifightgym?igsh=Mm55MXZuYmVxdjBw&utm_source=qr"
    );
  }, []);

  const onItemClick1 = useCallback(() => {
    window.open(
      "https://www.facebook.com/profile.php?id=100076293594552&mibextid=PlNXYD"
    );
  }, []);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footermain}>
        <img
          className={styles.screenshot20240513At1639}
          alt=""
          src="/screenshot-20240513-at-1639-1@2x.png"
          onClick={onScreenshot20240513AtClick}
        />
        <div className={styles.fitnessDisciplineHardworkContainer}>
          <p className={styles.fitness}>FITNESS</p>
          <p className={styles.fitness}>DISCIPLINE</p>
          <p className={styles.fitness}>HARDWORK</p>
          <p className={styles.fitness}>CONSISTENCY</p>
        </div>
        <div className={styles.copyright}>© 2024 — Copyright</div>
      </div>
      <div className={styles.footerdescription}>
        <div className={styles.contactsParent}>
          <div className={styles.contacts}>
            <div className={styles.contactUs}>Contact us</div>
            <div className={styles.list}>
              <div
                className={styles.erawanmuaythaifightgymgmailc}
                onClick={onTelephoneNumberClick}
              >
                Telephone Number: 01-5900097
              </div>
              <div
                className={styles.erawanmuaythaifightgymgmailc}
                onClick={onWhatsappClick}
              >
                Whatsapp : +977 984-3594183
              </div>
              <div
                className={styles.erawanmuaythaifightgymgmailc}
                onClick={onErawanmuaythaifightgymgmailcTextClick}
              >
                erawanmuaythaifightgym@gmail.com
              </div>
              <div className={styles.bansbariKathmanduNepal}>
                Bansbari, Kathmandu, Nepal
              </div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <button className={styles.item} onClick={onItemClick}>
              <div className={styles.instagram}>Instagram</div>
            </button>
            <button className={styles.item} onClick={onWhatsappClick}>
              <div className={styles.whatsapp}>Whatsapp</div>
            </button>
            <button className={styles.item} onClick={onItemClick1}>
              <div className={styles.whatsapp}>Facebook</div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
