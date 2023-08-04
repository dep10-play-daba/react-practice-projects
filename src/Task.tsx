import './Task.css';

export function Task({desc}:{desc: string}){


    return(
        <>
            <div className={'task'} >
            <li className="list-group-item ">
                <label className="form-check-label stretched-link" >
                <input className="form-check-input p-2 me-1" type="checkbox" value=""/>
                    {desc}
                </label>
            </li>
            </div>
        </>
    )
}