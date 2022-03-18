import React, { useEffect, useState } from "react";
import Slider from "../components/slider/Slider";
import css from "../styles/Galerie.module.scss";

export default function Galerie() {
    const [appear, setAppear] = useState(false);

    return (
        <div className={css.galerieContainer}>


        
            <Slider />
        </div>
    );
}
