import { useState, useCallback } from "react";
import MobileNavbarErawan from "./mobile-navbar-erawan";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ className = "" }) => {
  const [isMobileNavbarErawanPopupOpen, setMobileNavbarErawanPopupOpen] =
    useState(false);
  const router = useRouter();

  const openMobileNavbarErawanPopup = useCallback(() => {
    setMobileNavbarErawanPopupOpen(true);
  }, []);

  const closeMobileNavbarErawanPopup = useCallback(() => {
    setMobileNavbarErawanPopupOpen(false);
  }, []);

  const onLOGOImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFIGHTERSClick = useCallback(() => {
    router.push("/fighters");
  }, [router]);

  const onACTIVITIESClick = useCallback(() => {
    router.push("/activities");
  }, [router]);

  const onCONTACTUSClick = useCallback(() => {
    router.push("/enroll-form");
  }, [router]);

  return (
    <>
      <div className={[styles.navbar, className].join(" ")}>
        <div className={styles.nav}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/logo@2x.png"
            onClick={onLOGOImageClick}
          />
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button className={styles.home} onClick={onLOGOImageClick}>
                HOME
              </button>
              <button className={styles.home} onClick={onFIGHTERSClick}>
                FIGHTERS
              </button>
              <button className={styles.home} onClick={onACTIVITIESClick}>
                ACTIVITIES
              </button>
              <button className={styles.contactUs} onClick={onCONTACTUSClick}>
                CONTACT US
              </button>
            </div>
            <button
              className={styles.hamburgerIcon}
              onClick={openMobileNavbarErawanPopup}
            >
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      {isMobileNavbarErawanPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMobileNavbarErawanPopup}
        >
          <MobileNavbarErawan onClose={closeMobileNavbarErawanPopup} />
        </PortalPopup>
      )}
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
