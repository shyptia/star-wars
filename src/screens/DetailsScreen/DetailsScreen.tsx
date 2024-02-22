import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
  PersonData,
} from '../../types';
import {getPersonData} from '../../services/getPersonData';
import {PersonDetailsRow} from '../../components/PersonDetailsRow';

export function DetailsScreen({
  navigation,
  route,
}: {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [personData, setPersonData] = useState<PersonData | undefined>(
    undefined,
  );

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data: PersonData | undefined = await getPersonData(
        route.params.url,
      );

      if (data) {
        setPersonData(data);
      }

      setIsLoading(false);
    };

    getData();
  }, [route.params.url]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isLoading ? (
        <ActivityIndicator size="large" color="#FFFFFF" />
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.header}>Details</Text>
          <PersonDetailsRow title="Name" value={personData?.name} />
          <PersonDetailsRow title="Birth Year" value={personData?.birth_year} />
          <PersonDetailsRow title="Gender" value={personData?.gender} />
          <PersonDetailsRow title="Height" value={personData?.height} />
          <PersonDetailsRow title="Mass" value={personData?.mass} />
          <PersonDetailsRow title="Hair color" value={personData?.hair_color} />
          <PersonDetailsRow title="Skin color" value={personData?.skin_color} />
          <PersonDetailsRow title="Hair color" value={personData?.eye_color} />
          <PersonDetailsRow
            title="Hair color"
            value={new Date(personData?.created ?? '').toLocaleDateString()}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
