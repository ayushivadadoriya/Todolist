import './App.css';
import { FaRegStickyNote } from "react-icons/fa";
import Form from './componants/form';
import Todos from './componants/todos';
import { useDispatch , useSelector } from 'react-redux'
import { deleteall } from './redux/todoapp/action/action';
import { useState } from 'react'

function App() {
   
  const dispatch = useDispatch();
  const todos=useSelector((state)=> state.todoreducer);
  const [editform , seteditform] = useState(false);
  const [edittodo , setedittodo] = useState('');

  const handleedit=(todo)=>{
    seteditform(true);
    setedittodo(todo);
  }

  const cancleupdate=()=>{
    seteditform(false);
  }

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <h2>Type Your Note Hear. <FaRegStickyNote /></h2>
        </div>
        <Form editform={editform} edittodo={edittodo} cancleupdate={cancleupdate}/>
        <Todos handleedit={handleedit} editform={editform} />
        {todos.length > 1 &&(<button className='delete-all' onClick={()=> dispatch(deleteall())}>Delete All</button>)}
      </div>
    </>
  );
}

export default App;
