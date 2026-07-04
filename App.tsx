import app from './src/firebase/firebase';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  console.log('Firebase App:', app.name);

  return <AppNavigator />;
}