import React, { useState } from "react";
import Image from "next/image";
import css from "../../styles/Slider.module.scss";

import img1 from "../../public/assets/SliderImage/j1.JPG";
import img2 from "../../public/assets/SliderImage/j2.JPG";
import img3 from "../../public/assets/SliderImage/j3.JPG";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
    //  const dataImg = [img1, img2, img3]

    const dataImg = [
        {
            id: 1,
            image: img1,
            title: "image 1",
        },
        {
            id: 2,
            image: img2,
            title: "image 2",
        },
        {
            id: 3,
            image: img3,
            title: "image 3",
        },
    ];

    return (
        <div className={css.globalContainer}>
            <div className={css.overlay}></div>

            <Carousel className={css.caroussel}>
                {dataImg.map((slide) => (
                    <div key={slide.id}>
                        <Image
                            src={slide.image}
                            width={600}
                            height={500}
                            alt={slide.title}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
