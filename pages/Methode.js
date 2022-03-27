import React from "react";
import css from "../styles/Methode.module.scss";
import Footer from "../components/Footer";

import Image from "next/image";

import feuille from "../public/assets/Methode/feuille.jpg";
import glace from "../public/assets/Methode/glace.jpg";
import soupe from "../public/assets/Methode/soupe.jpg";

export default function Methode() {
    return (
        <>
            <div className={css.globalContainer}>
                <h1 className={css.mainTitle}>Méthode personnelle</h1>
                <div className={css.delimitation}></div>
                <div className={css.firstCard}>
                    <div className={css.text}>
                        <p>
                            Je choisis un manuel (adapté aux élèves) pour
                            avancer dans les cours en groupe et
                            semi-individuels, ce qui leur permettra après le
                            cours, de réviser seuls chez eux. En m&apos;appuyant
                            sur le livre, j&apos;introduits de multiples jeux et
                            je crée des conversations pour que les élèves
                            puissent participer.{" "}
                        </p>
                    </div>
                    <div className={css.img}>
                        <Image
                            // src={"/../public/assets/Methode/feuille.jpg"}
                            src={feuille}
                            width={960}
                            height={640}
                            alt="carré origami japonais"
                            layout="responsive"
                        />
                    </div>
                </div>
                <div className={css.middlePart}>
                    <h1>
                        J&apos;organise des sorties pour faire découvrir la
                        culture japonaise !
                    </h1>
                    <ul>
                        <li>Cérémonie du thé,</li>
                        <li>Cinéma japonais,</li>
                        <li>Pique niques,</li>
                        <li>Cours de cuisine japonaise</li>
                        <li>...</li>
                    </ul>
                    <div className={css.bottomCard}>
                        <div>
                            <Image
                                // src={"/../public/assets/Methode/glace.jpg"}
                                src={glace}
                                width={3072}
                                height={2304}
                                alt="cérémonie du thé"
                                layout="responsive"
                            />
                        </div>
                        <div>
                            <Image
                                // src={"/../public/assets/Methode/soupe.jpg"}
                                src={soupe}
                                width={3072}
                                height={2304}
                                alt="cuisine"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

// &apos;
