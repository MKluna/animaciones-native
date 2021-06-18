/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const Animacion4 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, //al valor al que tiene que llegar
      duration: 1000, // cantidad de tiempo en llegar
      useNativeDriver: true,
    }).start(); //iniciar animacion
  }, []);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };

  return <Animated.View style={[styles.caja, estiloAnimacion]} />;
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default Animacion4;
