// components/AppHeader.js
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() { // ✅ default export
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#3E4A59',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4CE14',
    textAlign: 'center',
  },
});
