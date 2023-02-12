import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!isAuth) {
      navigate('/login')
    }
  }, [])

  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  console.log(auth.currentUser)

  const postCollectionRef = collection(db, 'posts')
  const createPost = async (e) => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { 
        name: auth.currentUser.displayName, 
        id: auth.currentUser.uid,
        imgURL: auth.currentUser.photoURL
      },
    })
    navigate('/')
  }
  
  return (
    <div className='create-post'>
      <div className="container">
        <h1>Create Post</h1>
        <div className="input-group">
          <input placeholder='Title...' onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className="input-group">
          <textarea placeholder='Post...' onChange={(e) => {setPostText(e.target.value)}}></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
        {/* <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a> */}
      </div>
    </div>
  )
}

export default CreatePost