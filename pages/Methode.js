import React from "react";
import css from "../styles/Methode.module.scss";
import Footer from "../components/Footer";

import Image from "next/image";

// import feuille from "../public/assets/profil/feuille.JPG";
// import glace from "../public/assets/profil/glace.JPG";
// import soupe from "../public/assets/profil/soupe.JPG";

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
                           
                            src="/assets/profil/methode.JPG"
                            width={5184}
                            height={3456}
                            alt="méthode ludique"
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
                               
                                src="/assets/profil/glace.JPG"
                                width={3072}
                                height={2304}
                                alt="glace japonaise"
                                layout="responsive"
                               
                               
                            />
                        </div>
                        <div>
                            <Image
                              
                                src="/assets/profil/groupe.jpg"
                                width={639}
                                height={426}
                                alt="image de groupe"
                                layout="responsive"
                            />
                        </div>
                        <div>
                            <Image
                              
                                src="/assets/profil/soupe.JPG"
                                width={3072}
                                height={2304}
                                alt="plat japonais"
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
