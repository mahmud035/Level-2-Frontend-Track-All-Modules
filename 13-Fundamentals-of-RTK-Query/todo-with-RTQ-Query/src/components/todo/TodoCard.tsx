import { TTodo } from '@/redux/features/todo/todoSlice';
// import { useAppDispatch } from '@/redux/hooks';
import { useDeleteTodoMutation, useEditTodoMutation } from '@/redux/api/api';
import { Button } from '../ui/button';
import EditTodoModal from './EditTodoModal';

const TodoCard = ({ todo }: { todo: TTodo }) => {
  const { _id, title, description, priority, isCompleted } = todo || {};

  //? Delete Todo From Client Side Using Redux Toolkit
  // const dispatch = useAppDispatch();

  //* Delete Todo From Server Using RTQ Query
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();

  const handleDeleteTodo = (id: string) => {
    const confirm = window.confirm('Are you sure you want to DELETE the task?');
    if (confirm) {
      // dispatch(deleteTodo(id));
      deleteTodo(id);
    }
  };

  const handleToggleStatus = (id: string) => {
    // dispatch(toggleStatus(id));
    const updatedTodoData = {
      ...todo,
      isCompleted: !isCompleted,
    };
    const options = {
      id: id,
      data: updatedTodoData,
    };
    editTodo(options);
  };

  return (
    <div className="flex items-center justify-between w-full p-3 border rounded-md">
      <input
        onChange={() => handleToggleStatus(_id)}
        type="checkbox"
        className="mr-2"
        defaultChecked={isCompleted}
      />
      <p className="flex-[1.5] text-xl font-semibold">{title}</p>
      <div className="flex items-center flex-1 gap-1">
        <div
          className={`rounded-full size-3 
        ${priority === 'high' ? 'bg-red-500' : null}
        ${priority === 'medium' ? 'bg-yellow-500' : null}
        ${priority === 'low' ? 'bg-green-500' : null}
        `}
        ></div>
        <p className="text-xl font-medium capitalize ">{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted === true ? (
          <p className="text-xl font-medium text-green-500 ">Done</p>
        ) : (
          <p className="text-xl font-medium text-red-500">Pending</p>
        )}
      </div>
      <p className="text-xl font-medium flex-[2]">{description}</p>
      <div className="flex space-x-4">
        <Button onClick={() => handleDeleteTodo(_id)} className="bg-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <EditTodoModal todo={todo} />
      </div>
    </div>
  );
};

export default TodoCard;
