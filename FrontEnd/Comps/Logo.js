import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = ({ width, height, marginBottom, source }) => {
  return (
    <Image source={source} style={[styles.logo, { width, height, marginBottom }]} />
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
  },
});

export {Logo};