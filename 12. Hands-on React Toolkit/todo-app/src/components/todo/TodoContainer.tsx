import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 rounded-lg w-full h-full space-y-3 overflow-auto">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>

        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md text-2xl font-semibold">
          <p>There is no task pending!!</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
