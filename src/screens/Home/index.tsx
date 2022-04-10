import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { Header } from '../../components/Header';
import { usePokemon } from '../../hooks/usePokemon';

import { 
  Container, 
  PokeImage, 
  Card, 
  CardList, 
  PokeName,
  PokeInfo,
  BoxPokemon,
  BoxInfo,
  Type,
  ScrollBox
} from './styles';

const Home = () => {
  const { pokemons } = usePokemon();

  const [pokemonList, setPokemon] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listFinally: IPokemon[] = [];

    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(list => list.json())
      .then((list) => {
        list.results.map((pokemon: IPokemonItem) => {
          fetch(pokemon.url)
            .then(json => json.json())
            .then(json => {
              const obj: IPokemon = {
                name: capitalize(json.name),
                types: json.types,
                sprites: {
                  front_default: json.sprites.front_default
                }
              };

              listFinally.push(obj);
            }).finally(() => {
              setPokemon([...pokemonList]);
              setPokemon(listFinally);
            });
        });
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  const capitalize = (s: string) => {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <Container>
      <Header />

      {!loading ? (
        <ScrollBox>
          <ScrollView 
            accessibilityHint='List of Pokémons'
            showsVerticalScrollIndicator={false}
          >
            <CardList>
              { pokemons.length === 0 || pokemons === undefined ? (
                <>
                  { pokemonList.map((pokemon, index) => (
                    <Card style={styles.card} types={pokemon.types} key={ index }>
                      <PokeInfo>
                        <PokeName>{ pokemon.name }</PokeName>
                        
                        <BoxInfo>
                          { pokemon.types.map((type, i) => (
                            <Type types={pokemon.types} key={ i }>
                              { type.type.name }
                            </Type>
                          )) }
                        </BoxInfo>
                      </PokeInfo>
      
                      <BoxPokemon>
                        <PokeImage 
                          types={pokemon.types} 
                          source={{ uri: pokemon.sprites.front_default }} 
                        />
                      </BoxPokemon>
                    </Card>
                  )) }
                </>
              ) : (
                <>
                  { pokemons.map((pokemon, index) => (
                    <Card style={styles.card} types={pokemon.types} key={ index }>
                      <PokeInfo>
                        <PokeName>{ pokemon.name }</PokeName>
                        
                        <BoxInfo>
                          { pokemon.types.map((type, i) => (
                            <Type types={pokemon.types} key={ i }>
                              { type.type.name }
                            </Type>
                          )) }
                        </BoxInfo>
                      </PokeInfo>

                      <BoxPokemon>
                        <PokeImage 
                          types={pokemon.types} 
                          source={{ uri: pokemon.sprites.front_default }} 
                        />
                      </BoxPokemon>
                    </Card>
                  )) }
                </>
              ) }
            </CardList>
          </ScrollView>
        </ScrollBox>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  }
});

export { Home };
