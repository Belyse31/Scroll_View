import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const App = () => {
  // Array of items to display 
  const items = [
    { id: 1, text: 'Item 1', color: '#FF6B6B' },
    { id: 2, text: 'Item 2', color: '#4ECDC4' },
    { id: 3, text: 'Item 3', color: '#45B7D1' },
    { id: 4, text: 'Item 4', color: '#96CEB4' },
    { id: 5, text: 'Item 5', color: '#FFEAA7' },
    { id: 6, text: 'Item 6', color: '#DDA0DD' },
    { id: 7, text: 'Item 7', color: '#98D8C8' },
    { id: 8, text: 'Item 8', color: '#F7DC6F' },
    { id: 9, text: 'Item 9', color: '#BB8FCE' },
    { id: 10, text: 'Item 10', color: '#85C1E9' },
    { id: 11, text: 'Item 11', color: '#F8C471' },
    { id: 12, text: 'Item 12', color: '#82E0AA' },
    { id: 13, text: 'Item 13', color: '#F1948A' },
    { id: 14, text: 'Item 14', color: '#85C1E9' },
    { id: 15, text: 'Item 15', color: '#D7BDE2' },
    { id: 16, text: 'Item 16', color: '#A9DFBF' },
    { id: 17, text: 'Item 17', color: '#F9E79F' },
    { id: 18, text: 'Item 18', color: '#FADBD8' },
    { id: 19, text: 'Item 19', color: '#D5DBDB' },
    { id: 20, text: 'Item 20', color: '#AED6F1' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My ScrollView Example</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {items.map((item) => (
          <View key={item.id} style={[styles.item, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        ))}
        
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titleContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  item: {
    marginVertical: 8,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 20,
  },
});

export default App;

