import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import {RootStackParamList} from '../../App';
import {styles} from './styles';

export function DetailsScreen({
  navigation,
}: {
  navigation: NativeStackScreenProps<
    RootStackParamList,
    'Details'
  >['navigation'];
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
