import { useState, useCallback } from "react";
import MUAY from "../components/m-u-a-y";
import PortalPopup from "../components/portal-popup";
import MMA from "../components/m-m-a";
import WEIGHTLOSS from "../components/w-e-i-g-h-t-l-o-s-s";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import { useRouter } from "next/router";
import FeedbackDemo from "../components/feedback-demo";
import TutorialImageGroup from "../components/tutorial-image-group";
import Footer from "../components/footer";
import styles from "./index.module.css";

const ErawanHome = () => {
  const [isMUAYPopupOpen, setMUAYPopupOpen] = useState(false);
  const [isMMAPopupOpen, setMMAPopupOpen] = useState(false);
  const [isWEIGHTLOSSPopupOpen, setWEIGHTLOSSPopupOpen] = useState(false);
  const router = useRouter();

  const openMUAYPopup = useCallback(() => {
    setMUAYPopupOpen(true);
  }, []);

  const closeMUAYPopup = useCallback(() => {
    setMUAYPopupOpen(false);
  }, []);

  const openMMAPopup = useCallback(() => {
    setMMAPopupOpen(true);
  }, []);

  const closeMMAPopup = useCallback(() => {
    setMMAPopupOpen(false);
  }, []);

  const openWEIGHTLOSSPopup = useCallback(() => {
    setWEIGHTLOSSPopupOpen(true);
  }, []);

  const closeWEIGHTLOSSPopup = useCallback(() => {
    setWEIGHTLOSSPopupOpen(false);
  }, []);

  const onOurFightersClick = useCallback(() => {
    router.push("/fighters");
  }, [router]);

  return (
    <>
      <div className={styles.erawanhome}>
        <Header />
        <HeroSection />
        <div className={styles.ourfighters}>
          <div className={styles.aimToMake}>
            “Aim To make World Champion from Nepal.”
          </div>
          <img
            className={styles.a24074941Icon}
            alt=""
            src="/a2407494-1@2x.png"
          />
          <div
            className={styles.ourFighters}
            onClick={onOurFightersClick}
          >{`Our Fighters >>>`}</div>
        </div>
        <div className={styles.products}>
          <div className={styles.productframe}>
            <div className={styles.productdetails}>
              <div className={styles.producttitle}>
                <div className={styles.ourOfferings}>Our Offerings</div>
              </div>
              <div className={styles.productsubtitle}>
                <div className={styles.heresWhatWere}>
                  Here’s what we’re Offering to help deliver amazing
                  experiences.
                </div>
              </div>
            </div>
            <div className={styles.productscards}>
              <div className={styles.column1}>
                <div className={styles.productcard1}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titles}>
                      <div className={styles.muayThai}>Muay Thai</div>
                      <button
                        className={styles.viewMore1}
                        onClick={openMUAYPopup}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.productcard1}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titles}>
                      <div className={styles.mma}>Mma</div>
                      <button
                        className={styles.viewMore1}
                        onClick={openMMAPopup}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.productcard1}>
                  <img
                    className={styles.cardimageIcon}
                    alt=""
                    src="/cardimage@2x.png"
                  />
                  <div className={styles.text}>
                    <div className={styles.titles}>
                      <div className={styles.mma}>Weightloss Training</div>
                      <button
                        className={styles.viewMore1}
                        onClick={openWEIGHTLOSSPopup}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FeedbackDemo />
          </div>
        </div>
        <div className={styles.trainers}>
          <div className={styles.trainerscta}>
            <div className={styles.ctaframe}>
              <div className={styles.title}>
                <h2 className={styles.ourTrainers}>Our Trainers</h2>
                <div className={styles.ourHighlyQualified}>
                  Our highly qualified trainers diligently attend to every
                  aspect of training, demonstrating exceptional skill and
                  expertise to ensure Aoptimal learning outcomes for all
                  participants.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tutorialimages}>
            <TutorialImageGroup />
            <div className={styles.tutorialtablet}>
              <div className={styles.tutorial3}>
                <img
                  className={styles.tutorial3Child}
                  alt=""
                  src="/group-147@2x.png"
                />
                <div className={styles.kosangRaiProfessionalContainer}>
                  <p className={styles.kosangRai}>
                    <span className={styles.kosangRai1}>
                      <span className={styles.kosangRai2}>Kosang Rai</span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span className={styles.kosangRai1}>
                      <span className={styles.blankLine2}>&nbsp;</span>
                    </span>
                  </p>
                  <p
                    className={styles.professionalMuayThai}
                  >{`Professional Muay Thai Athelete `}</p>
                  <p className={styles.professionalMuayThai}>
                    4 years on experience in Muay Thai
                  </p>
                </div>
              </div>
              <div className={styles.tutorial2}>
                <img
                  className={styles.tutorial2Child}
                  alt=""
                  src="/group-146@2x.png"
                />
                <div className={styles.kanchanRaiProfessionalMuayWrapper}>
                  <div className={styles.kanchanRaiProfessionalContainer}>
                    <p className={styles.kosangRai}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.kosangRai2}>Kanchan Rai</span>
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.blankLine2}>&nbsp;</span>
                      </span>
                    </p>
                    <p
                      className={styles.professionalMuayThai}
                    >{`Professional Muay Thai Athelete `}</p>
                    <p className={styles.professionalMuayThai}>
                      4 years on experience in Muay Thai
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.tutorial1}>
                <img
                  className={styles.tutorial1Child}
                  alt=""
                  src="/group-142@2x.png"
                />
                <div className={styles.rajuRaiWbcMuayThaiNationaWrapper}>
                  <div className={styles.kanchanRaiProfessionalContainer}>
                    <p className={styles.kosangRai}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.kosangRai2}>Raju Rai</span>
                      </span>
                    </p>
                    <p className={styles.blankLine}>
                      <span className={styles.kosangRai1}>
                        <span className={styles.blankLine2}>&nbsp;</span>
                      </span>
                    </p>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {isMUAYPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMUAYPopup}
        >
          <MUAY onClose={closeMUAYPopup} />
        </PortalPopup>
      )}
      {isMMAPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMMAPopup}
        >
          <MMA onClose={closeMMAPopup} />
        </PortalPopup>
      )}
      {isWEIGHTLOSSPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWEIGHTLOSSPopup}
        >
          <WEIGHTLOSS onClose={closeWEIGHTLOSSPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ErawanHome;
