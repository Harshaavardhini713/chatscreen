import React, {useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import ChatListItem from '../components/ChatListItem/ChatListItem';
import chatRoom from '../data/chatRoom';
import {NavigationContainer} from '@react-navigation/native';

const Search = props => {
  const {navigation} = props;
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const onChangeSearch = query => setSearch(query);

  useEffect(() => {
    setFilteredDataSource(chatRoom);
    setMasterDataSource(chatRoom);
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.users[1].name.toString()
          ? item.users[1].name.toString().toUpperCase()
          : ''.toUpperCase();
        const textData = text.toString().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
        placeholderTextColor="white"
      />
      <FlatList
        style={{width: '100%'}}
        data={filteredDataSource}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
  searchBar: {
    backgroundColor: 'black',
    color: 'white',
  },
});
