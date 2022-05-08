import React, { useRef, useEffect } from "react";
import css from "../styles/Methode.module.scss";
import Footer from "../components/Footer";

import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



import teacher from "../public/assets/dessins/job_sensei.png";
import student_reading_book from "../public/assets/dessins/student_reading_book.png";
import rpg_dessin from "../public/assets/dessins/rpg.png";

export default function Methode() {

    gsap.registerPlugin(ScrollTrigger);

    const img_glace = useRef(null);
    const img_soupe = useRef(null);
    const img_group = useRef(null)

    useEffect(() => {




        gsap.fromTo(
            img_glace.current,
            { x: -100 , opacity : 0},
            {
                scrollTrigger: {
                    trigger: img_glace.current,
                   
                    start : "top 85%",
                },
                opacity : 1,
                x: 0,
                duration : 1
            }
        );
        gsap.fromTo(
            img_soupe.current,
            { x: 100 , opacity : 0},
            {
                scrollTrigger: {
                    trigger: img_soupe.current,
                   
                    start : "top 85%",
                },
                opacity : 1,
                x: 0,
                duration : 1
            }
        );
         gsap.fromTo(
            img_group.current,
            { y : 100, opacity : 0 },
            {
                scrollTrigger: {
                    trigger: img_group.current,
                 
                    start : "top 90%",
                },
                opacity : 1,
                y : 0,
                duration : 1
            }
        );
    }, []);

    return (
        <>
            <div className={css.globalContainer}>
                <h1 className={css.mainTitle}>Méthode personnalisée</h1>
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

                        {/* DESSIN ELEVE AVEC LIVRE */}
                        <div className={css.container_dessins}>
                            <div className={css.student_reading_book_container}>
                                <Image
                                    src={student_reading_book}
                                    width={537}
                                    height={817}
                                    layout="responsive"
                                    alt="élève avec livre de cours japonais"
                                />
                            </div>

                            <div className={css.rpg_container}>
                                <Image
                                    src={rpg_dessin}
                                    width={500}
                                    height={414}
                                    alt="élèves qui jouent à un rpg en étudiant la langue japonaise"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={css.img}>
                        <Image
                            src="/assets/profil/methode.jpg"
                            width={5184}
                            height={3456}
                            alt="méthode ludique de café japonais by Hiroko Yamamoto"
                            layout="responsive"
                        />
                    </div>

                    {/* DESSIN PROFESSEUR */}

                    <div className={css.dessin_teacher_container}>
                        <div className={css.dessin_teacher_img}>
                            <Image
                                src={teacher}
                                width={197}
                                height={300}
                                alt="dessin professeur"
                                // layout="responsive"
                            />
                        </div>
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
                        <div ref={img_glace}>
                            <Image
                                src="/assets/profil/glace.JPG"
                                width={3072}
                                height={2304}
                                alt="glace japonaise"
                                layout="responsive"
                            />
                        </div>
                        <div ref={img_group}>
                            <Image
                                src="/assets/profil/groupe.jpg"
                                width={639}
                                height={426}
                                alt="image de groupe"
                                layout="responsive"
                            />
                        </div>
                        <div ref={img_soupe}>
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
