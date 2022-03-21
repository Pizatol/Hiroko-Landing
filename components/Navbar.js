import React from "react";
import css from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import logo from "../public/assets/logo.png";

export default function Navbar({ children }) {
    return (
        <>
            <div className={css.container}>
                <div className={css.left}>
                    <div className={css.logo}>
                        <Link href="/">
                            <a>
                                <Image
                                    src={logo}
                                    width={150}
                                    height={150}
                                    alt="logo café japonais"
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={css.center}>
                    <div className={css.containerTitle}>
                        <Link href="/">
                            <a>
                                <div className={css.upperTitle}>
                                    <h1>Café Japonais </h1>
                                </div>
                                <div className={css.downTitle}>
                                    <h2>
                                        <span>By</span>Hiroko Yamamoto
                                    </h2>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={css.right}>
                    {/* <Link href="/">
                    <a className={css.lien}>Horaire</a>
                </Link> */}
                    <Link href="/Methode">
                        <a className={css.lien}>Méthode</a>
                    </Link>
                    <Link href="/Tarifs">
                        <a className={css.lien}>Tarifs</a>
                    </Link>
                    <Link href="/Experience">
                        <a className={css.lien}>Expérience</a>
                    </Link>
                    <Link href="/Galerie">
                        <a className={css.lien}>Galerie</a>
                    </Link>
                    <Link href="/Contact">
                        <a className={css.lien}>Contact</a>
                    </Link>
                </div>
            </div>
            {children}
        </>
    );
}
