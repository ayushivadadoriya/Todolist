import {useSelector , useDispatch} from 'react-redux'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './todos.css'
import { handlecheckbox, removetodo } from '../redux/todoapp/action/action';

const todos = ({handleedit , editform}) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const todos=useSelector((state)=> state.todoreducer);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const style= { color : 'brown'}

  return todos.map((todo)=>(
    <div className='show-item' key={todo.id}>
      {editform===false && (
        <input type='checkbox' checked={todo.completed} onChange={()=>{dispatch(handlecheckbox(todo.id))}}></input>
      )}

      <p style={todo.completed===true?{textDecoration:"line-through"}:{textDecoration:'none'}}>{todo.todo}</p>
      <div className='action-box'>
        {editform===false && (
          <>
          <span><FaEdit style={style} onClick={()=>handleedit(todo)}/></span>
          <span ><MdDelete style={style} onClick={()=>dispatch(removetodo(todo.id))}/></span></>
        )}
       
      </div>
    </div>
  ))
}

export default todos