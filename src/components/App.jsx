import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import { Contacts } from './App.styled';

class App extends React.Component{

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }


  
  addContact = (name, number) => {
    let isAdded = false;
    this.state.contacts.forEach(el => {
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
  this.setState(({contacts}) =>({
    contacts: [contact, ...contacts]
  }))
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

componentDidMount(){
  const contacts = localStorage.getItem('contacts');
  const parsedContacts =JSON.parse(contacts)

  if(parsedContacts){
    this.setState({contacts: parsedContacts})
  }
  
}  
componentDidUpdate(prevProps, prevState) {
  if( this.state.contacts !== prevState){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}
 render(){
  const { filter} = this.state;
  const visibleContacts = this.getVisibleContacts();

  return (
    <Contacts>
  <h1>Phonebook</h1>
  <ContactForm 
  onSubmit={this.addContact}
  />

  <h2>Contacts</h2>
  <Filter 
  value={filter}
  onChange={this.changeFilter}/>

  <ContactList 
  contacts={visibleContacts}
  onDeleteContact={this.deleteContact}/>
</Contacts>
  );
 }
};

export default App;
