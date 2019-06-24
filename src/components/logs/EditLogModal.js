import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const EditLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
      if(message === '' || tech === ''){
            M.toast({html: 'Edit form Failure...Please fill out all fields'})
      }else{
        //   e.preventDefault();
          console.log('Submit button is working', message, tech, attention);
          //Clear Fields
          setMessage('');
          setTech('');
          setAttention(false);
      }

  }

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
 {/* form title and content container for modal */}
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
 {/* Input field for message */}
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>
        <div className='row'>
 {/* Select field for tech */}
          <div className='input-field'>
           <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
               <option value="" disabled>Select Technician</option>
               <option value="John Doe">John Doe</option>
               <option value="Sam Smith">Sam Smith</option>
               <option value="Sara Wilson">Sara Wilson</option>
           </select>
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>
        <div className="row">
{/* Input field checkbox for attention */}
            <div className="input-field">
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={ e => setAttention(!attention)}/>
                        <span>Needs Attention</span>
                    </label>
                </p>
            </div>
        </div>
      </div>
{/* Submit Button for form */}
      <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default EditLogModal;
