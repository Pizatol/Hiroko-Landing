import React from "react";
import css from "../styles/Tarifs.module.scss";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Tarifs() {
    return (
        <div className={css.globalContainer}>
         <h4 className={css.cotisation}>
                    Frais de cotisation gratuits !
                </h4>
            <div className={css.container}>
               

                <div className={css.cardContainer}>
                    {/* COURS INDIVIDUEL */}

                    <div className={css.card}>
                        <div className={css.title}>
                            <h2>cours individuel</h2>
                            <h3> 40 € / cours</h3>
                            <h4 className={css.tarifEtudiant}>
                                
                                10 cours : 350 €
                            </h4>
                        </div>

                        <div className={css.body}>
                            Le cours est complètement construit à la carte.
                            Chaque élève avance à son rythme; les contenus
                            peuvent être adaptés aux centres d&apos;interêts de
                            chacun.
                        </div>

                        <div className={css.bottom}>
                            <Link href="/Contact">
                                <a>Je m&apos;inscris !</a>
                            </Link>
                        </div>
                    </div>

                    {/* COURS SEMI INDIVIDUEL */}

                    <div className={css.card2}>
                        <div className={css.title2}>
                            <h2>cours semi-individuel</h2>
                            <span>(2-3 personnes)</span>
                            <h3> 25€ / cours</h3>
                            <h4 className={css.tarifEtudiant}>
                                
                                10 cours : 200 €
                            </h4>
                        </div>

                        <div className={css.body}>
                            Le cours se déroule dans une ambiance conviviale, et
                            nous pouvons adapter le niveau de cours au rythme de
                            tous.
                        </div>

                        <div className={css.bottom2}>
                            <Link href="/Contact">
                                <a>Je m&apos;inscris !</a>
                            </Link>
                        </div>
                    </div>

                    {/* COURS EN GROUPE */}

                    <div className={css.card3}>
                        <div className={css.title3}>
                            <h2>cours en groupe</h2>
                            <span>(4-6 personnes)</span>
                            <h3> 15€ / cours</h3>
                            <h4 className={css.tarifEtudiant}>
                                
                                10 cours : 100 €
                            </h4>
                        </div>

                        <div className={css.body}>
                            La taille du groupe permet d&apos;alimenter les
                            conversations dans une bonne ambiance et encourager
                            l&apos;entraide des élèves.
                        </div>

                        <div className={css.bottom3}>
                            <Link href="/Contact">
                                <a>Je m&apos;inscris !</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        <div className={css.downPage}>

            <h3>

                    Un cours dure une heure. Grâce à la taille réduite des groupes, nous pouvons progresser efficacement et encourager fortement la participation de chaque élève. 
            </h3>
            <h4>Règlements autorisés : chèque et virements bancaires</h4>
             
        </div>
        <Footer/>
        </div>
    );
}
