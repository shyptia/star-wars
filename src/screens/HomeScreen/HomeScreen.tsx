import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {FavoritePeople} from '../../components/FavoritePeople';

export function HomeScreen({
  navigation,
}: {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <FavoritePeople />
        <Button
          title="Go to details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </SafeAreaView>
  );
}
