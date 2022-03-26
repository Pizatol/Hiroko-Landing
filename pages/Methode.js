import React from "react";
import css from "../styles/Methode.module.scss";

import Image from "next/image";
import wallpaper from "../public/wallpaper.jpg";
import book from "../public/assets/methode/book.jpg";
import cook from "../public/assets/methode/cook.jpg";
import tea from "../public/assets/methode/tea.jpg";

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
                            src={book}
                            width={3264}
                            height={2448}
                            alt="image livre japonais"
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
                                src={tea}
                                width={1920}
                                height={1282}
                                alt="cérémonie du thé"
                                layout="responsive"
                            />
                        </div>
                        <div>
                            <Image
                                src={cook}
                                width={1920}
                                height={1282}
                                alt="cuisine"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// &apos;
