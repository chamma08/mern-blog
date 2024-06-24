import {Alert, Button, FileInput, Select, TextInput} from 'flowbite-react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { app } from '../firebase';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CreatePost() {
    const [file, setFile] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(null);
    const [imageUploadError, setImageUploadError] = useState(null);
    const [formData, setFormData] = useState({});
    const handleImageUpload = async () => {
        try {
            if(!file){
                setImageUploadError('Please select an image to upload');
               return; 
            } 
            setImageUploadError(null);
            const storage = getStorage(app);
            const fileName = new Date().getTime() + '-' + file.name;
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setImageUploadProgress(progress.toFixed(0));
                },
                (error) => {
                    setImageUploadError('An error occurred while uploading the image');
                    setImageUploadProgress(null);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUploadProgress(null);
                        setImageUploadError(null);
                        setFormData({...formData, image: downloadURL});
                    });
                }
            ); 
        } catch (error) {
            setImageUploadError('An error occurred while uploading the image');
            setImageUploadProgress(null);
        }
    }
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

                <FileInput id='file' accept='image/*' onChange={(e) => setFile(e.target.files[0])}/>

                <Button type='button'  gradientDuoTone={'purpleToBlue'} size={'sm'} outline onClick={handleImageUpload} disabled={imageUploadProgress}>
                    {imageUploadProgress ? (
                    <div className='w-16 h-16'>
                        <CircularProgressbar value={imageUploadProgress || 0} text={`${imageUploadProgress}%`}/>
                    </div>
                    ):( 'Upload Image')}
                </Button>

            </div>
            {imageUploadError && (
                <Alert color='failure' className='my-4'>{imageUploadError}</Alert>
            )}
            {formData.image && (
                <img src={formData.image} alt="upload" className='w-full h-72 object-cover'/>
            )}
            <ReactQuill theme="snow" placeholder='Write something amazing...' required className='h-72 mb-12'/>
            <Button type='submit' gradientDuoTone={'purpleToPink'} >Publish</Button>
        </form>
    </div>
  )
}
