import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
	addDoc,
	deleteDoc,
	doc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import {
	auth,
	usersCollection,
	pokemonCollection,
} from '@/lib/firebase/config';

export const getUser = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const { user } = await signInWithPopup(auth, provider);

		if (!user || !user.email) return null;

		const q = query(usersCollection, where('uid', '==', user.uid));
		const fetchedUser = await getDocs(q);

		if (fetchedUser.empty) {
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

		return (await Promise.all(
			fetchedPokemon.docs.map(async doc => {
				const pokemon = (await doc.data().pokemon) as Pokemon;

				return { ...pokemon, firebaseId: `${pokemon.id}` };
			})
		)) as UserPokemon[];
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const saveUserPokemon = async (pokemon: Pokemon, userInfo: UserInfo) => {
	try {
		await addDoc(pokemonCollection, { pokemon, email: userInfo.email });

		return { ok: true };
	} catch (error) {
		console.log(error);
		return { ok: false };
	}
};

export const removeUserPokemonFromFirebase = async (id: number) => {
	try {
		// Get document ID from firebase
		const q = query(pokemonCollection, where('pokemon.id', '==', id));
		const fetchedPokemon = await getDocs(q);
		const docId = fetchedPokemon.docs[0].id;

		await deleteDoc(doc(pokemonCollection, docId));

		return { ok: true };
	} catch (error) {
		console.log(error);
		return { ok: false };
	}
};
