
import React, { useState } from 'react';
import './RightSide.css';
import { useNavigate } from 'react-router-dom'
export default function RightSide() {
  const [formValues, setFormValues] = useState({ name: '', username: '', mail: '', mobile: '', checkBox: false });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    let value = e.target.value;
  
    if (e.target.name === 'mobile') {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 10  ) {
        setFormErrors({ ...formErrors, [e.target.name]: 'Invalid mobile number' });
        return;
      }
      else if ( value.length < 10  ) {
        setFormErrors({ ...formErrors, [e.target.name]: 'Invalid mobile number' });
        return;
      }
    }
  
    if (e.target.name === 'mail') {
      if (!value.includes('@')) {
        setFormErrors({ ...formErrors, [e.target.name]: 'Invalid email address' });
        return;
      }
    }
  
    setFormValues({ ...formValues, [e.target.name]: value });
    setFormErrors({ ...formErrors, [e.target.name]: value.trim() === '' ? `${e.target.name} is required` : '' });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    let valid = true;
  
    Object.entries(formValues).forEach(([key, value]) => {
      if (typeof value === 'string' && value.trim() === '' ) {
        errors[key] = `${key} is required`;
        valid = false;
      }
      if (key === "mail" ) {
        if (value.length < 1) {
            setFormErrors({ ...formErrors, [e.target.mail]: 'mail is required' });
            valid = false;
          }
        
      }
      if (!formValues['check']) {
        errors['checkBox'] = 'You must agree to share your registration data';
        valid = false;
      }
    });
  
    setFormErrors(errors);
  
    if (valid) {
        console.log("s");
        window.localStorage.setItem("userData",JSON.stringify(formValues));
        navigate('/Genre')
    }
  };
  

  return (
    <div className="rightSide">
      <p className="SuperText">Super App</p>
      <div className="upperText">
        <p>Create a new Account</p>
        <p>
          Email <span style={{ color: 'green' }}>|</span> Google
        </p>
      </div>
      <form>
        <input onChange={handleChange} type="text" name="name" placeholder="Name" required></input>
        {formErrors.name && <p className="error">{formErrors.name}</p>}
        <input onChange={handleChange} type="text" name="username" placeholder="UserName" required></input>
        {formErrors.username && <p className="error">{formErrors.username}</p>}
        <input onChange={handleChange} type="email" name="mail" placeholder="Email" required></input>
        {formErrors.mail && <p className="error">{formErrors.mail}</p>}
        <input onChange={handleChange} type="tel" name="mobile" placeholder="Mobile" pattern="[0-9]*" required></input>
        {formErrors.mobile && <p className="error">{formErrors.mobile}</p>}
        <label>
          <input onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.checked })} type="checkbox" name="check" />
          Share my registration data with Superapp
        </label>
        {formErrors.checkBox && <p className="error">{formErrors.checkBox}</p>}
        <button type="submit" onClick={handleSubmit}>
          SIGN UP
        </button>
      </form>
      <footer className="footer">
        <p>
          By clicking on Sign up. you agree to Superapp<span style={{ color: 'green' }}> Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{ color: 'green' }}> Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
}
