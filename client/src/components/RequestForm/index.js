import React, { useState } from 'react';
import styles from './style.module.css';
import logo from './life-vest-logo3.jpg';
import Button from '@material-ui/core/Button';
import { formatMs } from '@material-ui/core';


export const RequestForm = () => {

    const [response, setResponse] = useState({
        name : "",
        age : "",
        id : "",
        bloodGroup : "",
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
                <h1 className={styles.title} >Request Form</h1>

            </div>
            <div className={styles.formContainer} >
                <form>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >Name</p>
                        <input type="text" autoComplete="off" name="name" placeHolder="Name" onInput={handleChange} ></input>
                    </div>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >Age</p>
                        <input type="text" autoComplete="off" name="age" placeHolder="Age" onInput={handleChange} ></input>
                    </div>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >ID Proof</p>
                        <input type="text" autoComplete="off" name="id" placeHolder="ID Proof" onInput={handleChange} ></input>
                    </div>
                    <div className={styles.questionBox} >
                        <p className={styles.question} >Blood Group</p>
                        <input type="text" autoComplete="off" name="bloodGroup" placeHolder="Blood Group" onInput={handleChange} ></input>
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