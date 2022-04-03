import React from 'react';

function Plan(props) {
    return<>
            {/* {(props.prio === 1)? <li style={{backgroundColor : "#ff0000"}} className='shadow p-2 my-2 col-sm-9'>{props.item}</li> : (props.prio === 2)? <li style={{backgroundColor : "#ff4500"}} className='shadow p-2 my-2 col-sm-9'>{props.item}</li> : (props.prio === 3)? <li style={{backgroundColor : "#ff7518"}} className='shadow p-2 my-2 col-sm-9'>{props.item}</li> : (props.prio === 4)? <li style={{backgroundColor : "#ffdab9"}} className='shadow p-2 my-2 col-sm-9'>{props.item}</li> : <li className='shadow p-2 my-2 col-sm-9'>{props.item}</li>} */}
            <li className='shadow p-2 my-2 col-9'>{props.item}</li>
            <button onClick={()=>{props.sendDelete(props.id)}} className="btn my-1 col-1 offset-1"><i className="fas fa-trash"></i></button>
            
    </>

}

export default Plan;
