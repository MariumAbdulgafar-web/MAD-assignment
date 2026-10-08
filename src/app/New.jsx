import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react'

const New = () => {
  return (
    <ThemedView>
      <ThemedText>New</ThemedText>
       <ThemedText>New</ThemedText>
        <ThemedText>New</ThemedText>
    </ThemedView>
  )
}

export default New

const styles = StyleSheet.create({})            