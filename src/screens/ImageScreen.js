import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        imageScore={9}
      />
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        imageScore={5}
      />
      <ImageDetail
        title='Mountain'
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
