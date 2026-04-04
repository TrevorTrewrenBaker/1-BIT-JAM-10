import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import ProcessDialogue from './ProcessDialogue';
import margareteAndJohnDialogue from '../data/margareteAndJohnDialogue'

function Margarete({setSolved, solved})
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 
  
  const [firstCounter, setFirstCounter] = useState(0); 
  const [secondCounter, setSecondCounter] = useState(0); 
  const [thirdCounter, setThirdCounter] = useState(0); 

 const handleFirstButtonClick = () => 
  {
    setFirstCounter(firstCounter - 1);
    setSecondCounter(secondCounter + 1);
    setThirdCounter(thirdCounter + 1);
  }

  const handleSecondButtonClick = () => 
  {
    setFirstCounter(firstCounter + 1);
    setSecondCounter(secondCounter - 1);
    setThirdCounter(thirdCounter + 1);
  }

  const handleThirdButtonClick = () => 
  {
    setFirstCounter(firstCounter + 1);
    setSecondCounter(secondCounter + 1);
    setThirdCounter(thirdCounter - 1);
  }

  const reset = () => 
    {
      setFirstCounter(0);
      setSecondCounter(0);
      setThirdCounter(0); 
    }

  const handleSubmitButton = () => {
    setSolved(a => a = firstCounter == 27 && secondCounter == 27 && thirdCounter == 27);
  };

  const dialogue = ProcessDialogue(margareteAndJohnDialogue); 

 return (
      <>
        <h1 id="Title">Margarete's Challenge</h1>

        <div id="CenterBoxStyle">
            <p>Use the buttons below to make them all match the mystery number from your phone call with Margarete.</p>
            <p>Use the script from the phone call to get the correct number.</p>

            <p>{firstCounter} {secondCounter} {thirdCounter} </p>

           <p>
              <button onClick={handleFirstButtonClick}>- + +</button>
              <button onClick={handleSecondButtonClick}>+ - +</button>
              <button onClick={handleThirdButtonClick}>+ + -</button>
              <button onClick={reset}>reset</button>
            </p>

            <button onClick={handleSubmitButton}>Submit Result</button>

            {(!solved && solved !== null) && <p>Not quite right, try again.</p>}
            {solved && 
            <>
              <p>Congratulations! You got the correct number!</p>
              <p>That poor woman... All she wanted to do was protect the op shop.</p>
              <p>You pushed that sale so hard. And for what? A single $27 sale...</p>
            </>}

        </div>

        <div id="LeftBoxStyle">
            {dialogue}
        </div>

        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default Margarete; 