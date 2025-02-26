import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
} from 'react-native';
import Sound from 'react-native-sound';

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
        <TouchableOpacity
          onPress={() => playSound('chicken_cluking.mp3')}
          style={styles.imageWrapper}>
          <Image
            source={require('./assets/images/chicken_image.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => playSound('duck_quacking.mp3')}
          style={styles.imageWrapper}>
          <Image
            source={require('./assets/images/duck_image.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
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
  imageWrapper: {
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default App;
