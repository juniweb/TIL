import React, { useEffect, useReducer } from 'react';
import './TodoStore.css';
import useFetch from './useFetch';
import {todoReducer} from './TodoReducer';

export const TodoContext = React.createContext();

const TodoStore = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const setInitData = (initData) => {
    dispatch({type:'SET_INIT_DATA', payload:initData});
  }

  const loading = useFetch(setInitData);
  
  useEffect( () => {
    console.log('새로운 TODO 렌더링되었어요', todos);
  }, [todos]);


  return (
    <TodoContext.Provider value={ {todos, loading, dispatch} }>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoStore;
