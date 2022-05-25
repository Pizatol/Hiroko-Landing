import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import css from "../styles/Home.module.css";
import react, { useRef, useEffect } from "react";

import Footer from "../components/Footer";

import hiroko from "../public/assets/profil/hiro.jpg";
import wallpaper from "../public/wallpaper.jpg";
import portrait from "../public/assets/profil/portrait.jpg";

import origmai_svg from "../public/assets/svg/origami.svg";

export default function Home() {
    const rabbit_svg = useRef(null);

    const p = rabbit_svg
    console.log(p);

    return (
        <div className={css.globalContainer}>
            <Head>
                <title>Café Japonais by Hiroko Yamamoto</title>
                <meta
                    name="professeur de langue japonaise à Paris, cours particuliers et en groupe"
                    content="Generated by create next app"
                />
                <meta
                    name="google-site-verification"
                    content="qLi1HaHwK_tBj0eIjfywq-9iQIy5JD0Jlh7vWqKGej4"
                />
                {/* <link rel="icon" href="../public/fav.png" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={css.mainContainer}>
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

                <div className={css.rabbit_container}>
                   
                        <svg
                            ref={rabbit_svg}
                            className={css.rabbit}
                            // width="1323"
                            // height="652"
                            viewBox="0 0 1323 652"
                            fill="none"
                            
                        >
                            <path d="M1322 488V14"
                            //  stroke="black"
                              />
                            <path
                                d="M93.5 648.5H1180.5M1180.5 648.5V551H1155V537H1178V521.5H1158V511H1139.5V499H1132V488C1163.5 495.5 1245.6 506 1322 488V499H1314.5V511H1297.5V521.5H1273.5V537H1296V551H1273.5V648.5H1256V551H1197V648.5H1180.5Z"
                                // stroke="black"
                            />
                            <path
                                d="M132.5 562.5H109.5L118.5 553L132.5 562.5Z"
                                // stroke="black"
                            />
                            <path
                                d="M92 616.5L107 633.5L119.5 569H108L92 616.5Z"
                                // stroke="black"
                            />
                            <path
                                d="M1 0V603M1 603L11 647.5L33 651.5M1 603L33 651.5M33 651.5H40M40 651.5H91.5L101.5 643L80.9009 615L18 529.5L16.5 615L40 651.5ZM87 608.5L55.5 566L70.5 516.5L95 585L87 608.5Z"
                                // stroke="black"
                            />
                        </svg>
                   
                </div>

                <div className={css.mainLeftPart}>
                    <Image
                        src={portrait}
                        width={651}
                        height={651}
                        alt="image profil Hiroko"
                    />
                </div>

                <div className={css.mainRightPart}>
                    <h2 className={css.title1}>Konnichiwa !!</h2>
                    <h2 className={css.title2}>こんにちは !</h2>
                    <div>
                        <h1>
                            Venez apprendre le japonais dans une ambiance
                            conviviale autour d&apos;un café !
                        </h1>
                        <p>
                            Je vous propose d&apos;apprendre la langue japonaise
                            par petits groupes dans le cadre d&apos;une méthode
                            ludique mettant en avant la pratique par la
                            conversation. Avec mon expérience de plus de 20 ans
                            en tant que professeur, vous êtes certains de
                            progresser efficacement.
                        </p>
                    </div>
                </div>
            </main>
            {/* <div className={css.contact}>
                <Link href="/Contact">
                    <button className={css.btnRdv}>Me contacter</button>
                </Link>
            </div> */}
           

            <Footer />
         
        </div>
    );
}
