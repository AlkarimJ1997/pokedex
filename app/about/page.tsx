'use client';

import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Lottie from 'lottie-react';
import avatarAnimation from '@/assets/animations/avatar.json';
import Link from 'next/link';

const About = () => {
	return (
		<section className='mx-auto grid h-full max-w-[90%] place-items-center'>
			<div>
				<Lottie
					animationData={avatarAnimation}
					alt='Avatar'
					className='mx-auto mb-6 w-60 rounded-2xl ring-2 ring-accent xs:w-80 md:mb-12 md:w-96 lg:w-[600px]'
				/>
				<hgroup className='space-y-2 text-center text-lg text-slate-200 md:text-xl lg:space-y-4 lg:text-2xl'>
					<h1>Hi, I am Alkarim Jiwa</h1>
					<h2>The creator of this awesome pokedex</h2>
					<h4>
						This project is inspired by a Youtube tutorial rebuilt with Next.js
					</h4>
				</hgroup>
				<div className='mt-6 flex w-full justify-center gap-12 md:mt-8'>
					<Link href='https://github.com/AlkarimJ1997' title='Github'>
						<FaGithub size={40} className='text-accent' />
						<span className='sr-only'>Github</span>
					</Link>
					<Link href='#' title='Youtube'>
						<FaYoutube size={40} className='text-accent' />
						<span className='sr-only'>Youtube</span>
					</Link>
					<Link href='#' title='Linkedin'>
						<FaLinkedin size={40} className='text-accent' />
						<span className='sr-only'>Linkedin</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
