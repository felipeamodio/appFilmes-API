import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detalhes(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.goBack} onPress={props.voltar}>
                    <Text style={{color: '#FFFFFF', fontSize: 16}}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.title}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.desc}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        height: '80%',
        width: '90%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    goBack: {
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title: {
        textAlign: 'center',
        color: '#FFFFFF',
        padding: 10,
        fontSize: 26,
        fontWeight: 'bold'
    },
    sinopse: {
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 10
    },
    desc: {
        color: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10
    }
})