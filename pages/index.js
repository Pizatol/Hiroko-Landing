import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import css from "../styles/Home.module.css";

import Footer from "../components/Footer";

import hiroko from "../public/assets/profil/hiro.jpg";
import wallpaper from "../public/wallpaper.jpg";
import portrait from '../public/assets/profil/portrait.jpg'

export default function Home() {
    return (
        <div className={css.globalContainer}>
            <Head>
                <title>Café Japonais by Hiroko Yamamoto</title>
                <meta
                    name="professeur de langue japonaise à Paris, cours particuliers et en groupe"
                    content="Generated by create next app"
                />
                <meta name="google-site-verification" content="qLi1HaHwK_tBj0eIjfywq-9iQIy5JD0Jlh7vWqKGej4" />
                {/* <link rel="icon" href="../public/fav.png" /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={css.mainContainer}>
            
                <div className={css.wallpaper}>
                    <Image
                        src={wallpaper}
                        width={2400}
                        height={1590}
                        alt="fond d'écran"
                        // layout="responsive"
                        layout="fixed"
                        placeholder="blur"
                    />
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
            <div className={css.contact}>
                <Link href="/Contact">
                    <button className={css.btnRdv}>Me contacter</button>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
