import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { usePokemon } from '../../hooks/usePokemon';

import { pokeAPI } from '../../services/api';

import { 
  Container, 
  CardHeader, 
  Search,
  Label,
  Title,
  CardTitles
} from './styles';

const Header = () => {
  const { createPokemon } = usePokemon();
  const [search, setSearch] = useState<string>('');

  const searchPokemon = (search: string) => {
    if(search !== '') {
      pokeAPI.get(`/pokemon/${search.toLowerCase()}`)
        .then(res => {
          return res.data;  
        }).then(json => {
          const newPokemon = {
            name: json.name,
            types: json.types,
            sprites: {
              front_default: json.sprites.front_default
            }
          };
          
          createPokemon(newPokemon);
        });
    } else {
      createPokemon(undefined);
    }
  };

  return (
    <Container style={ styles.header }>
      <CardHeader style={ styles.cardHeader }>
        <CardTitles>
          <Label>Search</Label>
          <Title>Pokédex</Title>
        </CardTitles>

        <Search 
          value={ search }
          returnKeyType={'done'}
          onChangeText={ value => setSearch(value) }
          onSubmitEditing={ (event) => (searchPokemon(event.nativeEvent.text)) }
          placeholder='Charizard' 
        />
      </CardHeader>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    elevation: 6
  },

  cardHeader: {
    elevation: 7
  }
});

export { Header };
