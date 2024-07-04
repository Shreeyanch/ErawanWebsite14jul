import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import OurFighters from "../components/our-fighters";
import Footer from "../components/footer";
import styles from "./fighters.module.css";

const Fighters = () => {
  const router = useRouter();

  const onFightersContainerClick = useCallback(() => {
    router.push("/fighters");
  }, [router]);

  return (
    <div className={styles.fighters} onClick={onFightersContainerClick}>
      <Header />
      <div className={styles.ourFightersParent}>
        <div className={styles.ourFighters}>Our Fighters</div>
        <div className={styles.popularexercisessection}>
          <OurFighters />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fighters;
