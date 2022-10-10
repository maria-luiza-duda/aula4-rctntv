import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem, Avatar, Input } from 'react-native-elements'

function HomeScreen({navigation}) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title='Login' onPress={()=>navigation.navigate('Contact')}></Button>
    <Button title='Cadastro' onPress={()=>navigation.navigate('Cadastro')}></Button>
  </View>
  );
}

function ListScreen({navigation}) {
  return (
    <View>
      <ListItem bottomDivider>
        <Avatar source={{uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9ecec6115725241.6053a8fa543a8.jpg'}} />
        <ListItem.Content>
          <ListItem.Title>{'Marcos Andrade'}</ListItem.Title>
          <ListItem.Subtitle>{'81 988553424'}</ListItem.Subtitle>
        </ListItem.Content>
        <Button title='Edit' onPress={()=>navigation.navigate('Edit')}></Button>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar source={{uri: 'https://react.semantic-ui.com/images/avatar/large/stevie.jpg'}} />
        <ListItem.Content>
          <ListItem.Title>{'Patrícia Tavares'}</ListItem.Title>
          <ListItem.Subtitle>{'81 998765332'}</ListItem.Subtitle>
        </ListItem.Content>
        <Button title='Edit' onPress={()=>navigation.navigate('Edit')}></Button>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar source={{uri: 'https://cdn.dribbble.com/users/1021722/screenshots/5681799/emil_still_2x.gif?compress=1&resize=400x300'}} />
        <ListItem.Content>
          <ListItem.Title>{'Rodrigo Antunes'}</ListItem.Title>
          <ListItem.Subtitle>{'81 987765525'}</ListItem.Subtitle>
        </ListItem.Content>
        <Button title='Edit' onPress={()=>navigation.navigate('Edit')}></Button>
      </ListItem>
    </View>
  );
}

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

function NovocontScreen({navigation}) {
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contact" component={ListScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Novocont" component={NovocontScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
  
export default App;