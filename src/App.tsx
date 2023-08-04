import React, {useEffect, useRef, useState} from 'react';


import './App.css';
import {Task} from "./Task";
import {db} from "./firebase";

function App() {
    const [value,setValue] = useState('');
    const [taskList,setTaskList] = useState<Array<string>>([]);
    const textRef=useRef<HTMLInputElement>(null)

    useEffect(()=>{
        db.collection('task').onSnapshot(snapshot=>{
           const tasks=snapshot.docs.map(doc=>doc.data().task as string);
            setTaskList(tasks);
        });
    },[]);

  return (
      <>
     <h1 className={'text-center p-2'}>Tasks {taskList.length}</h1>
          <form action={"#"} className={'d-flex gap-2'}>
              <input ref={textRef} className={'form-control p-3 ms-5'}
                 type="text"
                 placeholder={'Enter the Name'} value={value} onInput={event => {
                 setValue((event.target as HTMLInputElement).value)
                 }
              }></input>
          <button onClick={()=>{
              db.collection('task').add({task:value});
              // setTaskList([...taskList, value]);
              setValue('');
              textRef.current!.focus();

          }} className={'btn btn-primary me-5'}>Add</button>
          </form>
          <div className={'ms-5'}>
              {!taskList.length && <div className={'text-center'}>No tasks to display</div>}
              {taskList.map((task,index)=><Task desc={task}/>)}
          </div>
      </>
  );
}
export default App;
