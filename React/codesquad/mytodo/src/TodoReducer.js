export const todoReducer = (todos, {type, payload}) => {
    switch (type) {
      case 'ADD_TODO':
        return [...todos, {title: payload, id:todos.length+1, status: 'todo'}];
  
      case 'SET_INIT_DATA':
        return payload;
  
      case 'CHANGE_TODO_STATUS':
        // return todos.map(todo => {
        //   if (todo.id === +payload) {
        //     console.log('todo.id change', todo.id);
        //     if (todo.status == 'done') todo.status = 'todo';
        //     else todo.status = 'done';
        //   }
        //   console.log(todo);
        //   return todo;
        // });
        return todos.map(todo => {
            if(todo.id === +payload) {
              if(todo.status === "done") todo.status = "todo";
              else todo.status = "done";
            }
            return todo;
          });
  
        // return todos.map((item) => {
        //   if (item.id === +payload) {
        //     console.log('item.id change', item.id);
        //     item.status = item.status === 'todo'? 'done' : 'todo'; 
        //   }
        //   return item;
        // });


        // return [
        //   {title: 'React', id: 1, status: 'todo'},
        //   {title: 'Angular', id: 2, status: 'done'},
        //   {title: 'Java', id: 3, status: 'todo'}
        // ]
  
      default:
        break;
    }
  }