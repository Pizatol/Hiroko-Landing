import React, { useRef, useState, useEffect } from "react";
import css from "../styles/Contact.module.scss";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

import wallpaper from "../public/wallpaper.jpg";
import rabbit from '../public/assets/dessins/rabbit_mail.png'

export default function Contact() {
    const form = useRef();

    const [message, setMessage] = useState(false);

    // SEND EMAIL

    init("K3nQii38awYwjYWMp");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs

            .sendForm(
                "service_uf25x2s",
                "template_hslew6v",
                form.current,
                "K3nQii38awYwjYWMp"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        const timerReset = setTimeout(() => {
            e.target.reset();
        }, 1000);

        return () => clearTimeout(timerReset);

        e.target.reset();
    };

    // SPAN FUGACE

    let timerInfo;
    let display = false;

    const toggleBtn = () => {
        if (
            form.current[0].value &&
            form.current[1].value &&
            form.current[2].value &&
            form.current[3].value !== ""
        ) {
            display = true;

            if (display) {
                setMessage(true);

                timerInfo = setTimeout(() => {
                    setMessage(false);
                }, 1500);

                return () => clearTimeout(timerInfo);
            }
        }
    };

    return (
        <div className={css.globalContainer}>


        {/* RABIIT MAIL */}

            <div className={css.rabbit_container} > 
                <div className={css.rabbit_card}>
                    <div className={css.rabbit_img}>
                        <Image
                        src={rabbit}
                        width={200}
                        height={200}
                        alt="rabbit mail"
                         />

                        
                    </div>
                </div>
            </div>

            {/* <div className={css.wallpaper}>
                <Image
                    src={wallpaper}
                    width={2400}
                    height={1590}
                    alt="fond d'écran"
                    // layout="responsive"
                    layout="fixed"
                    placeholder="blur"
                />
            </div> */}

            <div className={css.title}>
                <h1>Contactez moi !</h1>
            </div>

            <div className={css.rightPart}>
                <form ref={form} onSubmit={sendEmail} className={css.form}>
                    <div className={css.formName}>
                        <input
                            type="text"
                            id="firstName"
                            name="from_name"
                            placeholder="Nom : "
                            required
                        />
                    </div>

                    <div className={css.formMail}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email :"
                            required
                        />
                    </div>

                    <div className={css.formMail}>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Sujet :"
                            required
                        />
                    </div>

                    <div className={css.formMessage}>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="votre message..."
                            required
                        ></textarea>
                    </div>

                    <button
                        onClick={toggleBtn}
                        className={css.btnSubmit}
                        type="submit"
                    >
                        Envoyer
                    </button>

                    {message && (
                        <span className={css.span}>Message envoyé</span>
                    )}
                </form>
            </div>
        </div>
    );
}

{
    /* <div className={css.leftPart}>
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
            </div> */
}
