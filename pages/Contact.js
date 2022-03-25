import React, { useRef, useState, useEffect } from "react";
import css from "../styles/Contact.module.scss";

import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";


export default function Contact() {
    const form = useRef();

    const [message, setMessage] = useState(false);

    // SEND EMAIL

    init("UO7aWp3avYr1CXJvM");


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pz10p7g",
                "test_mail",
                form.current,
                "UO7aWp3avYr1CXJvM"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };


    // SPAN FUGACE

    let timerInfo
    let display  = false

    const toggleBtn = () => {
        display = true
    }

    if(display){
        
        timerInfo = setTimeout(() => {
            setMessage(true)
        }, 1000)

        display = false
    }

    return (
        <div className={css.globalContainer}>
            <div className={css.title}>
                <h1>Contactez moi !</h1>
            </div>
            <div className={css.rightPart}>
                <form ref={form}  className={css.form}>
                    <div className={css.formName}>
                        <input
                            type="text"
                            id="firstName"
                            name="from_name"
                            placeholder="Nom : "
                        />
                    </div>

                    <div className={css.formMail}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email :"
                        />
                    </div>

                    <div className={css.formMail}>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Sujet :"
                        />
                    </div>

                    <div className={css.formMessage}>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="votre message..."
                        ></textarea>
                    </div>

                    <button
                    onClick={toggleBtn}
                     className={css.btnSubmit} type="submit">
                        Envoyer
                    </button>
                    
                    {message && (
                        <span className={css.span}>
                            Message envoyé 
                        </span>
                    )}

                </form>
            </div>
        </div>
    );
}

       {/* <div className={css.leftPart}>
                <div className={css.title}>
                    <h1>CONTACT</h1>
                    <p>Hésitez pas à me contacter</p>
                </div>
                <div className={css.phone}>
                    <h3>Téléphone</h3>
                    <p>00 00 00 00 00</p>
                </div>
                <div className={css.mail}>
                    <h3>Email</h3>
                    <p>hirokohiroko1@gmail.com</p>
                </div>
            </div> */}