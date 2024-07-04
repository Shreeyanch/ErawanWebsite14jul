import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./share-your-travels-form.module.css";

const ShareYourTravelsForm = ({ className = "" }) => {
  return (
    <div className={[styles.shareYourTravelsForm, className].join(" ")}>
      <div className={styles.formHeader}>
        <img className={styles.noMessagesIcon} alt="" src="/nomessages.svg" />
        <div className={styles.formTitle}>Get in Touch</div>
      </div>
      <div className={styles.sendUsA}>
        Send us a message about the product you're interested in, and we'll
        respond promptly.
      </div>
      <form className={styles.form}>
        <div className={styles.formFields}>
          <div className={styles.nameInput}>
            <TextField
              className={styles.input}
              color="primary"
              name="Name"
              label="Name"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
          </div>
          <div className={styles.nameInput}>
            <TextField
              className={styles.input}
              color="primary"
              name="PhoneNumber"
              label="Phone Number"
              size="medium"
              required={true}
              variant="outlined"
              type="text"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            />
          </div>
          <div className={styles.nameInput}>
            <TextField
              className={styles.input2}
              color="primary"
              name="Description"
              rows={4}
              label="Description"
              required={true}
              variant="outlined"
              multiline
            />
          </div>
        </div>
        <button className={styles.formSubmitButton}>
          <div className={styles.submit}>Submit</div>
        </button>
      </form>
    </div>
  );
};

ShareYourTravelsForm.propTypes = {
  className: PropTypes.string,
};

export default ShareYourTravelsForm;
