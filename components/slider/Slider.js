import React, { useState, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Image from "next/image";
import css from "../../styles/Slider.module.scss";



import img1 from "../../public/assets/galeryImage/img1.JPG";
import img2 from "../../public/assets/galeryImage/img2.JPG";
import img3 from "../../public/assets/galeryImage/img3.JPG";
import img4 from "../../public/assets/galeryImage/img4.JPG";
import img5 from "../../public/assets/galeryImage/img5.JPG";
import img6 from "../../public/assets/galeryImage/img6.JPG";
import img7 from "../../public/assets/galeryImage/img7.JPG";
import img8 from "../../public/assets/galeryImage/img8.JPG";
import img9 from "../../public/assets/galeryImage/img9.JPG";
import img10 from "../../public/assets/galeryImage/img10.JPG";
import img11 from "../../public/assets/galeryImage/img11.JPG";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useDebugValue } from "react/cjs/react.production.min";

export default function Slider(props) {
    //  const dataImg = [img1, img2, img3]

    const [appear, setAppear] = useContext(ModalContext);

    const value = Number(props.value)
    console.log(value);

    const toggleModal = () => {
        setAppear(!appear);
    };



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
        {
            id: 4,
            image: img4,
            title: "image 4",
        },
        {
            id: 5,
            image: img5,
            title: "image 5",
        },
        {
            id: 6,
            image: img6,
            title: "image 6",
        },
        {
            id: 7,
            image: img7,
            title: "image 7",
        },
        {
            id: 8,
            image: img8,
            title: "image 8",
        },
        {
            id: 9,
            image: img9,
            title: "image 9",
        },
        {
            id: 10,
            image: img10,
            title: "image 10",
        },
        {
            id: 11,
            image: img11,
            title: "image 11",
        },
    ];

    return (
        <div className={css.globalContainer}>
          
{/* {`dataImg[${value}].id${-2}`} */}
            {appear && (
                <>
                    <div
                    onClick={toggleModal}
                     className={css.overlay}></div>

                    <Carousel className={css.caroussel} selectedItem={value -1} showArrows={true} emulateTouch={true}   >
                        {dataImg.map((slide) => (
                            <div key={slide.id}>
                            
                                <Image
                                
                                id={slide.id}
                                    src={slide.image}
                                    width={2000}
                                    height={1000}
                                    alt={slide.title}
                                />
                                <p>{slide.title}</p>
                            </div>
                           
                        ))}
                       
                    </Carousel>
                </>
            )}
        </div>
    );
}
