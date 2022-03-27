import React, { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db} from "../firebase-config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  
  let navigate = useNavigate();
  const params = useParams()
  const editid = params.id
  
  const editPost = async () => {
    const docRef = doc(db, 'posts', editid)
    await updateDoc(docRef, {
        title,
        postText,
    })
    navigate('/')
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

    // Fetch listing to edit
    useEffect(() => {
        const fetchListing = async () => {
          const docRef = doc(db, 'posts', editid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const data = docSnap.data()
            setTitle(data.title)
            setPostText(data.postText)
          } else {
            navigate('/')
         }
        }
    
        fetchListing()
      }, [editid, navigate])

  return (
    <div className="createPostPage">
    <div className="cpContainer">
      <h1>Create A Post</h1>
      <div className="inputGp">
        <label> Title:</label>
        <input
          placeholder="Title..."
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="inputGp">
        <label> Post:</label>
        <textarea
          placeholder="Post..."
          value={postText}
          onChange={(event) => {
            setPostText(event.target.value);
          }}
        />
      </div>
      <button onClick={editPost}> Edit Post</button>
    </div>
  </div>
  )
}

export default EditPost