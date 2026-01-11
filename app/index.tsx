import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import BookShelfFooter from '../components/BookShelfFooter';
import BookShelfHeader from '../components/BookShelfHeader';
import WelcomeScreen from '../WelcomeScreen';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <BookShelfHeader />
      <View style={styles.content}>
        <WelcomeScreen />
      </View>
      <BookShelfFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  content: {
    flex: 1, // occupe tout l'espace restant entre header et footer
  },
});
