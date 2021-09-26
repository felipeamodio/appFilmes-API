import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({data}){
    const [visible, setVisible] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{data.nome}</Text>

                <Image 
                    source={{uri: data.foto}}
                    style={styles.capa}
                />

                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => setVisible(true)}>
                        <Text style={styles.textBotao}>Saiba mais</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal animationType="slide" visible={visible} transparent={true}>
                <Detalhes filme={data} voltar={() => setVisible(false)} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    card: {
        backgroundColor: '#FFFFFF',
        margin: 15,
        elevation: 2 //elevar ele do fundo
    },
    capa: {
        height: 250,
        zIndex: 2 //quanto maior o número mais ele fica sobre o q está por baixo
    },
    title: {
        padding: 15,
        fontSize: 18
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9
    },
    botao: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    textBotao: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})