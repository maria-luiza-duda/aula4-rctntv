import React  from 'react';
import { View, Text, TextInput} from 'react-native';
import { Button} from 'react-native-elements' 

export default function HomeScreen({navigation}){

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