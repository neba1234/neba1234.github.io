import { ChangeEvent } from 'react';
import Todo from '../../types'

import './index.css';

type Props = {
  id: string,
  name: string,
  done: boolean,
  onUpdateTodo: (id: string) => void;
  onDeleteTodoById: (id: string) => void;
}

export default function Item(props: Props) {
  const { id, name, done, onUpdateTodo, onDeleteTodoById } = props;

  const onChangeCheckbox = () => {
    onUpdateTodo(id);
  }

  const onDeleteItem = () => {
    if (window.confirm('Are you sure?')) {
      onDeleteTodoById(id);
    }
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onChangeCheckbox} />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" onClick={onDeleteItem}>Delete</button>
    </li>
  )
}