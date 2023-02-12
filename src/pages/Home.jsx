import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../utils/firebase'
import { MdDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);


  
  return (
    <div className='home'>
      {postLists.map((post, i) => (
        <div key={i} className="post">
          <div className="header">
            <h1>{post.title}</h1>
          </div>
          <div className="delete">
            <button onClick={() => {
                      deletePost(post.id);
                    }}>
            <MdDeleteOutline size={50}/>
            </button>
          </div>
          <div className="post-text">
            <p>{post.postText}</p>
            <h1><span>From </span>{post.author.name}</h1>
            <img src={post.author.imgURL} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home