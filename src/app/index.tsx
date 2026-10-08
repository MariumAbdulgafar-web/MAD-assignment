import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Home = () => {
  return (
    <ThemedView>
      <ThemedText>Home</ThemedText>
      <ThemedText>This is my first React Native screen</ThemedText>
      <ThemedText>This is my first React Native screen</ThemedText>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({})