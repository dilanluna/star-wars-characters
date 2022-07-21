import { Link } from 'react-router-dom';
import { Button, Fade, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { extractId, Character } from '../api';

function CharacterCard({ character }: { character: Character }) {
  return (
    <Fade in={true}>
      <VStack
        p={4}
        spacing={3}
        bg="gray.700"
        boxShadow="md"
        role="listitem"
        borderRadius={5}
        alignItems="stretch">
        <Heading
          as="h5"
          size="md">
          {character.name}
        </Heading>

        <Button
          as={Link}
          size="sm"
          to={`/${extractId(character.url)}`}
          colorScheme="yellow">
          View Details
        </Button>
      </VStack>
    </Fade>
  );
}

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <VStack
      role="list"
      spacing={8}
      alignItems="stretch">
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={4}>
        {characters.map((character) => (
          <CharacterCard
            key={extractId(character.url)}
            character={character}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
