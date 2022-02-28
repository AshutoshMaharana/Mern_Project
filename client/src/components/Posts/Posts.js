import React from 'react'
import Post from './Post/Post.js'
import {useSelector,useDispatch} from 'react-redux'
import { createPost } from '../../redux/posts/postAction.js'

const Posts = () => {
  const allPost = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(allPost)
  return (
    <div className='post'>
      
      <Post/>
    </div>

  )
}

export default Posts