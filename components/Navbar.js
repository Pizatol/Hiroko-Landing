import React from "react";
import css from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar( {children} ) {


    return (


		<>

        <div className={css.container}>

            <div className={css.left}>
				
				<div className={css.logo}>
				
				</div>
                <Link href="/Contact">
                    <a> Hiroko Yamamoto</a>
                </Link>
            </div>

            <div className={css.right}>
                <Link href="/">
                    <a className={css.lien}>Horaire</a>
                </Link>
                <Link href="/">
                    <a className={css.lien}>Tarifs</a>
                </Link>
                <Link href="/Galerie">
                    <a className={css.lien}>Galerie</a>
                </Link>
                <Link href="/">
                    <a className={css.lien}>Contact</a>
                </Link>
            </div>
        </div>
				{children}
		</>
    );
}
