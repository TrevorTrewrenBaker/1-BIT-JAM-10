import { useId } from 'react';

function ProcessDialogue(arr)
{
    return arr.map((item) => (<p key={useId()}><b>{item.name}:</b> {item.words}</p>));
}

export default ProcessDialogue; 