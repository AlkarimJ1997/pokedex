import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { addDoc, getDocs, query, where } from 'firebase/firestore';
import {
	auth,
	usersCollection,
	pokemonCollection,
} from '@/lib/firebase/config';

export const fetchUser = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const { user } = await signInWithPopup(auth, provider);

		if (!user || !user.email) return null;

		const q = query(usersCollection, where('uid', '==', user.uid));
		const fetchedUser = await getDocs(q);

		if (fetchedUser.docs.length === 0) {
			// Create new user
			await addDoc(usersCollection, {
				uid: user.uid,
				email: user.email,
			});
		}

		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getUserPokemon = async (userInfo: UserInfo) => {
	try {
		if (!userInfo || !userInfo.email) return [];

		const q = query(pokemonCollection, where('email', '==', userInfo.email));
		const fetchedPokemon = await getDocs(q);

		const userPokemon: UserPokemon[] = [];

		fetchedPokemon.forEach(async doc => {
			const pokemon = (await doc.data().pokemon) as Pokemon;
			const types = pokemon.types.map(name => ({
				[name]: pokemon[name],
			}));

			userPokemon.push({ ...pokemon, firebaseId: pokemon.id, types });
		});

		return userPokemon;
	} catch (error) {
		console.log(error);
		return [];
	}
};
