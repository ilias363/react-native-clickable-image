import React, {useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
} from 'react-native';
import Sound from 'react-native-sound';

function App(): React.JSX.Element {
  const currentSound = useRef<Sound | null>(null);

  const stopCurrentSound = () => {
    if (currentSound.current) {
      currentSound.current.stop();
      currentSound.current.release();
      currentSound.current = null;
    }
  };

  const playSound = (soundFile: string) => {
    if (currentSound.current) {
      stopCurrentSound();
    }

    currentSound.current = new Sound(soundFile, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }

      currentSound.current?.play(success => {
        if (!success) {
          console.log('Failed to play sound');
        }
      });
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
