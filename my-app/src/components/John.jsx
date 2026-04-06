import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';

function John({setSolved, solved})
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 

  // const [option1, setOption1] = useState(""); 
  // const [option2, setOption2] = useState(""); 
  // const [option3, setOption3] = useState(""); 
  // const [option4, setOption4] = useState(""); 
  // const [option5, setOption5] = useState(""); 

  // const optionList1 = ["John", "Bill", "Margarete"];
  // const optionList2 = ["$6.75", "4 months", "$27"];
  // const optionList3 = ["assistant manager", "boss", "op shop", "software company"];
  // const optionList4 = ["Eavesdropping", "Expert", "Expendable"];
  // const optionList5 = ["safe", "secure", "software", "special", "Shoreside"];

  const optionLists = [
    ["John", "Bill", "Margarete"],
    ["$6.75", "4 months", "$27"],
    ["assistant manager", "boss", "op shop", "software company"],
    ["Eavesdropping", "Expert", "Expendable"],
    ["safe", "secure", "software", "special", "Shoreside"]
  ]

  const [selectedOptions, setSelectedOptions] = useState(new Array(5).fill(null));

  const answerList = new Array(5).fill({hidden: true, answer: ""}); 
  const roundCounter = 0; 
  const timeoutValue = 1000;

  const makeOptionList = (arr) => {
    return arr.map((o) => <option id={useId()}>{o}</option>);
  }

  const SelectOption = (i, e) => {
    //Deep copy the array. 
    //This is because useState is immutable, and a shallow copy will modify the original elements. 
    const newArray = structuredClone(selectedOptions);
    newArray[i] = e.target.value; 
    console.log(newArray); 
    setSelectedOptions(arr => arr = newArray);
  }

  const startButtonPressed = () => { }



  function CreateDropdownContainers()
  {
    const elements = [];

    //Use let instead of var here, as var i is function-scoped instead of block scoped. 
    //We do not need SelectOption(i,e) containing the same i value for each onChange
    for (let i = 0; i < optionLists.length; i++)
    { 
       elements.push(
        <div id="DropdownContainer">
           <p hidden={answerList[i].hidden}>{answerList[i].answer}</p>
           <p>Option {i+1}</p>
           <select defaultValue="0" onChange={(e) => SelectOption(i, e)}>
            <option value="0" disabled id={useId()}>Pick an option</option>
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
            <p>You need to match the words in order of their appearance...</p>

            <button onClick={startButtonPressed}>Start</button>

            {CreateDropdownContainers()}
        </div>

        


        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default John; 