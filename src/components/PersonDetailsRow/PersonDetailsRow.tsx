import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export function PersonDetailsRow({
  title,
  value,
}: {
  title: string;
  value?: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value || '-'}</Text>
    </View>
  );
}
