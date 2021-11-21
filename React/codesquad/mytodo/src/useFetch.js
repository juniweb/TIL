import { useState, useEffect } from 'react';

const useFetch = (setTodosDB) => {
    const [loading, setLoading] = useState(false);
    
    const fetchInitialData = () => {
      // const res = await fetch('http://localhost:8080/todo');
      // const initialData = await res.json();
      // console.log(initialData);
  
    //   console.log(setTodosDB);
    
      setLoading(true);
      
      const initialData = [
        {title: 'React', id:1, status: 'todo'},
        {title: 'Angular', id:2, status: 'todo'},
        {title: 'Java', id:3, status: 'todo'},
        {title: 'Python', id:4, status: 'todo'},
        {title: 'C#', id:5, status: 'todo'},
      ];
      
      setTodosDB(initialData);
      setTimeout(() => {
        console.log('3초 경과...');
        setLoading(false);
      }, 3000);
    }
  
    useEffect( () => {
      fetchInitialData();
    }, []);
  
    return loading;
  
  }

  export default useFetch;