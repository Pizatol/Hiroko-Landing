import React, { useEffect, useState, useContext } from "react";
import Slider from "../components/slider/Slider";
import css from "../styles/Galerie.module.scss";
import Image from "next/image";
import { ModalContext } from "../context/ModalContext";



// import img1 from '../public/assets/galeryImage/img1.jpg'
// import img2 from '../public/assets/galeryImage/img2.jpg'
// import img3 from '../public/assets/galeryImage/img3.jpg'
// import img4 from '../public/assets/galeryImage/img4.jpg'
// import img5 from '../public/assets/galeryImage/img5.jpg'
// import img6 from '../public/assets/galeryImage/img6.jpg'
// import img7 from '../public/assets/galeryImage/img7.jpg'
// import img8 from '../public/assets/galeryImage/img8.jpg'
// import img9 from '../public/assets/galeryImage/img9.jpg'
// import img10 from '../public/assets/galeryImage/img10.jpg'
// import img11 from '../public/assets/galeryImage/img11.jpg'

export default function Galerie() {
    const [appear, setAppear] = useContext(ModalContext);

    const [indexImg, setIndexImg] = useState("");

    const clickImg = (e) => {
        setAppear(!appear);
        setIndexImg(e.target.id);
    };

    // console.log(indexImg);

    // const dataImg = [
    //     {
    //         id: 1,
    //         image: img1,
    //         title: "image 1",
    //     },
    //     {
    //         id: 2,
    //         image: img2,
    //         title: "image 2",
    //     },
    //     {
    //         id: 3,
    //         image: img3,
    //         title: "image 3",
    //     },
    //     {
    //         id: 4,
    //         image: img4,
    //         title: "image 4",
    //     },
    //     {
    //         id: 5,
    //         image: img5,
    //         title: "image 5",
    //     },
    //     {
    //         id: 6,
    //         image: img6,
    //         title: "image 6",
    //     },
    //     {
    //         id: 7,
    //         image: img7,
    //         title: "image 7",
    //     },
    //     {
    //         id: 8,
    //         image: img8,
    //         title: "image 8",
    //     },
    //     {
    //         id: 9,
    //         image: img9,
    //         title: "image 9",
    //     },
    //     {
    //         id: 10,
    //         image: img10,
    //         title: "image 10",
    //     },
    //     {
    //         id: 11,
    //         image: img11,
    //         title: "image 11",
    //     },
    // ];

    return (
        <div className={css.galerieContainer}>
            {/* <div className={css.galerieImg}>
                {dataImg.map((img) => (
                    <div
                        onClick={(e) => clickImg(e)}
                        className={css.image}
                        key={img.id}
                    >
                        <Image
                           
                            id={img.id}
                            src={img.image}
                            width={400}
                            height={200}
                            alt={img.title}
                        />
                    </div>
                ))}
            </div>

            {appear && (
                <div className={css.slider}>
                    <Slider value={indexImg} />
                </div>
            )} */}
        </div>
    );
}
