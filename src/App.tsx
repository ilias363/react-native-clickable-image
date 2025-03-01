import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Sound from 'react-native-sound';
import TouchableImage from './components/TouchableImage';

function App(): React.JSX.Element {
  let currentSound: Sound | null = null;

  const stopCurrentSound = () => {
    if (currentSound) {
      currentSound.stop();
      currentSound.release();
      currentSound = null;
    }
  };

  const playSound = (soundFile: string) => {
    if (currentSound) {
      stopCurrentSound();
    }

    currentSound = new Sound(soundFile, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }

      currentSound?.play();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableImage
          onPress={() => playSound('chicken_cluking.mp3')}
          source={require('./assets/images/chicken_image.jpg')}
        />
        <TouchableImage
          onPress={() => playSound('duck_quacking.mp3')}
          source={require('./assets/images/duck_image.jpg')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default App;
