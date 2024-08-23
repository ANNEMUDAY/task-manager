import React from "react";

const TaskItem = ({ task, deleteTask, toggleComplete, editTask }) => {
	return (
		<div className="task-item">
			<h2 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
				{task.title}
			</h2>
			<p>
				{task.description} {task.id}
			</p>
			<button onClick={() => toggleComplete(task.id)}>
				{task.completed ? "Mark Incomplete" : "Mark Complete"}
			</button>
			<button onClick={() => editTask(task)}>Edit</button>
			<button onClick={() => deleteTask(task.id)}>Delete</button>
		</div>
	);
};

export default TaskItem;
