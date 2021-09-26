import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import api from './src/services/api';

import Filmes from './src/Filmes/';

export default function App(){
  const [filmes, setFilmes] = useState();

  useEffect(() => {
    //será chamada quando o componente for aberto
    //só da pra fazer a requisição pq a função é async
    //metodo get que está buscando alguma info
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      //console.log(response.data); //buscando pelo .data todo o array de objetos
      setFilmes(response.data)
    }
    loadFilmes();
  }, []);

  return(
    <View style={styles.container}>
      <FlatList 
        data={filmes}
        keyExtractor={item => String(item.id)} //convertendo o id para string
        renderItem={({item}) => <Filmes data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})