import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim()
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure('Please fill all the fields!'));
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  }
  
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-800 via-blue-500 to-pink-400 rounded-lg text-white">Matheesha's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo blog site created using MERN and Tailwind CSS. You can sign in and create your own blog posts.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value='Your Email' className="text-sm"/>
              <TextInput type='email' placeholder='example@gmail.com' id='email' className="w-full" onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your Password' className="text-sm"/>
              <TextInput type='password' placeholder='*********' id='password' className="w-full" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone={'purpleToBlue'} className="w-full" type='submit' disabled={loading}>
              {
                loading ? (
                <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading..</span>
                </>
                ) : (
                  'Sign In'
                )}
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Don't have an account?
            </span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
