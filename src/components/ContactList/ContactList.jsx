
import React from "react";
import {Button} from './ContactList.styled';
import PropTypes from 'prop-types';



const ContactList = ({ contacts, onDeleteContact }) => (
<ul>
    { contacts.map(({id, name, number}) =>  (
 <li key={id}>
    <p>{name} {number}</p>
    <p></p>
    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
    ))}
</ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

export default ContactList;