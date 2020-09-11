import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required(''),
    size: yup,
    toppings: yup,
    special: yup.string()
})

export default function Pizza() {

    const [formState, setFormState] = useState({
        name: '',
        size: '',
        toppings: '',
        special: ''
    })
    
};