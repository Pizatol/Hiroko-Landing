import React from "react";
import css from "../styles/Experience.module.scss";
import Image from "next/image";
import Footer from "../components/Footer";

import hirokoCours from "../public/assets/profil/hirokoCours.JPG";

export default function Experience() {
    return (
        <div className={css.globalContainer}>
            <h1>Qui suis-je ? </h1>
            <section>
                <div className={css.card}>
                    <div className={css.left}>
                        <Image
                            src={hirokoCours}
                            alt="image Hiroko"
                            width={326 * 1.5}
                            height={244 * 1.5}
                            layout="responsive"
                        />
                    </div>
                    <div className={css.right}>
                        <h4>
                            Je m&apos;appelle Hiroko et je dispense des
                            cours de langue japonaise depuis plus de 20 ans!
                        </h4>
                    </div>
                </div>

                <div className={css.cv}>
                    <p>
						  👶🏻
                        J&apos;enseigne à des enfants de l&apos;association DULALA, ils
                        sont âgés de 3 à 7 ans. S&apos;amuser et enseigner est
                        devenue une seconde nature chez moi! Riche de cette
                        expérience, j&apos;utilise beaucoup de méthodes ludiques pour
                        apprendre facilement.
                    </p>


						  <p>
						  👨🏻‍🎓 Je donne  cours dans des écoles de tous  horizons :
						  </p>
						  <ul>
							  <li>IPAC (école de commerce)</li>
							  <li>ISMAC (école de marketting / commerce)</li>
							  <li>CEGI (école d&apos;ingénieur)</li>
							  <li>CREAPOLE (école de design)</li>
							  <li>GAMING CAMPUS ( école de développement et Marketting spécialisée dans les jeux vidéos)</li>
							  <li>IIM (Institue Of Intern)</li>
							  <li>...</li>
						  </ul>


						

							<p> 👩‍🏫 J&apos;enseigne également aux adultes, je construis mes cours en me basant sur les intérêts personnels de mes élèves.</p>
							<ul>
								<li>Mairie de Paris</li>
								<li>Entreprises (Toyota Paris, L&apos;Oréal...)</li>
								<li>Cours individuels (des élèves collégiens aux personnes retraitées)</li>
							</ul>

                </div>
            </section>
            <Footer/>
        </div>
    );
}
