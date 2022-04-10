import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  /* background-color: #2b2b2b; */
  background-color: #ebebeb;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: white;
`;

export const List = styled.FlatList``;

export const CardList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;

  padding: 16px 8px;

  margin-top: 25px;
`;

export const PokeImage = styled.Image<ICardProps>`
  width: ${RFValue(105)}px;
  height: ${RFValue(101)}px;

  border-radius: 8px;
  margin-right: 8px;
`;

interface ICardProps {
  types: IPokemonType[];
}

interface IPokemonType {
  type: IType;
}

interface IType {
  name: string;
}

export const Card = styled.View<ICardProps>`
  width: 100%;
  height: ${RFValue(134)}px;
  
  flex-direction: row;
  justify-content: space-between;

  ${ ({ types }) => types[0].type.name === 'grass' 
    && 'background-color: #82cf97;' }
  ${ ({ types }) => types[0].type.name === 'bug' 
    && 'background-color: #26d471;' }
  ${ ({ types }) => types[0].type.name === 'poison' 
    && 'background-color: #954af7;' }
  ${ ({ types }) => types[0].type.name === 'water' 
    && 'background-color: #4ab8f7;' }
  ${ ({ types }) => types[0].type.name === 'fire' 
    && 'background-color: #f7504a;' }
  ${ ({ types }) => types[0].type.name === 'normal' 
    && 'background-color: #c7b481;' }
  ${ ({ types }) => types[0].type.name === 'flying' 
    && 'background-color: #4addf7;' }
  ${ ({ types }) => types[0].type.name === 'electric' 
    && 'background-color: #ffcb3b;' }
  ${ ({ types }) => types[0].type.name === 'fighting' 
    && 'background-color: #eba742;' }

  ${ ({ types }) => types.length > 1 
    && (types[1].type.name === 'flying' && types[0].type.name !== 'fire') 
    && 'background-color: #4addf7;' }

  border-radius: 8px;

  margin-bottom: 16px;
`;

export const PokeName = styled.Text`
  font-size: 28px;
  color: white;

  margin: 10px;
`;

export const BoxPokemon = styled.View`
  flex: 0.5;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PokeInfo = styled.View`
  flex: 1;
`;

export const BoxInfo = styled.View`
  flex: 1;

  flex-direction: row;

  align-items: flex-end;

  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Type = styled.Text<ICardProps>`
  height: 30px;

  background-color: #757575;

  border-radius: 4px;

  margin-right: 4px;

  color: white;

  padding: 4px;
`;

export const ScrollBox = styled.View`
  margin-top: -${RFValue(20)}px;
`;
