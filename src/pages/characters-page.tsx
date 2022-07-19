import { useState } from 'react';
import { Button, Flex, Image, VisuallyHidden, VStack } from '@chakra-ui/react';
import { useCharacter } from '../api';
import heading from '../assets/heading.png';
import SearchBar from '../components/search-bar';
import CharacterList from '../components/character-list';

export default function CharactersPage() {
  const [search, setSearch] = useState('');
  const {
    isLoading,
    data: characters,
    fetchNextPage,
    hasNextPage,
  } = useCharacter(search);

  const handleFetchNextPage = async () => {
    await fetchNextPage();
  };

  return (
    <VStack
      spacing={8}
      alignItems="stretch">
      <Flex
        as="h2"
        justifyContent="center">
        <VisuallyHidden>Star Wars Characters</VisuallyHidden>
        <Image
          src={heading}
          alt="Star Wars Characters"
        />
      </Flex>

      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!isLoading && characters && (
        <CharacterList
          characters={characters?.pages.flatMap((page) => page.results)}
        />
      )}

      {hasNextPage && (
        <Button
          colorScheme="yellow"
          onClick={handleFetchNextPage}>
          Load more
        </Button>
      )}
    </VStack>
  );
}
