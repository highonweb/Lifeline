import React, { useState } from 'react';
import styles from './style.module.css';
import logo from './life-vest-logo3.jpg';
import Button from '@material-ui/core/Button';
import { formatMs } from '@material-ui/core';


export const OrganizationForm = () => {

    const [response, setResponse] = useState({
        name : "",
        location : "",
        contactDetails : ""
    });

    const handleChange = (e) => {
        setResponse({
            ...response,
            [e.target.name] : e.target.value
        });

        // console.log(response);
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        console.log(response);
    }

    return (
        <div>
            <div className={styles.titleBox} >
                <img src={logo} className={styles.logo} />
                <h1 className={styles.title} >Organization Form</h1>

            </div>
            <div className={styles.formContainer} >
                <form>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >Name</p>
                        <input type="text" autoComplete="off" name="name" placeHolder="Name" onInput={handleChange} ></input>
                    </div>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >Location</p>
                        <input type="text" autoComplete="off" name="location" placeHolder="Location" onInput={handleChange} ></input>
                    </div>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >Contact Details</p>
                        <input type="text" autoComplete="off" name="contactDetails" placeHolder="Contact Details" onInput={handleChange} ></input>
                    </div>
                    
                    <div className={styles.buttonBox}>
                        <Button variant="contained" color="primary" disableElevation   onClick={submitForm}  >
                            Submit
                        </Button>
                    </div>

                </form>

            </div>
        </div>
    )
}