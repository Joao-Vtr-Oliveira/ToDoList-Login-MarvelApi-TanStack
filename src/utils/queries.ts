import { useQuery } from '@tanstack/react-query';
import { marvelApiCharacterRequest, marvelApiRequest } from './MarvelApi';

export const useMarvel = (offset: number) =>
	useQuery({
		queryKey: ['marvel', offset],
		queryFn: () => marvelApiRequest(offset),
		staleTime: Infinity,
	});

export const useMarvelCharacter = (id: string) => 
  useQuery({
    queryKey: ['marvelCharacter', id],
    queryFn: () => marvelApiCharacterRequest(id),
    staleTime: Infinity,
  })
