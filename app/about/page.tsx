'use client';

import Lottie from 'lottie-react';
import avatarAnimation from '@/assets/animations/avatar.json';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useEffect } from 'react';
import { getPokemonAbilitiesAndMoves, getPokemonEvolutions } from '@/utils/api/pokemon';

const About = () => {
  useEffect(() => {
    const testLoad = async () => {
      const response = await getPokemonAbilitiesAndMoves(1);

      console.log(response);
    }

    testLoad();
  }, [])

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
