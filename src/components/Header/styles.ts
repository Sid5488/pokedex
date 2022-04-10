import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;

  align-items: center;
`;

export const CardHeader = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;

  background-color: #ff0000;

  z-index: 999;

  justify-content: flex-end;
  align-items: center;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  margin-bottom: 15px;
`;

export const CardTitles = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: ${RFValue(269)}px;
`;

export const Label = styled.Text`
  color: white;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;

  color: white;
`;

export const Search = styled.TextInput`
  width: ${RFValue(269)}px;
  height: 47px;

  margin-bottom: -15px;
  padding: 4px 4px;

  border-radius: 8px;

  background-color: #fff;
  /* background-color: #dedede; */
`;
