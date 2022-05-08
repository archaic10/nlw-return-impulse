import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { theme } from './src/theme';
import  Widget  from './src/components/Widget';
// import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { 
    useFonts,
    Inter_400Regular, 
    Inter_500Medium} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
    // async ()=>{
    //   await SplashScreen.preventAutoHideAsync()
    // }
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <Widget/>
      <StatusBar 
        style="light" 
        backgroundColor='transparent'
        translucent
      />
    </View>
  );
}


