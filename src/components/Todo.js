import React, { useState } from 'react';

import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

import useStorage from '../hooks/storage';


const filterItems = ['全て', '未完了', '完了済み'];

function Todo() {
  const [items, putItems, clearItems] = useStorage();

  const [filter, setFilter] = React.useState('全て');

  const filterData = React.useMemo(() => {
    if (filter === '全て') {
      return items;
    } else if (filter === '未完了') {
      return items.filter((item) => !item.done);
    } else if (filter === '完了済み') {
      return items.filter((item) => item.done);
    }
  }, [filter, items]);

  const handleClick = (key) =>
    putItems(
      items.map((item) => {
        if (item.key === key) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );

  const addTodo = (todo) => putItems([...items, todo]);

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input addTodo={addTodo} />
      <Filter filterItems={filterItems} filter={filter} setFilter={setFilter} />
      {filterData.map(item => (
        <TodoItem handleClick={handleClick} key={item.key} item={item} />
      ))}
      <div className="panel-block">
        {filterData.length} items
      </div>
      <div className="panel-block">
        <button onClick={clearItems} className="button is-fullwidth">
          全てのToDoを削除する
        </button>
      </div>
    </div>
  );
}

export default Todo;