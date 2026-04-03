import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';

function John()
{
 const nav = useNavigate();
  const {handleHome} = Navigate(nav); 

 return (
      <>
        <h1 id="Title">John</h1>
        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default John; 