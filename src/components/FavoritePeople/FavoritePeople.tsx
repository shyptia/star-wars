import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {
  selectFemaleCount,
  selectMaleCount,
  selectOtherCount,
} from '../../redux/selectors/selectedPeopleSelectors';
import {useAppDispatch} from '../../redux/store';
import {resetSelectedPeople} from '../../redux/reducers/selectedPeopleSlice';

export function FavoritePeople() {
  const dispatch = useAppDispatch();
  const femaleCount = useSelector(selectFemaleCount);
  const maleCount = useSelector(selectMaleCount);
  const otherCount = useSelector(selectOtherCount);

  return (
    <View>
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
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          dispatch(resetSelectedPeople());
        }}>
        <Text style={styles.resetButtonText}>Reset fans</Text>
      </TouchableOpacity>
    </View>
  );
}
