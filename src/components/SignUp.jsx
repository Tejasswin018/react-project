import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const backimg = {
   // backgroundColor:'grey',
    backgroundImage: 'url("https://assets-v2.lottiefiles.com/a/569d9eae-116d-11ee-ade3-df3bcdfa8a46/s4HLgrM1nM.gif")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //borderRadius:'100% 100%',
  };

  const BStyle = {
    backgroundColor: 'darkblue',
    borderRadius: '60px',
    color: 'white',
    cursor: 'pointer',
  };

  const inputStyle = {
    padding: '10px',
    marginTop: '10px',
    borderRadius: '60px',
    borderWidth: '12px',
    borderColor: 'skyBlue',
  };

  const atag = {
    paddingLeft: '130px',
    color: 'darkBlue',
  };

  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate();

  const getname = (event) => setname(event.target.value);
  const getnumber = (event) => setnumber(event.target.value);
  const getemail = (event) => setemail(event.target.value);
  const getpassword = (event) => setpassword(event.target.value);

  const logg = (event) => {
    event.preventDefault();
    navigate('/Login');
    console.log(name);
    console.log(number);
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div style={backimg}>
        <h2 style={{ color: 'darkBlue', fontFamily: 'Roboto' }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '10px' }} />
          Sign Up
        </h2>

        <form>
          <input type="text" placeholder="Enter Name" style={inputStyle} onChange={getname} required></input>
          <br></br>
          <input type="text" placeholder="Enter mobile number" style={inputStyle} onChange={getnumber} required></input>
          <br></br>
          <input type="email" placeholder="Enter email address" style={inputStyle} onChange={getemail} required></input>
          <br></br>
          <input type="password" placeholder="Set Password" onChange={getpassword} style={inputStyle} required></input>
          <br></br>
          <a href="k" style={atag}>
            <b>Existing User?</b>
          </a>
          <br></br>
          <br></br>
          <button style={BStyle} onClick={logg}>
            <b>
              <h3>Sign Up</h3>
            </b>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
