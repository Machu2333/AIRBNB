import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import your publishable key
const CLERK_PUBLISHABLE_KEY = "pk_test_bWFqb3Itd2hhbGUtMzIuY2xlcmsuYWNjb3VudHMuZGV2JA"
if (!CLERK_PUBLISHABLE_KEY) {
}
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key)
    } catch (error) {
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (error) {
      return
    }
  }
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    GreatVibes: require('../assets/fonts/GreatVibes-Regular.ttf'),
    Lobster: require('../assets/fonts/Lobster/Lobster-Regular.ttf'),
    "mon": require('../assets/fonts/Lobster/Lobster-Regular.ttf'),
    "mon-sb": require('../assets/fonts/Lobster/Lobster-Regular.ttf'),
    "mon-b": require('../assets/fonts/Lobster/Lobster-Regular.ttf'),



    // ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
      <RootLayoutNav />


  </ClerkProvider>


}

function RootLayoutNav() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/(modals)/login")
    }
  }, [isLoaded])

  return (
    <Stack>
      <Stack.Screen name="(tabs)"
        options={{
          headerShown: false,
          headerTitleAlign: "center"
        }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          title: "Log in or Sign ip",
          headerTitleStyle: {
            fontFamily: "Lobster",
          },
          headerTitleAlign: "center",
          presentation: "card",
          // headerBackTitleVisible: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => {
              router.back()
            }}>
              <Ionicons name='close-outline' size={24}></Ionicons>
            </TouchableOpacity>
          )
        }} />
      <Stack.Screen
        name="listing/[id]"
        options={{
          // header: () =>
          //   <View style={{ backgroundColor: '#fff' }}>
          //     <Text>123132</Text>
          //   </View>,
          headerTitle: "qweqwe"
        }}
      />
      <Stack.Screen
        name="(modals)/booking"

        options={{
          presentation: "transparentModal",
          animation: "fade",
        }} />

    </Stack>
  );
}
