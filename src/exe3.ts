import axios from 'axios';

type Translation = [string, string];

const wordsTranslated: Translation[] = [
  ["Male", "Macho"],
  ["Female", "Fêmea"],
  ["Human", "Humano"],
  ["Alien", "Alienigena"]
];

function translateToPtBr(string: string): string {
  let wordPtBr = "";
  wordsTranslated.forEach((element: Translation) => {
    const itFound = element.includes(string);

    if (itFound) {
      const wordTranslated = element[1];
      wordPtBr = wordTranslated;
      return;
    }
  });

  return wordPtBr;
}

interface Character {
  name: string;
  gender: string;
  image: string;
  species: string;
}

interface TranslatedCharacter {
  nome: string;
  genero: string;
  avatar: string;
  especie: string;
}

function handleData(data: Character[]): TranslatedCharacter[] {
  return data.map((item: Character) => ({
    nome: item.name,
    genero: translateToPtBr(item.gender),
    avatar: item.image,
    especie: translateToPtBr(item.species)
  }));
}

async function getRickAndMortyCharacters(): Promise<TranslatedCharacter[]> {
  try {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    const result = handleData(data.results);
    return result;
  } catch (error) {
    console.error('Erro ao obter os personagens de Rick and Morty:', error);
    return [];
  }
}

export default getRickAndMortyCharacters;
