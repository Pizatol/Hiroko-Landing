import React from "react";
import css from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "../public/facebook.png";

export default function Footer() {
    return (
        <footer className={css.globalContainer}>
            
            <div className={css.email}>
                <h2></h2>
                <p></p>
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
