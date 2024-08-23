import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState([]);
	const [currentTask, setCurrentTask] = useState(null);

	const addTask = (task) => {
		setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
	};

	const updateTask = (updatedTask) => {
		setTasks(
			tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
		setCurrentTask(null);
	};

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const editTask = (task) => {
		setCurrentTask(task);
	};

	return (
		<div className="App">
			<h1>Personal Task Manager</h1>
			<TaskForm
				addTask={addTask}
				updateTask={updateTask}
				currentTask={currentTask}
			/>
			<TaskList
				tasks={tasks}
				deleteTask={deleteTask}
				toggleComplete={toggleComplete}
				editTask={editTask}
			/>
		</div>
	);
}

export default App;
