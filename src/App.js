import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Poem from './Poem'
require('dotenv').config({path: '../env'})

function App() {
const API_KEY = process.env.react_app_api_key
const BASE_URL = `https://www.stands4.com/services/v2/poetry.php?&tokenid=${API_KEY}`
const ALT_URL = 'https://www.poemist.com/api/v1/randompoems'
  
//Declare state
const [poem, setpoem] = useState({
  title: '',
  author: '',
  year: '',
  text: ''
})

//Fetch a random poem on startup 
useEffect(() => {
  const getRandomPoem = async() => {
    const response = await axios.get(`${ALT_URL}`)
      .then(res => {console.log(res)
        setpoem({title: res.data[0].title,
                 author: res.data[0].poet.name,
                 text: res.data[0].content})
      })
      .catch(err => console.log(err))
  }
  
}, [])


  return (
    <div className="App">
      {/* <h1>Lets go babay</h1> */}
      <Poem
        title={poem.title}
        author={poem.author}
        year={poem.year}
        text={poem.text}
      />
    </div>
  );
}

export default App;
