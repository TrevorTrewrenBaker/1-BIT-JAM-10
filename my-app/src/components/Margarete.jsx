import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';

function Margarete()
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 

 return (
      <>
        <h1 id="Title">Margarete</h1>
        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default Margarete; 