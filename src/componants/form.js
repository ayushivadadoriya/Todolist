import React , { useState , useEffect} from 'react'
import { FaPlus } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import './form.css' 
import {useDispatch} from 'react-redux'
import { addtodo , handleeditsubmit } from '../redux/todoapp/action/action';

const form = ({editform , edittodo , cancleupdate}) => {
  const style={color:'brown'}
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputdata,setInputdata]= useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [editvalue , seteditvalue] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch=useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    seteditvalue(edittodo.todo);
  },[edittodo])

  const handlesubmit = (e) =>{
    e.preventDefault();
    if(inputdata.length > 2){
      let date=new Date();
      let time=date.getTime();
      let todoobj={
        id: time ,
        todo:inputdata,
        completed:false
      }
      setInputdata('');
      dispatch(addtodo(todoobj))
    }
   
  }

  const editsubmit = (e) =>{
    e.preventDefault();
    let editedobj={
      id:edittodo.id,
      todo:editvalue,
      completed:false
    }
    dispatch(handleeditsubmit(editedobj))
  }

  return (
  <>
  {editform===false ? (
     <form className='add-item' onSubmit={handlesubmit}>
     <input type='text' placeholder='Add note..' value={inputdata} onChange={(e) => setInputdata(e.target.value)}></input>
     <button type='submit' className='add'><FaPlus  style={style}/></button>
   </form>
  ):(
    <form className='add-item' onSubmit={editsubmit}>
     <input type='text' placeholder='Update note..' value={editvalue || ''} onChange={(e) => seteditvalue(e.target.value)}></input>
     <button type='submit' className='add'><RxUpdate style={style}/></button>
     <button type='button' className='back-btn' onClick={cancleupdate}>Back</button>
   </form>
  )}
  </>
   
    )
}

export default form