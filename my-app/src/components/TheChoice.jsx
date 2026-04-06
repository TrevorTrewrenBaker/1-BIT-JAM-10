import { useState } from 'react';
import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';

function TheChoice()
{

  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 

  const [endStatus, setEndStatus] = useState("undecided"); 

  const handleTruthClick = () => {setEndStatus("truth")};
  const handleLieClick = () => {setEndStatus("lie")};

  const ChoiceHidden = endStatus != "undecided";
  const TruthHidden = endStatus != "truth";
  const LieHidden = endStatus != "lie"; 

 return (
      <>
        <h1 id="Title">The Choice</h1>

        <div id="CenterBoxStyle" hidden={ChoiceHidden}>
           <p>Now we have reached the choice. You have been tasked with selling R.E.V.S Software for a while now, but what's hiding in there?</p>
           <p>The truth is, your anti-virus software is actually virus software! All your customers have been affected by it.</p>
           <p>But we both know you don't really care, do you? Look at how you handle your sales. You make people feel scared.</p>
           <p>What will you choose too do? Will you let all your clients know that this technology is actually a virus?</p>
           <p>Or will you continue to sell this software as per normal?</p>
        </div>

        <div id="CenterBoxStyle" hidden={ChoiceHidden}>
          <button onClick={handleTruthClick}>Inform the clients</button>
          <button onClick={handleLieClick}>Continue to lie</button>
        </div>

        <div id="CenterBoxStyle" hidden={TruthHidden}>
           <p>You've chosen to tell the truth.</p>
           <p>Hi, this is actually your boss. This was a test to see if you would protect the company.</p>
           <p>You've failed. We want our staff to lie for us.</p>
           <p>Pack your things and get out.</p>
        </div>

        <div id="CenterBoxStyle" hidden={LieHidden}>
           <p>You've chosen to lie to your customers.</p>
           <p>Hi, this is actually your boss. This was a test to see if you would protect the company.</p>
           <p>You've passed! We want you to do what it takes to advance our company.</p>
           <p>Time to discuss a raise.</p>
        </div>


        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default TheChoice; 
