import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import ProcessDialogue from './ProcessDialogue';
import billAndJohnDialogue from '../data/billAndJohnDialogue'
import { useState } from 'react';


function Bill({setSolved, solved})
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 
  
  const dialogue = ProcessDialogue(billAndJohnDialogue); 

  const [riddleAnswer, setRiddleAnswer] = useState(""); 

  const handleTextChange = (e) =>{
    setRiddleAnswer(e.target.value); 
  }

  const handleSubmitButton = () => {
    setSolved(a => a = riddleAnswer.trim().toLowerCase() === "safe"); 
  };

 return (
      <>
        <h1 id="Title">Bill's Challenge</h1>

        <div hidden={solved} id="CenterBoxStyle">
          <p>Solve the following riddle using your phone call with Bill for clues.</p>
          <p><i>My rectangular interior is dark and cold</i></p>
          <p><i>Secrets of yours, I will hold</i></p>
          <p><i>A simple code protects all</i></p>
          <p><i>What am I?</i></p>
          <p hidden={solved}>Enter Answer: <input type="text" onChange={handleTextChange}/></p>
          <button onClick={handleSubmitButton}>Submit Result</button>

          {(!solved && solved !== null) && <p>Not quite right, try again.</p>}
          </div>

        <div hidden={!solved} id="CenterBoxStyle">
            <p>Congratulations! You guessed the right word.</p>
            <p>Do you feel guilty for telling Bill the software was "safe" when you weren't sure yourself?</p>
            <p>Do you think blackmailing him into buying the anti-virus made him feel "safe"?</p>
        </div>
               
        <div id="LeftBoxStyle">
            {dialogue}
        </div>

        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default Bill; 