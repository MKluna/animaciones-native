import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

/* import Animacion5 from './components/Animacion5';
 */ /* import Animacion4 from './components/Animacion4'; */
/* import Animacion3 from './components/Animacion3'; */
/* import Animacion1 from './components/Animaciones'; */
/* import Animacion2 from './components/Animaciones2'; */
/* import Animacion6 from './components/Animacion6'; */
import Animacion7 from './components/Animacion7';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion7 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
