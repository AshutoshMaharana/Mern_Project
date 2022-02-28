import { Button } from '@material-ui/core'
import React, { useState } from 'react'


const Form = () => {
  const [postData,setPostData] = useState({
    creator:'',title:'',message:'',tags:'',selectedFile:''
  })
  const handleSubmit = () => {

  }
  return (
    <div className='form'>
      <form autoComplete='off' noValidate onSubmit={handleSubmit} className = 'userform'>
        <h6>Creating a Memory</h6>
        <label htmlFor='creator'>Creator:</label>
        <input type= 'text'
          name='creator'
          id='creator'
          value = {postData.creator}
          onChange = {(e) => setPostData({...postData,creator:e.target.value})}
          />
          <label htmlFor='title'>Title:</label>
        <input type= 'text'
          name='title'
          id='title'
          value = {postData.title}
          onChange = {(e) => setPostData({...postData,title:e.target.value})}
          />
        <label htmlFor='message'>Message:</label>
        <input type= 'text'
          name='message'
          id='message'
          value = {postData.message}
          onChange = {(e) => setPostData({...postData,message:e.target.value})}
          />
        <label htmlFor='tags'>Tags:</label>
        <input type= 'text'
          name='tags'
          id='tags'
          value = {postData.tags}
          onChange = {(e) => setPostData({...postData,tags:e.target.value})}
          />
        <label htmlFor='selectedFile'>SelectedFile:</label>
        <input type= 'file'
          name='selectedFile'
          id='selectedFile'
          value = {postData.selectedFile}
           onChange= {({base64}) => setPostData({...postData,selectedFile:base64})}
          /> 
          <button className = 'buttonSubmit' type='submit'>Submit</button> 
          <button className = 'buttonReset' type='reset'>Reset</button> 


      </form>

    </div>
  )
}

export default Form