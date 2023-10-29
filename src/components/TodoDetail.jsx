import React from 'react'
import { useParams } from 'react-router-dom'

function TodoDetail() {
  const [todo, setTodo] = React.useState({});
  const params = useParams();
  const id = params?.id || -1; 

  React.useEffect(() => {
    if(id === -1) return;
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => setTodo(json))
  }, [id])

  if(id === -1) {
    return <>Please s elected item</>
  }

  if(Object.keys(todo).length === 0) {
    return <>Loading ...</>
  }

  // if(!!todo) {
  //   return <>Loading ...</>
  // }

  return (
    <div>
      <h2>TodoDetail</h2>
      <div>id: {todo.id}</div>
      <div>title: {todo.title}</div>
    </div>
  )
}

export default TodoDetail