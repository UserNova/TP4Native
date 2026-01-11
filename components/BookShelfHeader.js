// components/BookShelfHeader.js
import { StyleSheet, Text, View } from 'react-native';

export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>📚 BookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972', // accent color
    paddingVertical: 32,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
