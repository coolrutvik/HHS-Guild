import { NavigationContainer } from '@react-navigation/native';

import AuthGate from './src/navigation/AuthGate';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthGate />
      </AuthProvider>
    </NavigationContainer>
  );
}







// import { NavigationContainer } from '@react-navigation/native';
// import AuthGate from './src/navigation/AuthGate';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AuthGate />
//     </NavigationContainer>
//   );
// }


// import LoginScreen from './src/screens/LoginScreen';

// export default function App() {
//   return <LoginScreen />;
// }


// import AppNavigator from './src/navigation/AppNavigator';

// export default function App() {
//   return <AppNavigator />;
// }