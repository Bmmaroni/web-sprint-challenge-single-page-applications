import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const formSchema = yup.object().shape({
    name: yup.string().required('Wait so who are you?'),
    size: yup.string().required('How hungry are you?'),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    mushroom: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.boolean()
})

export default function Form() {

    const [formState, setFormState] = useState({
        name: '',
        size: '',
        pepperoni: '',
        bacon: '',
        mushroom: '',
        pineapple: '',
        instructions: ''
    });

    const [errorState, setErrorState] = useState({
        name: '',
        size: '',
        pepperoni: '',
        bacon: '',
        mushroom: '',
        pineapple: '',
        instructions: ''
    });

    const [post, setPost] = useState([]);

    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });
    }, [formState]);

    const validate = (e) => {
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ''
                });
            })
            .catch( err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            })
    };

    const inputChange = (e) => {
        e.persist();
        validate(e);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
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
                    pepperoni: '',
                    bacon: '',
                    mushroom: '',
                    pineapple: '',
                    instructions: ''
                })
            })
            .catch( err => console.log(err));
    };
    
    return(
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name
                <input 
                    type='text' 
                    name='name' 
                    value={formState.name} 
                    onChange={inputChange}
                />
                {errorState.name.length > 2 ? (<p>{errorState.name}</p>) : null}
            </label>

            <label htmlFor='size'>
                Size
                <select name='size' onChange={inputChange}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
                {errorState.size.length > 0 ? (<p>{errorState.size}</p>) : null}
            </label>

            <label htmlFor='pepperoni'>
                <input 
                    type='checkbox' 
                    name='pepperoni' 
                    checked={formState.pepperoni} 
                    onChange={inputChange}
                />
                Pepperoni
            </label>
                
            <label>    
                <input 
                    type='checkbox' 
                    name='bacon' 
                    checked={formState.bacon} 
                    onChange={inputChange}
                />
                Bacon
            </label>    

            <label>
                <input 
                    type='checkbox' 
                    name='mushroom' 
                    checked={formState.mushroom} 
                    onChange={inputChange}
                />
                Mushroom
            </label>
            
            <label>
                <input 
                    type='checkbox' 
                    name='pineapple' 
                    checked={formState.pineapple} 
                    onChange={inputChange}
                />
                Pineapple

            </label>

            <label htmlFor='instructions'>
                <textarea 
                    name='instructions'
                    value={formState.instructions}
                    onChange={inputChange}
                />
            </label>
            {/* <Link to='./confirmation'> */}
                <button data-cy='submitButton' disabled={buttonDisabled} >Add to Order</button>
            {/* </Link> */}
        </form>
    )
};