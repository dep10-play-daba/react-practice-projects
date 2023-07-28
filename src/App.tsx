import React, {useState} from 'react';

import './App.css';

function App() {
    const [value,setValue] = useState('');
    const [taskList,setTaskList] = useState<Array<string>>([]);

  return (
      <>
     <h1 className={'text-center p-2'}>Tasks {taskList.length}</h1>
          <div className={'d-flex gap-2'}>
              <input className={'form-control p-3 ms-5'}
                 type="text"
                 placeholder={'Enter the Name'} value={value} onInput={event => {
                 setValue((event.target as HTMLInputElement).value)
                 }
              }></input>
          <button onClick={()=>{
              setTaskList([...taskList, value])
          }} className={'btn btn-primary me-5'}>Add</button>
          </div>
          <div className={'text-center '}>
              {taskList.map((task,index)=>(<div className={'p-2 mt-2'}>{task} {index+1}</div>))}
          </div>
      </>
  );
}
export default App;
