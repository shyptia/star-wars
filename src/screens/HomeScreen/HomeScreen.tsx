import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {styles} from './styles';
import {FavoritePeople} from '../../components/FavoritePeople';
import {getPaginatedData} from '../../services/getPaginatedData';
import {HomeScreenNavigationProp, PersonData, ResponseData} from '../../types';
import {PersonListItem} from '../../components/PersonListItem';
import {PaginationButtons} from '../../components/PaginationButtons';

export function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState<PersonData[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response: ResponseData | undefined = await getPaginatedData(
        currentPage,
      );

      if (response) {
        setPeople(response.results);
        setTotalPages(response.count);
      }

      setIsLoading(false);
    };

    getData();
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <FavoritePeople />
        {isLoading ? (
          <ActivityIndicator size="large" color="#FFFFFF" />
        ) : (
          <View style={styles.listContainer}>
            <FlatList
              style={styles.list}
              data={people}
              renderItem={({item}) => (
                <PersonListItem
                  name={item.name}
                  gender={item.gender}
                  url={item.url}
                  navigation={navigation}
                />
              )}
              keyExtractor={person => person.url}
            />

            <PaginationButtons
              currentPage={currentPage}
              itemsPerPage={10}
              totalAmountPage={totalPages}
              onPageChange={setCurrentPage}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
