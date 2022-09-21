import './App.css';
import axios from 'axios'
import {useState} from 'react'
function App() {
 const  [quote, setQuote] = useState('')

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res  => {
      console.log(res.data.content)
      setQuote(res.data.content)

     })
     .catch(err =>{
      console.log(err)

     })
  }

  return (
    <div className="App">

      <div className="center">

         <button onClick={getQuote}>Get Quote</button>
       

      </div>

      <p className='quote'>{quote}</p>

      <p className='copyright'>&copy; Nobi.com  2022</p>
      
   
     
    </div>
  );
}

export default App;
