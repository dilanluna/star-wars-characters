import { useInfiniteQuery, useQuery } from 'react-query';

const baseUrl = import.meta.env.VITE_API_URL;

export type Character = {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  url: string;
};

export type Paginate = {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
};

export function extractId(url: string): number {
  const parts = url.split('/');
  return Number(parts[parts.length - 2]);
}

async function fetchCharacters(
  page: number,
  search?: string,
): Promise<Paginate> {
  const url = new URL(`${baseUrl}/people`);
  url.searchParams.set('page', String(page));

  if (search) {
    url.searchParams.set('search', search);
  }

  const response = await fetch(url.toString());
  const data = await response.json();
  return data;
}

async function getCharacterById(id: number): Promise<Character> {
  const response = await fetch(`${baseUrl}/people/${id}`);
  const data = await response.json();
  return data;
}

export const useCharacter = (search?: string) =>
  useInfiniteQuery(
    ['infiniteCharacters', search],
    ({ pageParam = 1 }) => fetchCharacters(pageParam, search),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) {
          return null;
        }

        const url = new URL(lastPage.next);
        const nextPage = url.searchParams.get('page');
        return Number(nextPage);
      },
    },
  );

export const useCharacterById = (id: number) =>
  useQuery(['characters', 'detail', id], () => getCharacterById(id));
