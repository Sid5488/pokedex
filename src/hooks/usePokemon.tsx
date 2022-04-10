import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IPokemonContext {
  pokemons: IPokemon[],
  createPokemon: (pokemon: IPokemon | undefined) => void;
}

interface IPokemonProps {
  children: ReactNode;
}

const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);

const PokemonProvider = ({ children }: IPokemonProps) => {
  const [pokemons, setPokemon] = useState<IPokemon[]>([]);

  const createPokemon = (pokemon: IPokemon | undefined) => {
    if(pokemon !== undefined)
      setPokemon([pokemon]);
    else
      setPokemon([]);
  };

  return (
    <PokemonContext.Provider value={{ pokemons, createPokemon }}>
      { children }
    </PokemonContext.Provider>
  );
}

const usePokemon = () => {
  const context = useContext(PokemonContext);

  if(!context)
    throw new Error('usePokemon must be used within a PokemonProvider');

  return context;
};

export { usePokemon, PokemonProvider };
