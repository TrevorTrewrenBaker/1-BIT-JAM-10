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
               

        <div id="LeftBoxStyle">
            {dialogue}
        </div>

        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default Bill; 