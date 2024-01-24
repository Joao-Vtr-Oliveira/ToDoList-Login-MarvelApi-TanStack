import { CharacterRequestType } from '../types/CharacterRequestType';
import { CharactersType } from '../types/CharactersType';

export const marvelApiRequest = async (
	offset: number
): Promise<CharactersType> => {
	const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bacb409123d9363a410cc00b0231526e&hash=10aeae3787f41c0b8295e013fa721315&limit=10&offset=${offset}`;
	try {
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
		throw new Error('Ocorreu um erro durante a solicitação');
	}
};

export const marvelApiCharacterRequest = async (id: string): Promise<CharacterRequestType> => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=bacb409123d9363a410cc00b0231526e&hash=10aeae3787f41c0b8295e013fa721315`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Ocorreu um erro durante a solicitação");
  }
};