import {SafeAreaView, StyleSheet} from 'react-native';
import {Main} from "./src/components/Main";

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
