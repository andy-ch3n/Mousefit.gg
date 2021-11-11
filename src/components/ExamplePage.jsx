import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, getName } from './redux/state/firstNameSlice.js';
import { setLastName, getLastName } from './redux/state/lastNameSlice.js'
import Counter from '../components/helpers/Counter.jsx';
import Button from '@mui/material/Button';


function ExamplePage() {
  const firstName = useSelector(getName);
  const lastName = useSelector(getLastName);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setName({ firstname: e.target.value }));
  };

  const handleLastNameChange = () => {
    dispatch(setLastName({ lastname: 'Drew'}))
  }

  const handleButtonChange = () => {
    dispatch(setName({ firstname: false}));
  }

  return (
    <>
      <h1>Hello</h1>
      <br />
      <br />
      <Counter />
      <br />
      <br />
      {firstName.firstname ? <input type="text" placeholder={firstName.firstname} onChange={handleChange} /> : null}
      <br />
      <br />
      <span>{firstName.firstname}</span>
      <br />
      <br />
      <Button variant="contained" onClick={handleButtonChange}>Change first name to false</Button>
      <br />
      <br />
      <span>{lastName.lastname}</span>
      <br />
      <Button variant="contained" color="secondary" onClick={handleLastNameChange}>Drew</Button>
    </>
  );
}

export default ExamplePage;