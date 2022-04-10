interface IPokemonItem {
  name: string;
  url: string;
  sprites: ISprite;
}

interface ISprite {
  front_default: string;
}

interface IPokemon {
  name: string;
  sprites: ISprite;
  types: IPokemonType[];
}

interface IPokemonType {
  type: IType;
}

interface IType {
  name: string;
}
