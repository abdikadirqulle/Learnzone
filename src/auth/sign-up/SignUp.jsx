// SignInPage.js
import  { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/register-user', {
        name,
        email,
        password,
        type
      });
      alert(response.data.message);
      // Redirect or handle success as needed
    //   alert("register successfully");
    } catch (error) {
      alert('Signup failed. Please try again.', error);
      console.error('Error signing up:', error);
    }
  };


  useEffect(() => {
    if(user){
    //   toast.success("You already logged in");
      navigate("/courses");
    }
  }, []);
  return (
        <div  className="flex flex-col border border-black items-center justify-center py-10 pb-40 pt-[6rem]">

    <form onSubmit={handleSignup} className='flex flex-col'>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Type" required />
      <button type="submit">Sign Up</button>
    </form>
        </div>
  );
};

export default SignInPage;
