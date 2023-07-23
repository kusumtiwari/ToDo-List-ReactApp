import "./App.css";
import { useState} from 'react';
let num = 1;

export function InputForm(){
  const [value, setValue] = useState("");

  function handleClick(e){
    e.preventDefault();
    let input = document.querySelector('input');
    let textContent = input.value;
      setValue(textContent);
      input.value = "";
  }
  if(value !== ""){
    let div = document.createElement('div');
    div.classList.add('list-div');
    const btn = document.createElement('button');
    btn.textContent = "X";
    btn.classList.add('garbage');
    let p = document.createElement('p');
    p.textContent = num.toString() + ". " + value;
    div.append(p);
    div.append(btn);
    document.querySelector(".putList").append(div);
    num++;

    btn.addEventListener('click', () => {
    div.remove(); 
    })
  }
  
  return(
    <form className="form">
     <input placeholder="Enter your to-do" className="input"/>
     <button type="submit" className="btn" onClick={handleClick}>Add</button>
    </form>
  )
}

export default function Todo() {

  return (
    <>
     <h1 className="h1">To Do List App</h1>
     <InputForm />
     <div className="putList"></div>
    </>
  )
}
