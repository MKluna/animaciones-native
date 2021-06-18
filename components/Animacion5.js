import React, {useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const Animacion5 = () => {
  const [animacion, setanimacion] = useState(new Animated.Value(1));

  const presionarBtn = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const soltarBoton = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };

  return (
    <View style={styles.contenedor}>
      <Animated.View style={[styles.btn, estiloAnimacion]}>
        <TouchableWithoutFeedback
          onPressIn={() => presionarBtn()}
          onPressOut={() => soltarBoton()}>
          <Text style={styles.texto}>Iniciar Sesion</Text>
        </TouchableWithoutFeedback>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
});

export default Animacion5;
