import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {
  selectFemaleCount,
  selectMaleCount,
  selectOtherCount,
} from '../../redux/selectors/selectedPeopleSelectors';

export function FavoritePeople() {
  const femaleCount = useSelector(selectFemaleCount);
  const maleCount = useSelector(selectMaleCount);
  const otherCount = useSelector(selectOtherCount);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.count}>{femaleCount}</Text>
        <Text style={styles.description}>Female</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.count}>{maleCount}</Text>
        <Text style={styles.description}>Male</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.count}>{otherCount}</Text>
        <Text style={styles.description}>Others</Text>
      </View>
    </View>
  );
}
