import React from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';
import {DetailsScreenNavigationProp} from '../../types';

export function DetailsScreen({
  navigation,
}: {
  navigation: DetailsScreenNavigationProp;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
