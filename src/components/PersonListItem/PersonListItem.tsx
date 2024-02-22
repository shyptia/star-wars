import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Gender, HomeScreenNavigationProp} from '../../types';
import {styles} from './styles';
import Svg, {Path} from 'react-native-svg';
import {getGenderColor} from './getGenderColor';

export function PersonListItem({
  name,
  gender,
  url,
  navigation,
}: {
  name: string;
  gender: Gender;
  url: string;
  navigation: HomeScreenNavigationProp;
}) {
  return (
    <View style={styles.personItem}>
      <TouchableOpacity style={styles.heartButton}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="none"
            stroke={getGenderColor(gender)}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Details', {url})}>
        <Text style={styles.name}>{name}</Text>

        <Text style={[styles.gender, {color: getGenderColor(gender)}]}>
          {gender}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
