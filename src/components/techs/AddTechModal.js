import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Submission Failure...Please fill out all fields' });
    } else {
      //   e.preventDefault();
      console.log('Submit button is working for tech add', firstName, lastName);
      //Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
    {/* form title and content container for modal */}
      <div className='modal-content'>
        <h4>Enter New Technician</h4>
        <div className='row'>
    {/* Input field for firstName*/}
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
    {/* Input field for lastName*/}
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
    {/* Submit new tech button */}
          <div className='modal-footer'>
            <a
              href='#!'
              onClick={onSubmit}
              className='modal-close waves-effect blue btn'
            >
              Enter
            </a>
          </div>
      </div>
    </div>
  );
};

export default AddTechModal;
