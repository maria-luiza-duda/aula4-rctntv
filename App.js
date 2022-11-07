import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem, Avatar, Input } from 'react-native-elements'
import HomeScreen from './screens/Home';
import ListScreen from './screens/Contact';


function CadastroScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input placeholder='Name'/>
      <Input placeholder='CPF'/>
      <Input placeholder='E-mail'/>
      <Input placeholder='Senha'/>
      <Button title='Sign in' onPress={()=>navigation.navigate('Contact')}></Button>
    </View>
  );
}

function Novaspp({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input placeholder='Name'/>
      <Input placeholder='E-mail'/>
      <Input placeholder='Telephone'/>
      <Button title='Save' onPress={()=>navigation.navigate('Contact')}></Button>
    </View>
  );
}


function EditScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input placeholder='Name'/>
      <Input placeholder='E-mail'/>
      <Input placeholder='Telephone'/>
      <Button title='Edit' onPress={()=>navigation.navigate('Contact')}></Button>
      <Button title='Delete' onPress={()=>navigation.navigate('Home')}></Button>
    </View>
  );
}
  
const Stack = createNativeStackNavigator();
  
function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Contact" component={ListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Novaspp" component={Novaspp} options={{ headerShown: false }}/>
      <Stack.Screen name="Edit" component={EditScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
  
export default App;