import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import {styles} from './styles';
import {FavoritePeople} from '../../components/FavoritePeople';
import {getPaginatedData} from '../../services/getPaginatedData';
import {HomeScreenNavigationProp, PersonData, ResponseData} from '../../types';
import {PersonListItem} from '../../components/PersonListItem';
import {PaginationButtons} from '../../components/PaginationButtons';
import {useDebounce} from '../../helpers/useDebounce';

export function HomeScreen({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState<PersonData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [name, setName] = useState('');
  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response: ResponseData | undefined = await getPaginatedData({
        page: currentPage,
        name: debouncedName,
      });

      if (response) {
        setPeople(response.results);
        setTotalPages(response.count);
      }

      setIsLoading(false);
    };

    getData();
  }, [currentPage, debouncedName]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedName]);

  return (
    <SafeAreaView style={styles.safeAreaStyles}>
      <StatusBar barStyle="light-content" />
      <View style={styles.contentContainer}>
        <FavoritePeople />

        <View style={styles.listContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Search"
            placeholderTextColor="#909aa3"
          />

          {isLoading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <>
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
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
