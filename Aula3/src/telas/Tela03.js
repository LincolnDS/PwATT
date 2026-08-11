import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuGaveta from '../componentes/MenuGaveta';

export default function Tela03({ setTela }) {
  return (
    <View style={styles.container}>
      <MenuGaveta telaAtual={3} setTela={setTela} />

      <View style={styles.conteudo}>
        <Text style={styles.emoji}>🔴</Text>
        <Text style={styles.titulo}>Terceira Etapa</Text>
        <Text style={styles.descricao}>Você está na terceira tela da aplicação.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emoji: { fontSize: 50, marginBottom: 12 },
  titulo: { color: '#ffffff', fontSize: 26, fontWeight: '300', marginBottom: 8 },
  descricao: { color: '#888888', fontSize: 14, textAlign: 'center' },
});