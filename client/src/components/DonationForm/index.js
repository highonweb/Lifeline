import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "./life-vest-logo3.jpg";
import Button from "@material-ui/core/Button";
import { formatMs } from "@material-ui/core";

const DonationForm = () => {
  const [response, setResponse] = useState({
    name: "",
    bloodGroup: "",
    id: "",
    address: "",
    organs: [],
  });

  const handleChange = (e) => {
    setResponse({
      ...response,
      [e.target.name]: e.target.value,
    });

    // console.log(response);
  };

  const handleChange2 = (e) => {
    console.log(e.target.checked);
    let organs = response.organs;
    let index;
    if (e.target.checked) {
      organs.push(e.target.value);
    } else {
      index = organs.indexOf(e.target.value);
      organs.splice(index, 1);
    }
    setResponse({
      ...response,
      organs: organs,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    console.log(response);
  };

  return (
    <div>
      <div className={styles.titleBox}>
        <img src={logo} className={styles.logo} />
        <h1 className={styles.title}>Donation Form</h1>
      </div>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.questionBox}>
            <p className={styles.question}>Name</p>
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeHolder="Name"
              onInput={handleChange}
            ></input>
          </div>
          <div className={styles.questionBox}>
            <p className={styles.question}>Blood Group</p>
            <input
              type="text"
              autoComplete="off"
              name="bloodGroup"
              placeHolder="Blood Group"
              onInput={handleChange}
            ></input>
          </div>
          <div className={styles.questionBox}>
            <p className={styles.question}>ID Proof</p>
            <input
              type="text"
              autoComplete="off"
              name="id"
              placeHolder="ID Proof"
              onInput={handleChange}
            ></input>
          </div>
          <div className={styles.questionBox}>
            <p className={styles.question}>Address</p>
            <input
              type="text"
              autoComplete="off"
              name="address"
              placeHolder="Address"
              onInput={handleChange}
            ></input>
          </div>
          <div className={styles.questionBox}>
            <p className={styles.question}>Organs</p>
            <input
              type="checkbox"
              name="organs[]"
              value="eyes"
              onChange={handleChange2}
            />
            <label for="eyes">Eyes</label>
            <br />
            <input
              type="checkbox"
              name="organs[]"
              value="kidney"
              onChange={handleChange2}
            />
            <label for="kidney">Kidney</label>
            <br />
            <input
              type="checkbox"
              name="organs[]"
              value="liver"
              onChange={handleChange2}
            />
            <label for="liver">Liver</label>
            <br />
            <input
              type="checkbox"
              name="organs[]"
              value="heart"
              onChange={handleChange2}
            />
            <label for="heart">Heart</label>
            <br />
            <input
              type="checkbox"
              name="organs[]"
              value="lungs"
              onChange={handleChange2}
            />
            <label for="lungs">Lungs</label>
            <br />
          </div>
          <div className={styles.buttonBox}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={submitForm}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DonationForm;
