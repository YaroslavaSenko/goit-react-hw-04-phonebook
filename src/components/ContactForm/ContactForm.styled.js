import styled from '@emotion/styled';
import {Field} from 'formik';
import {Form as FormikForm} from 'formik';


export const Form = styled(FormikForm)`
display: block;
margin-top: 20px;
margin-bottom: 20px;
`;

export const Input = styled(Field)`
height: auto;
padding: 10px;
background-color: white;
border: 1px solid #d8e4e2;
border-radius: 8px;
`;

export const Button = styled.button`
padding: 8px 15px;
margin: 10px;
font-size: 12px;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #fff;
background-color: #4CAF50;
border: none;
border-radius: 15px;
`;