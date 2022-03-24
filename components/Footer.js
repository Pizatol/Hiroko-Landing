import React from "react";
import css from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "../public/facebook.png";

export default function Footer() {
    return (
        <footer className={css.globalContainer}>
            <div className={css.phone}>
                <h2>Téléphone</h2>
                <p>00 00 00 00</p>
            </div>
            <div className={css.email}>
                <h2>Email</h2>
                <p>info@mysite.com</p>
            </div>
            <div className={css.network}>
                <h2>Retrouvez moi !</h2>
                <Link
                    href="https://www.facebook.com/cafejaponais"
                    passHref={true}
                >
                    <div className={css.img}>
                        <Image
                            src={facebook}
                            width={30}
                            height={30}
                            alt="icone facebook"
                            layout="responsive"
                        />
                    </div>
                </Link>
            </div>
            <div className={css.created}>
                <p>©2022 All rights reserved.</p>
            </div>
        </footer>
    );
}
