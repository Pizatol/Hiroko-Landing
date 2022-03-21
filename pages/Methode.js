

import React from 'react'
import css from '../styles/Methode.module.scss'
import eleves from '../public/eleves.png'
import Image from 'next/image'

export default function Methode() {
  return (
	<>

			<div className={css.cardContainer} id="box">
{/* 
				<Image
					src={eleves}
					width={500}
					height={500}
					alt='image eleves'
				/> */}

				<h1>Méthode personnelle</h1>

				<p>Je choisis un manuel (adapté aux élèves) pour avancer et qui leur permettra, après le cours, de réviser seuls chez eux. En m&apos;appuyant sur le livre, j&apos;introduits de multiples jeux et je crée des conversations pour que les élèves puissent participer.  </p>

				<p>
					J&apos;organise des sorties pour faire découvrir la culture japonaise ! 
					<ul>
						<li>Cérémonie du thé,</li>
						<li>Cinéma japonais,</li>
						<li>Pique niques,</li>
						<li>Cours de cuisine japonaise</li>
						<li>...</li>
					</ul>
				</p>


			</div>


		


	</>
  )
}

// &apos;