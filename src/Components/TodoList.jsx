import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addTodo, deleteTodo,deleteAllTodo } from '../Features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todo);

  const [dates, setDates] = useState('');
  const [todoData, setTodoData] = useState('');
  const [emptyError, setEmptyError] = useState('');
  const [showTodo,setShowTodo]=useState(false)

  useEffect(() => {
    const date = new Date().toLocaleDateString();
    setDates(date);
  }, []);
  useEffect(()=>{
if(selector.length>0){
    setShowTodo(true)
}
else{
    setShowTodo(false)
}
  },[selector])
  const addTodoToArr = (e) => {
    e.preventDefault();
    if (todoData === '') {
      setEmptyError('Please Enter the Field');
      return false;
    }
    const newObj = { id: Math.random(), val: todoData };
    console.log(newObj)
    dispatch(addTodo(newObj));
  };
  const DeleteTodoById=(id)=>{
dispatch(deleteTodo(id))
  }

  const DeletAll=()=>{
      dispatch(deleteAllTodo())
  }

  return (
    <>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h5>Welcome to Todo App</h5>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Todo List for: {dates}</p>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Add a Todo :</p>
      </div>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" onChange={(e) => setTodoData(e.target.value)}></textarea>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <p style={{ color: 'red' }}>{emptyError}</p>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <button className="btn btn-info" onClick={addTodoToArr}>
          Add Todo
        </button>
      </div>

    {showTodo&&<><button className='btn btn-danger' onClick={DeletAll}>Delete All</button><div style={{marginTop:"2rem",display:"flex",justifyContent:"center",alignItems:"center"}} className="card">
        <h5 style={{color:"red"}}>Your Todos :</h5>
    {selector.map((item)=>(<ul key={item.id}>
        <li style={{color:"green"}}>{item.val} <button className='btn btn-danger btn-sm' style={{marginLeft:"2rem"}} onClick={()=>DeleteTodoById(item.id)}>Delete</button></li>
    </ul>))}
    </div></>}
    </>
  );
};

export default TodoList;
