import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements' 
import { ListItem, Header} from 'react-native-elements'
import axios from 'axios';

export default function ListScreen({route, navigation}){
 
    const [data, setData] = useState([]);

    useEffect(() =>{
        async function consultarDados(){
                const result = await axios('http://professornilson.com/testeservico/clientes')
                setData(result.data)
        }
        consultarDados();
    },[])

    return(
        <View>
            <Header centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff', fontSize:20 } }}
            rightComponent={
                <Button title="+" onPress={()=>navigation.navigate('Cadastro')}></Button>}
            />
            {
                getData.map((linha, i) => (
                    <ListItem
                        key={i}
                        title={linha.nome}
                        subtitle={linha.telefone}
                        bottonDivider
                        onPress={()=>navigation.navigate('Edit', {
                            nome:linha.nome,
                            telefone:linha.telefone,
                            email:linha.email,
                            id:linha.id,
                            alterar:true
                        })}
                        chevron
                    />
                ))
            }
        </View>
    )
}