import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SectionList } from 'react-native-web';
import { ListItem } from 'react-native-elements';

function HomeScreen({navigation}) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text>Home Screen</Text>
  <Button title='Login' onPress={()=>navigation.navigate('List')}></Button>
  <Button title='Cadastro' onPress={()=>navigation.navigate('Cadastro')}></Button>
  </View>
  );
  }

function ListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      <Button title='+' onPress={()=>navigation.navigate('Novocont')}></Button>
      <ListItem title= 'Marcos Andrade' Number= '81983468310' onPress={()=>navigation.navigate('Edit')}></ListItem>
      <ListItem title= 'Patrícia Tavares' Number= '81983468310' onPress={()=>navigation.navigate('Edit')}></ListItem>
      <ListItem title= 'Rodrigo Antunes' Number= '81983468310' onPress={()=>navigation.navigate('Edit')}></ListItem>
      </View>
  );
}

function CadastroScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cadastro Screen</Text>
    </View>
  );
}

function NovocontScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Novo contato Screen</Text>
    </View>
  );
}
function EditScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Editar contato</Text>
    </View>
  );
}
  
const Stack = createNativeStackNavigator();
  
function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Novocont" component={NovocontScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
  
export default App;