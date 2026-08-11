import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Tela01 from './src/telas/Tela01';
import Tela02 from './src/telas/Tela02';
import Tela03 from './src/telas/Tela03';

export default function App() {
  const [telaAtual, setTelaAtual] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {telaAtual === 1 && <Tela01 setTela={setTelaAtual} />}
      {telaAtual === 2 && <Tela02 setTela={setTelaAtual} />}
      {telaAtual === 3 && <Tela03 setTela={setTelaAtual} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
});