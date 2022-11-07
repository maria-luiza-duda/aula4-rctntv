import React from 'react';
import { View, Text, TextInput} from 'react-native';
import { Button} from 'react-native-elements' 
import axios from 'axios';

export default function HomeScreen({navigation}){
 
    function consultarDados(){
        axios.get('http://professornilson.com/testeservico/clientes')
        .then(function (response){
            console.log(response);
        }).catch(function (error){
            console.log(error)
        })
    }
    consultarDados();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TextInput placeholder='Login'/>
            <TextInput placeholder='Senha'/>
            <Button title='Login' onPress={()=>navigation.navigate('Contact')}></Button>
            <Button title='Cadastro' onPress={()=>navigation.navigate('Cadastro')}></Button>
        </View>
    )
  
}