import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

export function HomeScreen({
  navigation,
}: {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <Button
          title="Go to details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </SafeAreaView>
  );
}
