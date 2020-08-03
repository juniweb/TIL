const addOneItem = (state, todoItem) => {
    console.log('addOneItem', todoItem);
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
    console.log('removeOneItem', payload);
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    console.log('toggleOneItem', payload);
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    console.log('clearAllItems');
    state.todoItems = [];
    localStorage.clear();
}

export {
  addOneItem,
  removeOneItem,
  toggleOneItem,
  clearAllItems
}