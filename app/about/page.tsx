'use client';

import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Lottie from 'lottie-react';
import avatarAnimation from '@/assets/animations/avatar.json';
import Link from 'next/link';
import {
	getPokemonEvolutionURL,
	getPokemonEvolutions,
	getPokemonInfo,
	getPokemonLocations,
} from '@/utils/api/pokemon';
import extractColors, { BrowserOptions } from 'extract-colors';
import { getAccentColor } from '@/utils/helpers';

const About = () => {
	useEffect(() => {
		const testLoad = async () => {
			const info = await getPokemonInfo(1);
			const locations = await getPokemonLocations(1);
			const evolutionURL = await getPokemonEvolutionURL(1);
			const evolutionChain = await getPokemonEvolutions(evolutionURL);

			console.log({
				...info,
				encounters: locations,
				evolution: evolutionChain,
				evolutionLevel: evolutionChain.find(
					({ pokemon }) => pokemon.name === info?.name
				)?.level,
			});

			console.log(await getAccentColor(info?.image!));
		};

		testLoad();
	}, []);

	return (
		<div className='about'>
			<Lottie animationData={avatarAnimation} alt='Avatar' className='h-60' />
			<h1 className='profile-text'>Hi, I am Alkarim Jiwa</h1>
			<h2 className='profile-text'>The creator of this awesome pokedex</h2>
			<h4 className='profile-text'>
				This project is inspired by a Youtube tutorial rebuilt with Next.js
			</h4>
			<div className='profile-links'>
				<Link href='https://github.com/AlkarimJ1997' title='Github'>
					<FaGithub />
					<span className='sr-only'>Github</span>
				</Link>
				<Link href='#' title='Youtube'>
					<FaYoutube />
					<span className='sr-only'>Youtube</span>
				</Link>
				<Link href='#' title='Linkedin'>
					<FaLinkedin />
					<span className='sr-only'>Linkedin</span>
				</Link>
			</div>
		</div>
	);
};

export default About;
