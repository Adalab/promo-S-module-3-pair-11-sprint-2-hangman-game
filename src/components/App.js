import { useEffect, useState } from 'react';
import Header from './Header'; 
import Dummy from './Dummy'; 
import Form from './Form'
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters'
import Footer from './Footer';

import {Route, Routes} from 'react-router-dom';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Dummy.scss';
import '../styles/Form.scss';
import '../styles/Header.scss';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  //  const handleSubmit = (ev) => {
  //   ev.preventDefault();
  // };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const changeLastLetter = (value)=>{
        value = value.toLocaleLowerCase();
        setLastLetter(value);
       
        if (!userLetters.includes(value)) {
        userLetters.push(value);
        setUserLetters([...userLetters]);
    }
  }
 

  // const handleLastLetter = (value) => {
  //   // value = value.toLocaleLowerCase();
  //   // setLastLetter(value);

  //   if (!userLetters.includes(value)) {
  //     userLetters.push(value);
  //     setUserLetters([...userLetters]);
  //   }
  // };

  return (
    <div className='page'>
        <Header/>
      <main className='main'>
        <section>
          <SolutionLetters
          word={word}
          userLetters={userLetters}/>
          <ErrorLetters
          word={word}
          userLetters={userLetters}
          />
          <Form lastLetter={lastLetter}
          changeLastLetter={changeLastLetter}
          />
        </section>
          <Dummy
          numberOfErrors={getNumberOfErrors()}/>
          
      </main>
      <Footer/>
    </div>
  );
}

export default App;
