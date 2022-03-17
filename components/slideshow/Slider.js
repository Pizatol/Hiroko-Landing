import React from 'react' 
import css from '../../styles/Slide.module.scss'
import { Slide } from 'react-slideshow-image';
import Image from 'next/image'

import img1 from '/public/assets/slider/j2.JPG'
import img2 from '/public/assets/slider/j3.JPG'
import img3 from '/public/assets/slider/j4.JPG'





export default function Slider() {

	const proprietes = {
		duration : 5000,
		transitionDuration : 500,
		infinite : true,
		indicators : true,
		arrow: true
	}


  return (

	 <div>
		<Slide {...proprietes}>
			
			<div className={css.image}>
				<Image
				src={img1}
					width={800}
					height={800}
					alt='image 1'
				/>
			</div>

			<div className={css.image}>
				<Image
				src={img2}
					width={800}
					height={800}
					alt='image 2'
				/>
			</div>

			<div className={css.image}>
				<Image
				src={img3}
					width={800}
					height={800}
					alt='image 3'
				/>
			</div>

			
		</Slide>
	 </div>
  )
}
