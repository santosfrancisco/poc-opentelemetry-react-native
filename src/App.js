import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getPokemon} from './services';

const generateRandomInteger = () => {
  const min = 1;
  const max = 150;
  return Math.floor(min + Math.random() * (max - min + 1));
};

const App = () => {
  const [pokemon, setPokemon] = React.useState();

  const handleGetPokemon = async () => {
    const pkm = await getPokemon(generateRandomInteger());
    setPokemon(pkm);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png',
          }}
        />
        <Image
          style={styles.image}
          source={
            pokemon
              ? {
                  uri: pokemon?.sprites?.front_default,
                }
              : require('./poke.jpeg')
          }
        />

        <Text style={styles.text}>
          {pokemon?.name || "Who's That Pokémon?"}
        </Text>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleGetPokemon}>
            <Text style={styles.buttonText}>Gotcha!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 150, height: 150},
  text: {fontSize: 32, textTransform: 'capitalize'},
  button: {
    backgroundColor: '#3661a7',
    width: 120,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3661a7',
    borderWidth: 2,
    marginTop: 24,
  },
  buttonText: {
    fontSize: 20,
    color: '#feca1c',
    fontWeight: 'bold',
  },
});

export default App;
