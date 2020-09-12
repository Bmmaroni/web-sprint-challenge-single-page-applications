import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required(''),
    size: yup,
    toppings: yup,
    special: yup.string()
})

export default function Form() {

    const [formState, setFormState] = useState({
        name: '',
        size: '',
        toppings: '',
        special: ''
    });

    const [errorState, setErrorState] = useState({
        name: '',
        size: '',
        toppings: '',
        special: ''
    });

    const [post, setPost] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });
    }, [formState]);

    const validate = (e) => {
        let value = e.target.type === 'e.target.checkbox' ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ''
                });
            })
    };

    const inputChange = (e) => {
        e.persist();
        validate(e);
        const value = e.target.type === 'e.target.checkbox' ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]: value})
    };

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('I pity the fool who is not eating this pizza!')
        axios
            .post("https://reqres.in/api/users", formState)
            .then( res => {
                console.log(res.data);
                setPost([...post, res.data]);
                setFormState({
                    name: '',
                    size: '',
                    toppings: '',
                    special: ''
                })
            })
            .catch( err => console.log(err));
    };
    
    return(
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name
                <input type='text' name='name' value={formState.name} />
                {errorState.name.length > 2 ? (<p>{errorState.name}</p>) : null}
            </label>

            <label>
                <select>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </label>

            <label>
                <input />
            </label>

            <label>
                <input />
            </label>
        </form>
    )
};