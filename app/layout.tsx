import './globals.css';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Wrapper from '@/components/content/Wrapper';
import Background from '@/components/Background';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
	title: 'Pokedex',
	description: 'A pokedex app that uses the PokeAPI',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${outfit.className} bg-black`}>
				<Background />
				<Navbar />
				<Wrapper>{children}</Wrapper>
				<Footer />
			</body>
		</html>
	);
}
