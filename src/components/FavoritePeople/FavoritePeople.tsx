import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export function FavoritePeople() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.count}>0</Text>
        <Text style={styles.description}>Female</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.count}>0</Text>
        <Text style={styles.description}>Male</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.count}>0</Text>
        <Text style={styles.description}>Others</Text>
      </View>
    </View>
  );
}
