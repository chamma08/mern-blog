import {Button, FileInput, Select, TextInput} from 'flowbite-react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='min-h-screen mx-auto p-3 max-w-3xl'>
        <h1 className='my-7 text-center font-semibold text-3xl'>Create Post</h1>
        <form className='flex flex-col gap-4'>
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type='text' placeholder='Title' required id='title' className='flex-1'/>
                <Select>
                    <option value='uncategorized'>Select Category</option>
                    <option value='reactjs'>React.js</option>
                    <option value='nextjs'>Next.js</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='angular'>Angular</option>
                </Select>
            </div>
            <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                <FileInput id='file' accept='image/*'/>
                <Button type='button'  gradientDuoTone={'purpleToBlue'} size={'sm'} outline>Upload Image</Button>
            </div>
            <ReactQuill theme="snow" placeholder='Write something amazing...' required className='h-72 mb-12'/>
            <Button type='submit' gradientDuoTone={'purpleToPink'} >Publish</Button>
        </form>
    </div>
  )
}
