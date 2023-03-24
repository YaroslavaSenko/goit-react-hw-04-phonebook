import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { Contacts } from './App.styled';

const App = () => {
const [contacts, setContacts] = useState([]);
const [filter, setFilter] = useState('');


  const changeFilter = (event) => {
    setFilter(event.currentTarget.value)
  }


  const addContact = (name, number) => {
    let isAdded = false;
    contacts.forEach(el => {
      if (el.name.toLowerCase() === name.toLowerCase()) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

const contact = {
  id: nanoid(),
  name,
  number,
  }
  setContacts((contacts) =>( [contact, ...contacts]))
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts =>(prevContacts.filter(contact => contact.id !== contactId)  ))
  }

  useEffect(() =>{
    const contacts = localStorage.getItem('contacts')
    if (contacts) setContacts(JSON.parse(contacts))
  }, [])
  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const visibleContacts = getVisibleContacts();

  return (
    <Contacts>
  <h1>Phonebook</h1>
  <ContactForm 
  onSubmit={addContact}
  />

  <h2>Contacts</h2>
  <Filter 
  value={filter}
  onChange={changeFilter}/>

  <ContactList 
  contacts={visibleContacts}
  onDeleteContact={deleteContact}/>
</Contacts>
  );
 }


export default App;
