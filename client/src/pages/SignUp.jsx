import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-800 via-blue-500 to-pink-400 rounded-lg text-white">Matheesha's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo blog site created using MERN and Tailwind CSS. You can sign up and create your own blog posts.
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value='Your username' className="text-sm"/>
              <TextInput type='text' placeholder='Username' id='username' className="w-full"/>
            </div>
            <div>
              <Label value='Your Email' className="text-sm"/>
              <TextInput type='text' placeholder='example@gmail.com' id='email' className="w-full"/>
            </div>
            <div>
              <Label value='Your Password' className="text-sm"/>
              <TextInput type='text' placeholder='Password' id='password' className="w-full"/>
            </div>
            <Button gradientDuoTone={'purpleToBlue'} className="w-full" type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>
              Already have an account?
            </span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
