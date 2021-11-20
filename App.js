/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [venda, setVenda] = useState([]);
  const [nomeItem, setNomeItem] = useState();
  const [valorItem, setValorItem] = useState();
  const [total, setTotal] = useState(0);

  const pessoa = {
    nome: 'Nicolas',
    idade: 11,
    endereço: [
      {rua: 'rua xxx', numero: 22},
      {rua: 'yyy', numero: 30},
    ],
    telefone: '333444-444555',
  };

  console.log('pessoa', pessoa);

  var carro = {};
  console.log('carro', carro);
  carro.modelo = 'mustang';
  console.log('carro', carro);
  carro.marca = 'ford';
  console.log('carro', carro);
  carro.ano = 1969;
  console.log('carro', carro);
  carro.alienado = false;
  console.log('carro', carro);

  console.log('carro', carro);

  var meuCarro = [];

  console.log('meuCarro', meuCarro);
  meuCarro.push('ford');
  meuCarro.push('Mustang');
  meuCarro.push(1969);

  console.log('meuCarro posição 0, zero', meuCarro[0]);

  //console.log('meuCarro', meuCarro['modelo']);

  meuCarro.map(item => {
    console.log('meu carro', item);
  });

  //objeto de artur
  var pessoaArtur = {
    nome: 'Artur',
    idade: 26,
    sexo: 'masculino',
    interesses: ['música', 'futebol'],
  };
  console.log('pessoaArtur', pessoaArtur.nome);
  console.log('pessoaArtur', pessoaArtur.interesses[1]);

  //objeto de renato
  const funcionario = {
    id: 1,
    nome: 'Renato',
    cargo: 'Dev React Native Junior',
  };
  console.log('funcionario', funcionario.cargo);

  //objeto de gabriel
  var equipe = {
    nome: 'Jordan',
    ano: 2020,
    vitorias: 2,
    modelo: ['amarelo', 'preto'],
  };
  console.log('Equipe', equipe.vitorias);
  console.log('Equipe', equipe.modelo[0]);

  const calculaTotal = () => {
    try {
      const totalizador = venda
        .map(item => item.valor)
        .reduce((totalInicial, valor) => {
          return totalInicial + valor;
        });
      setTotal(totalizador);
    } catch (error) {
      console.log('erro ao calcular valor', error);
    }
  };

  useEffect(() => {
    if (venda.length) {
      calculaTotal();
    }
  }, [venda]);

  const salvarCalcular = () => {
    try {
      if (nomeItem && valorItem) {
        let itemVenda = {nome: nomeItem, valor: Number(valorItem)};
        console.log('itemVenda', itemVenda);
        setVenda([...venda, itemVenda]);
        setNomeItem('');
        setValorItem('');
      } else {
        console.log('campos obrigatórios');
      }
    } catch (error) {
      console.log('campos obrigatórios', error);
    }
  };

  const NovoComponente = (item, index) => {
    return (
      <View key={index} style={{marginVertical: 10}}>
        <Text>Item: {item.nome}</Text>
        <Text>Valor: {Number(item.valor).toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Arrays e Objetos</Text>
          <TextInput
            onChangeText={setNomeItem}
            value={nomeItem}
            placeholder="Nome Item"
          />
          <TextInput
            onChangeText={setValorItem}
            value={valorItem}
            placeholder="Valor Item"
            keyboardType="numeric"
          />
          <Button onPress={() => salvarCalcular()} title="Salvar e Calcular" />
          {venda.map((item, index) => {
            return NovoComponente(item, index);
          })}
          <View style={{marginVertical: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Valor Total: {Number(total).toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* let retorno = ['artur', 'renato', 'gabriel'].map((item)=>{
  console.log('item da vez', item);
  return item+'000';
});

console.log('retorno da vez', retorno); */

/* artur
renato
gabriel */

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
