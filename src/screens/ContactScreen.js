import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';
import Contact from '../components/ChatListItem/ContactListItem';

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll()
      .then(contacts => {
        contacts.sort(
          (a, b) => a.givenName.toLowerCase() > b.givenName.toLowerCase(),
        );
        setContacts(contacts);
      })
      .catch(e => {
        alert('Permission to access contacts was denied');
        console.warn('Permission to access contacts was denied');
      });
  }, []);
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };
  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default ContactsScreen;
