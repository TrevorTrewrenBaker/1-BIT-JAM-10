import Navigate from './Navigate';
import { useNavigate } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';

function John({setSolved, solved})
{
  const nav = useNavigate();
  const {handleHome} = Navigate(nav); 

  const [option1, setOption1] = useState(""); 
  const [option2, setOption2] = useState(""); 
  const [option3, setOption3] = useState(""); 
  const [option4, setOption4] = useState(""); 
  const [option5, setOption5] = useState(""); 

  const optionList1 = ["John", "Bill", "Margarete"];
  const optionList2 = ["$6.75", "4 months", "$27"];
  const optionList3 = ["assistant manager", "boss", "op shop", "software company"];
  const optionList4 = ["Eavesdropping", "Expert", "Expendable"];
  const optionList5 = ["safe", "secure", "software", "special", "Shoreside"];

  const makeOptionList = (arr) => {
    return arr.map((o) => <option id={useId()}>{o}</option>);
  }

  const SelectOption = (fn, e) => fn(e.target.value);


  
 return (
      <>
        <h1 id="Title">John's Challenge</h1>        

        <div hidden={solved} id="CenterBoxStyle">
            <p>You like to play games, don't you John?</p>
            <p>Let's see if you can finish my pattern matching quiz.</p>
            <p>You need to match the words in order of their appearance...</p>

            <div id="SingleRowStyle">
              <div id="DropdownContainer">
                <p>Option 1</p>
                <select value={option1} onChange={(e) => SelectOption(setOption1, e)}>{makeOptionList(optionList1)}</select>
              </div>

              <div id="DropdownContainer">
                <p>Option 2</p>
                <select value={option2} onChange={(e) => SelectOption(setOption2, e)}>{makeOptionList(optionList2)}</select>
              </div>

              <div id="DropdownContainer">
                <p>Option 3</p>
                <select value={option3} onChange={(e) => SelectOption(setOption3, e)}>{makeOptionList(optionList3)}</select>
              </div>

              <div id="DropdownContainer">
                <p>Option 4</p>
                <select value={option4} onChange={(e) => SelectOption(setOption4, e)}>{makeOptionList(optionList4)}</select>
              </div>

              <div id="DropdownContainer">
                <p>Option 5</p>
                <select value={option5} onChange={(e) => SelectOption(setOption5, e)}>{makeOptionList(optionList5)}</select>
              </div>

            </div>
        </div>

        


        <button onClick={handleHome}>Return to home</button>
      </>
 );
}

export default John; 