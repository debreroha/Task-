import Task from "./Task"; //// import the exported component
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <> 
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
