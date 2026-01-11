// components/BookShelfFooter.js
import { StyleSheet, Text, View } from 'react-native';

export default function BookShelfFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 BookShelf - Tous droits réservés</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#EE9972', // accent color
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
