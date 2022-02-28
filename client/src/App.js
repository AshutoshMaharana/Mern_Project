import React from 'react'
import memories from './images/memories.jpg'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import store from './redux/store.js'
import {Provider} from 'react-redux'
import '../src/App.scss'

const App = () => {
  return (<Provider store={store}>
   

    <div className='App'>

   <div className='memories'>
     <img src={memories} alt = 'memories' />
   </div>
   <div className='grid'>
        <Posts/>
       <Form/>
     </div>

   </div>
    
   </Provider>
  )
}

export default App