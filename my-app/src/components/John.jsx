import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';

function John({setSolved, solved})
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 

  const defaultValue = "default"; 

  const optionLists = [
    ["John", "Bill", "Margarete"],
    ["$6.75", "4 months", "$27"],
    ["assistant manager", "boss", "op shop", "software company"],
    ["Eavesdropping", "Expert", "Expendable"],
    ["safe", "secure", "software", "special", "Shoreside"]
  ]

  const [selectedOptions, setSelectedOptions] = useState(new Array(5).fill(null));

  const [answerList, setAnswerList] = useState(new Array(5).fill("")); 

  const [answersHidden, setAnswersHidden] = useState(true); 

  const makeOptionList = (arr) => {
    return arr.map((o) => <option disabled={!answersHidden} id={useId()}>{o}</option>);
  }

  const SelectOption = (i, e) => {
    //Deep copy the array. 
    //This is because useState is immutable, and a shallow copy will modify the original elements. 
    const newArray = structuredClone(selectedOptions);
    newArray[i] = e.target.value; 
    console.log(newArray); 
    setSelectedOptions(arr => arr = newArray);
  }

  const startButtonPressed = async () => 
  { 
    //Clear all selected choices.
    setSelectedOptions(new Array(5).fill(defaultValue));

    //Assign choices
    const tempAnswerList = structuredClone(answerList);

    for (let i = 0; i < optionLists.length; i++)
    {
       const list = optionLists[i];
       const randomVal = Math.floor(Math.random() * list.length); 
       tempAnswerList[i] = list[randomVal];
    }
    
    setAnswersHidden(false); 
    setAnswerList(prevArr => prevArr = tempAnswerList); 
    await sleep(2000); 
    setAnswersHidden(true); 
  }

  const submitButtonPressed = () => 
  {
     setSolved(a => JSON.stringify(answerList) === JSON.stringify(selectedOptions))
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  function CreateDropdownContainers()
  {
    const elements = [];

    //Use let instead of var here, as var i is function-scoped instead of block scoped. 
    //We do not need SelectOption(i,e) containing the same i value for each onChange
    for (let i = 0; i < optionLists.length; i++)
    { 
       elements.push(
        <div id="DropdownContainer">
           <p hidden={answersHidden}>{answerList[i]}</p>
           <p>Option {i+1}</p>
           <select defaultValue={defaultValue} value={selectedOptions[i]} onChange={(e) => SelectOption(i, e)}>
              <option value={defaultValue} disabled id={useId()}>Pick an option</option>
              {makeOptionList(optionLists[i])}
            </select>
        </div>
       )
    }

    return (
      <div id="SingleRowStyle">
         {elements}
      </div>
    );
  }
  
 return (
      <>
        <h1 id="Title">John's Challenge</h1>        

        <div hidden={solved} id="CenterBoxStyle">
            <p>You like to play games, don't you John?</p>
            <p>Let's see if you can finish my pattern matching quiz.</p>
            <p>You need to match the words that flash on the screen</p>

            <button onClick={startButtonPressed}>Show Answers</button>

            {CreateDropdownContainers()}

            <button onClick={submitButtonPressed}>Submit Answers</button>
        </div>

        {(!solved && solved !== null) && <p>Not quite right, try again.</p>}

        <div hidden={!solved} id="CenterBoxStyle">
            <p>Congratulations! You got the items correct.</p>
            <p>Now you can go find out what is truely hidning in that software.</p>
            <p>What's hiding in there?</p>
        </div>

        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default John; 