import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  source: ImageSourcePropType;
};

const TouchableImage = ({onPress, source}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageWrapper}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default TouchableImage;
