import { useParams } from 'react-router-dom';
import { Fade, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { useCharacterById } from '../api';
import BackButton from '../components/back-button';

function CharaterAttribute({ name, value }: { name: string; value: string }) {
  return (
    <VStack
      alignItems="flex-start"
      spacing={0}>
      <Text
        fontSize="sm"
        color="yellow.500">
        {name}
      </Text>
      <Text
        fontSize="lg"
        fontWeight="bold">
        {value}
      </Text>
    </VStack>
  );
}

export default function CharacterDetailPage() {
  const { id } = useParams();
  const { data: character } = useCharacterById(Number(id));

  return (
    <VStack
      p={4}
      spacing={3}
      bg="gray.700"
      boxShadow="md"
      borderRadius={5}
      alignItems="strech">
      <VStack alignItems="flex-start">
        <BackButton />
      </VStack>

      {character && (
        <Fade in={true}>
          <VStack
            spacing={5}
            alignItems="stretch">
            <Heading
              as="h2"
              size="lg">
              {character.name}
            </Heading>

            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4 }}
              spacing={3}>
              <CharaterAttribute
                name="Gender"
                value={character.gender}
              />

              <CharaterAttribute
                name="Birth Year"
                value={character.birth_year}
              />

              <CharaterAttribute
                name="Height"
                value={character.height}
              />

              <CharaterAttribute
                name="Mass"
                value={character.mass}
              />

              <CharaterAttribute
                name="Eye Color"
                value={character.eye_color}
              />

              <CharaterAttribute
                name="Hair Color"
                value={character.hair_color}
              />

              <CharaterAttribute
                name="Hair Color"
                value={character.skin_color}
              />
            </SimpleGrid>
          </VStack>
        </Fade>
      )}
    </VStack>
  );
}
