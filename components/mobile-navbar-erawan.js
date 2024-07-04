import { useState, useCallback } from "react";
import PortalPopup from "./portal-popup";
import IconPack from "./icon-pack";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./mobile-navbar-erawan.module.css";

const MobileNavbarErawan = ({ className = "", onClose }) => {
  const [isMobileNavbarErawanPopup1Open, setMobileNavbarErawanPopup1Open] =
    useState(false);
  const router = useRouter();

  const openMobileNavbarErawanPopup1 = useCallback(() => {
    setMobileNavbarErawanPopup1Open(true);
  }, []);

  const closeMobileNavbarErawanPopup1 = useCallback(() => {
    setMobileNavbarErawanPopup1Open(false);
  }, []);

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProductClick = useCallback(() => {
    router.push("/fighters");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/activities");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/enroll-form");
  }, [router]);

  return (
    <>
      <div
        className={[styles.mobilenavbarerawan, className].join(" ")}
        onClick={openMobileNavbarErawanPopup1}
      >
        {/* <IconPack /> */}
        <div className={styles.menu}>
          <div className={styles.homeParent}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
            <button className={styles.product} onClick={onProductClick}>
              Fighters
            </button>
            <div className={styles.home} onClick={onAboutUsTextClick}>
              Activities
            </div>
            <div className={styles.home} onClick={onContactUsTextClick}>
              Contact us
            </div>
          </div>
        </div>
      </div>
      {isMobileNavbarErawanPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMobileNavbarErawanPopup1}
        >
          <MobileNavbarErawan onClose={closeMobileNavbarErawanPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

MobileNavbarErawan.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default MobileNavbarErawan;
