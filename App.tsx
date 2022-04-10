import { StatusBar } from 'expo-status-bar';
import { PokemonProvider } from './src/hooks/usePokemon';

import { Home } from './src/screens/Home';

const App = () => {
  return (
    <PokemonProvider>
      <Home />
      <StatusBar style="light" />
    </PokemonProvider>
  );
};

export default App;
