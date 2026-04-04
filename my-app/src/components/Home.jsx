import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home({margaretSolved})
{
    const nav = useNavigate();
    const {handleMargaret, handleJohn, handleBill, handleTheChoice} = Navigate(nav); 

    useEffect(() => {
   console.log("Margarete Solved Home:", margaretSolved);
}, [margaretSolved]);

    return (
        <>
            <h1> WELCOME TO</h1>
            <h1>R.E.V.S ANTI-VIRUS SOFTWARE WARNING!</h1>
            <p>Please click on one of the buttons below to get started.</p>
            <button onClick={handleMargaret}>Margarete</button>
            <button onClick={handleBill}>Bill</button>
            <button onClick={handleJohn}>John</button>
            {margaretSolved && <button onClick={handleTheChoice}>The Choice</button>}
        </>
    );
}

export default Home; 