import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';

export default function MenuGaveta({ telaAtual, setTela }) {
  const [visivel, setVisivel] = useState(false);

  const navegarPara = (numeroTela) => {
    // Se clicar na mesma tela, não faz nada
    if (numeroTela === telaAtual) return;
    
    setTela(numeroTela);
    setVisivel(false); // Fecha a gaveta
  };

  return (
    <>
      {/* Botão no canto superior esquerdo */}
      <View style={styles.topo}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => setVisivel(true)}>
          <Text style={styles.icMenu}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.indicadorTopo}>ESTÁ EM: TELA 0{telaAtual}</Text>
      </View>

      {/* Modal / Gaveta Lateral */}
      <Modal
        visible={visivel}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setVisivel(false)}
      >
        <View style={styles.overlay}>
          {/* Área escura fora da gaveta para fechar ao clicar */}
          <TouchableOpacity style={styles.fora} onPress={() => setVisivel(false)} />

          {/* Painel da Gaveta */}
          <View style={styles.gaveta}>
            <View style={styles.cabecalhoGaveta}>
              <Text style={styles.tituloGaveta}>NAVEGAÇÃO</Text>
              <TouchableOpacity onPress={() => setVisivel(false)}>
                <Text style={styles.btnFechar}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.linha} />

            {/* Opção Tela 1 */}
            <TouchableOpacity
              style={[styles.itemMenu, telaAtual === 1 && styles.itemAtual]}
              onPress={() => navegarPara(1)}
              activeOpacity={telaAtual === 1 ? 1 : 0.7}
            >
              <Text style={[styles.textoItem, telaAtual === 1 && styles.textoAtual]}>
                TELA 01 {telaAtual === 1 && '(VOCÊ ESTÁ AQUI)'}
              </Text>
            </TouchableOpacity>

            {/* Opção Tela 2 */}
            <TouchableOpacity
              style={[styles.itemMenu, telaAtual === 2 && styles.itemAtual]}
              onPress={() => navegarPara(2)}
              activeOpacity={telaAtual === 2 ? 1 : 0.7}
            >
              <Text style={[styles.textoItem, telaAtual === 2 && styles.textoAtual]}>
                TELA 02 {telaAtual === 2 && '(VOCÊ ESTÁ AQUI)'}
              </Text>
            </TouchableOpacity>

            {/* Opção Tela 3 */}
            <TouchableOpacity
              style={[styles.itemMenu, telaAtual === 3 && styles.itemAtual]}
              onPress={() => navegarPara(3)}
              activeOpacity={telaAtual === 3 ? 1 : 0.7}
            >
              <Text style={[styles.textoItem, telaAtual === 3 && styles.textoAtual]}>
                TELA 03 {telaAtual === 3 && '(VOCÊ ESTÁ AQUI)'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  btnMenu: {
    padding: 8,
  },
  icMenu: {
    color: '#eab308',
    fontSize: 28,
  },
  indicadorTopo: {
    color: '#888888',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'row',
  },
  fora: {
    flex: 1,
  },
  gaveta: {
    width: '75%',
    backgroundColor: '#121212',
    height: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    borderRightWidth: 1,
    borderRightColor: '#222',
  },
  cabecalhoGaveta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloGaveta: {
    color: '#eab308',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  btnFechar: {
    color: '#888',
    fontSize: 20,
  },
  linha: {
    height: 1,
    backgroundColor: '#222',
    marginVertical: 20,
  },
  itemMenu: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a1a',
  },
  itemAtual: {
    opacity: 0.4, // Visual de desativado
  },
  textoItem: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
  textoAtual: {
    color: '#eab308',
  },
});