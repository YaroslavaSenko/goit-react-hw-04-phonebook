import React from "react";
import { nanoid } from 'nanoid';
import {Formik, ErrorMessage } from 'formik';
import {Input, Form, Button} from './ContactForm.styled';
import * as yup from 'yup';

let userSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

class ContactForm extends React.Component{
    state = {
        name: '',
        number: '',
      }
    
    nameImputId = nanoid() ;
    numberImputId = nanoid();

    handleChange = event => {
        const { name,  value} = event.currentTarget;
        this.setState({
            [name]: value        
        })
    }  
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        this.props.onSubmit(this.state.name, this.state.number)
        this.setState({name: '', number:''})

    }
   
    render(){
        return(
          <Formik>
         <Form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameImputId}>
            <p>Name</p>
            <Input
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
             value={this.state.name}
             onChange={this.handleChange}
             validationSchema={userSchema}
             id={this.nameImputId}
           />
           <ErrorMessage name="name" />
            </label>
            <label htmlFor={this.numberImputId}>
                <p>Number</p>
                <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleChange}
                id={this.numberImputId}
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
}


export default ContactForm