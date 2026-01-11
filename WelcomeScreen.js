// WelcomeScreen.js
import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      indicatorStyle="white"
    >
      <Text style={styles.title}>Bienvenue RANIA sur BookShelf</Text>
      <Text style={styles.description}>
        BookShelf est votre bibliothèque numérique personnelle. 
        Organisez vos lectures, découvrez de nouveaux livres et 
        créez vos listes favorites. Cette application est conçue 
        pour être simple, moderne et agréable à utiliser.
      </Text>
      <Text style={styles.description}>
        Utilisez les fonctionnalités de recherche pour trouver 
        rapidement vos livres préférés, marquez vos lectures terminées 
        et suivez votre progression. BookShelf met l’accent sur 
        l’expérience utilisateur, le confort de lecture et une interface 
        épurée.
      </Text>
      <Text style={styles.description}>
        Profitez de votre bibliothèque numérique partout et 
        à tout moment. La navigation est fluide, les textes sont 
        lisibles et vous pouvez personnaliser votre expérience selon vos 
        préférences.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333', // fond sombre
    paddingVertical: 30,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EDEFEE',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#EAEAEA',
    marginBottom: 12,
    textAlign: 'justify',
  },
});
