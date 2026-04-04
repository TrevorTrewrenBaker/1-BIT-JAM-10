import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import ProcessDialogue from './ProcessDialogue';
import billAndJohnDialogue from '../data/billAndJohnDialogue'


function Bill()
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 
  
  const dialogue = ProcessDialogue(billAndJohnDialogue); 

 return (
      <>
        <h1 id="Title">Bill Challenge</h1>

        <div id="CenterBoxStyle">
          <p>Solve the following riddle using your phone call with Bill for clues.</p>
          <p><i>My rectangular interior is dark and cold</i></p>
          <p><i>Secrets of yours, I will hold</i></p>
          <p><i>A simple code protects all</i></p>
          <p><i>What am I?</i></p>
        </div>
               
        <div id="LeftBoxStyle">
            {dialogue}
        </div>

        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default Bill; 