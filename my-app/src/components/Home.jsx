import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';

function Home({margaretSolved, billSolved, johnSolved})
{
    const nav = useNavigate();
    const {handleMargaret, handleJohn, handleBill, handleTheChoice} = Navigate(nav); 

    return (
        <>
            <h1> WELCOME TO</h1>
            <h1>R.E.V.S ANTI-VIRUS SOFTWARE WARNING!</h1>
            <p>Please click on one of the buttons below to get started.</p>

            <button onClick={handleMargaret}>
                {margaretSolved && "✔ Margarete"} {!margaretSolved && "X Margarete"} 
            </button>

            {
                margaretSolved && 
                <button onClick={handleBill}>
                    {billSolved && "✔ Bill"} {!billSolved && "X Bill"}
                </button>
            }

            {
                billSolved && 
                <button onClick={handleJohn}>
                    {johnSolved && "✔ John"} {!johnSolved && "X John"}
                </button>
            }            

            {
                johnSolved && 
                <button onClick={handleTheChoice}>
                    The Choice
                </button>
            }
        </>
    );
}

export default Home; 