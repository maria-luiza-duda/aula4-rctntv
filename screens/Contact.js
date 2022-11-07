import React, {useState, useEffect} from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements' 
import {Text,  Header, Card} from 'react-native-elements'
import axios from 'axios';

export default function ListScreen({route, navigation}){
 
    

    const [getData, setData] = useState([]);
    useEffect(()=>{
        async function resgatarDados(){
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
              );
              setData(result.data);
        }
        resgatarDados();
    })
   

    return(  
        <View>
            <Header
             leftComponent={
                <Button  
                title="< Voltar"
                onPress={()=>navigation.navigate('Home')}
            ></Button>}
                centerComponent={{ text: 'Lista', style: { color: '#fff', fontSize:20 } }}
                rightComponent={
            <Button  
                title="+"
                onPress={()=>navigation.navigate('Cadastro')}
            ></Button>}
   />
        {
            
          getData.map((linha, i) => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <Card>
                    <Text style={{marginBottom: 10}}>
                        {i}
                        {linha.nome}
                        {linha.cpf}
                    </Text>
                </Card>
            </TouchableOpacity>
          ))
        }
      </View>
    )
}