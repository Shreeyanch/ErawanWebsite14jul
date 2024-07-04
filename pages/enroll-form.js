import Header from "../components/header";
import ShareYourTravelsForm from "../components/share-your-travels-form";
import Footer from "../components/footer";
import styles from "./enroll-form.module.css";

const EnrollForm = () => {
  return (
    <div className={styles.enrollform}>
      <Header />
      <ShareYourTravelsForm />
      <Footer />
    </div>
  );
};

export default EnrollForm;
