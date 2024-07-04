import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./share-your-travels-form.module.css";
import React, { useState } from 'react';

const Form = ({ className }) => {
  const [Name, setName] = useState('');
  const [Contactdetails, setContactdetails] = useState('');
  const [Email, setEmail] = useState('');
  const [Howcanweimprove, setHowcanweimprove] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      Name,
      Contactdetails,
      Email,
      Howcanweimprove,
    };
    console.log(form);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const content = await response.json();
      alert("Your review has been submitted.");

      setName('');
      setContactdetails('');
      setEmail('');
      setHowcanweimprove('');
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("There was an error submitting your review. Please try again.");
    }
  };

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
      <form className={styles.form} onSubmit={handleSubmit}>
        
        <div className={styles.formFields}>
          <div className={styles.nameInput}>
            <TextField
              className={styles.input}
              color="primary"
              name="Name"
              id="Name"
              label="Name"
              required={true}
              variant="outlined"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              value={Name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={styles.nameInput}>
            <TextField
              className={styles.input}
              color="primary"
              name="Contactdetails"
              id="Contactdetails"
              label="Contact details"
              size="medium"
              required={true}
              variant="outlined"
              type="text"
              sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              value={Contactdetails}
              onChange={e => setContactdetails(e.target.value)}
            />
          </div>
          
          <div className={styles.nameInput}>
            <TextField
              className={styles.input}
              color="primary"
              name="Description"
              id="Description"
              rows={4}
              label="Description"
              placeholder="Description"
              required={true}
              variant="outlined"
              multiline
              value={Howcanweimprove}
              onChange={e => setHowcanweimprove(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className={styles.formSubmitButton}>
          <div className={styles.submit}>Submit</div>
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
