import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function HomeScreen() {
  // Array of items to display in the ScrollView
  const items = [
    { id: 1, text: 'Aurora', color: '#FF6B6B' },
    { id: 2, text: 'Breeze', color: '#4ECDC4' },
    { id: 3, text: 'Cobalt', color: '#45B7D1' },
    { id: 4, text: 'Dew', color: '#96CEB4' },
    { id: 5, text: 'Ember', color: '#FFEAA7' },
    { id: 6, text: 'Freesia', color: '#DDA0DD' },
    { id: 7, text: 'Glacier', color: '#98D8C8' },
    { id: 8, text: 'Honey', color: '#F7DC6F' },
    { id: 9, text: 'Iris', color: '#BB8FCE' },
    { id: 10, text: 'Lagoon', color: '#85C1E9' },
    { id: 11, text: 'Marigold', color: '#F8C471' },
    { id: 12, text: 'Nectar', color: '#82E0AA' },
    { id: 13, text: 'Orchid', color: '#F1948A' },
    { id: 14, text: 'Pacific', color: '#85C1E9' },
    { id: 15, text: 'Quartz', color: '#D7BDE2' },
    { id: 16, text: 'Rosemary', color: '#A9DFBF' },
    { id: 17, text: 'Sunbeam', color: '#F9E79F' },
    { id: 18, text: 'Tulip', color: '#FADBD8' },
    { id: 19, text: 'Umber', color: '#D5DBDB' },
    { id: 20, text: 'Voyage', color: '#AED6F1' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f7fb" />

      {/* Simple centered title bar */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My ScrollView Example</Text>
      </View>

      {/* ScrollView with items */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {items.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <View style={[styles.cardBadge, { backgroundColor: item.color }]} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.text}</Text>
              <Text style={styles.cardSubtitle}>Card #{index + 1}</Text>
            </View>
          </View>
        ))}

        {/* Additional spacing at the bottom */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  titleContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '800',
    color: '#1e3a8a',
    letterSpacing: 0.3,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 18,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardBadge: {
    width: 38,
    height: 38,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  cardSubtitle: {
    marginTop: 1,
    fontSize: 12,
    color: '#64748b',
  },
  cardChip: {
    backgroundColor: '#eef2ff',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  cardChipText: {
    color: '#4f46e5',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomSpacing: {
    height: 24,
  },
});
