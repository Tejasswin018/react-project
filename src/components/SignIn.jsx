import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the user icon

const Login = () => {
  const backimg = {
    backgroundImage: 'url("https://cdn.dribbble.com/users/1595839/screenshots/11700339/media/5b39c07a6a721b6b440288c6c6ec5cb1.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const Navigator = useNavigate();

  const BStyle = {
    backgroundColor: 'purple',
    borderRadius: '60px',
    color: 'white',
    cursor: 'pointer',
  };
  const inputStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '80px',
    borderWidth: '07px',
    borderColor: 'purple',
  };
  const atag = {
    paddingLeft: '130px',
    color: 'purple',
  };
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const getemail = (event) => {
    setemail(event.target.value);
  };
  const getpassword = (event) => {
    setpassword(event.target.value);
  };

  const logg = (event) => {
    console.log(password);

    console.log(email);
    event.preventDefault();
    console.log('OVER');
    Navigator('/');
  };

  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'purple', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} /> Login Page
        </h2>
        <form>
          <input type="text" placeholder="Enter email address" style={inputStyle} onChange={getemail}></input>

          <br></br>
          <br></br>
          <input type="password" placeholder="Password" onChange={getpassword} style={inputStyle}></input>

          <br></br>
          <a href="k" style={atag}>
            <b>forgot password?</b>
          </a>

          <br></br>
          <br></br>
          <button style={BStyle} onClick={logg}>
            <b>
              <h3>Login</h3>
            </b>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
