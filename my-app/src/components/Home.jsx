import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';

function Home()
{
    const nav = useNavigate();
    const {handleMargaret, handleJohn, handleBill, handleTheChoice} = Navigate(nav); 

    return (
        <>
            <h1>Wecolme to R.E.V.S ANTI-VIRUS SOFTWARE WARNING!</h1>
            <p>Please click on one of the buttons below to get started.</p>
            <button onClick={handleMargaret}>Margarete</button>
            <button onClick={handleBill}>Bill</button>
            <button onClick={handleJohn}>John</button>
            <button onClick={handleTheChoice}>The Choice</button>
        </>
    );
}

export default Home; 