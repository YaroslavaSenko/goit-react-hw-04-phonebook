import {useState} from "react";
import { nanoid } from 'nanoid';
import {Formik, ErrorMessage } from 'formik';
import {Input, Form, Button} from './ContactForm.styled';
import * as yup from 'yup';

let userSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export default function ContactForm({onSubmit}){
const [name, setName] = useState('');
const [number, setNumber] = useState('')

const  nameImputId = nanoid() ;
const  numberImputId = nanoid();

const handleChange = event => {
  const { name, value } = event.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
      case 'number':
      setNumber(value);
      break;
    default:
      return
  }
    }  

    const handleSubmit = event => {
        event.preventDefault();

       onSubmit(name, number)
       setName('')
       setNumber('')


    }
        return(
          <Formik>
         <Form onSubmit={handleSubmit}>
            <label htmlFor={nameImputId}>
            <p>Name</p>
            <Input
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
             value={name}
             onChange={handleChange}
             validationSchema={userSchema}
             id={nameImputId}
           />
           <ErrorMessage name="name" />
            </label>
            <label htmlFor={numberImputId}>
                <p>Number</p>
                <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                id={numberImputId}
              />
              <ErrorMessage name="number" />
            </label>
            <br />
            <Button 
           type="submit">
               Add contact
           </Button>

         </Form>
         </Formik>
        )    }


