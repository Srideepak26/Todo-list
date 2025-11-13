import React, { useRef, useState } from "react";
import './todo.css'

export const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "First React project", status: "In Progress" },
        { id: 2, text: "Read the books", status: "Pending" },
        { id: 3, text: "First meeting", status: "Completed" },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [statusValue, setStatusValue] = useState("Pending");
    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState("");
    const [editedStatus, setEditedStatus] = useState("Pending");
    const [deleteId, setDeleteId] = useState(null);

    const addDialogRef = useRef(null);
    const deleteDialogRef = useRef(null);
    const editDialogRef = useRef(null);
    const successDialogRef = useRef(null);

    const openAddDialog = () => addDialogRef.current.showModal();
    const closeAddDialog = () => addDialogRef.current.close();

    const openDeleteDialog = (id) => {
        setDeleteId(id);
        deleteDialogRef.current.showModal();
    };
    const closeDeleteDialog = () => {
        setDeleteId(null);
        deleteDialogRef.current.close();
    };

    const openEditDialog = (id, text, status) => {
        setEditingId(id);
        setEditedText(text);
        setEditedStatus(status);
        editDialogRef.current.showModal();
    };
    const closeEditDialog = () => {
        setEditingId(null);
        editDialogRef.current.close();
    };

    const openSuccessDialog = () => successDialogRef.current.showModal();
    const closeSuccessDialog = () => successDialogRef.current.close();

    const handleAddTask = () => {
        if (inputValue.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: inputValue, status: statusValue },
            ]);
            setInputValue("");
            setStatusValue("Pending");
            closeAddDialog();
        }
    };

    const handleSaveEdit = () => {
        setTodos(
            todos.map((todo) =>
                todo.id === editingId
                    ? { ...todo, text: editedText, status: editedStatus }
                    : todo
            )
        );
        closeEditDialog();
        openSuccessDialog();
    };

    const confirmDelete = () => {
        setTodos(todos.filter((todo) => todo.id !== deleteId));
        closeDeleteDialog();
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>

            <button className="add-button" onClick={openAddDialog}>Add Task</button>

            <dialog ref={addDialogRef} className="dialog-box">
                <h2>Add New Task</h2>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                
                <div className="dialog-buttons">
                    <button className="cancel-btn" onClick={closeAddDialog}> Cancel</button>
                    <button className="save-btn" onClick={handleAddTask}>Save</button>
                </div>
            </dialog>

            <dialog ref={editDialogRef} className="dialog-box">
                <h2>Edit Task</h2>
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
                <select
                    value={editedStatus}
                    onChange={(e) => setEditedStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <div className="dialog-buttons">
                    <button className="cancel-btn" onClick={closeEditDialog}>
                        Cancel
                    </button>
                    <button className="save-btn" onClick={handleSaveEdit}>
                        Save
                    </button>
                </div>
            </dialog>


            <dialog ref={successDialogRef} className="dialog-box">
                <h3>Task edited successfully!</h3>
                <div className="dialog-buttons">
                    <button className="save-btn" onClick={closeSuccessDialog}>
                        OK
                    </button>
                </div>
            </dialog>

            <dialog ref={deleteDialogRef} className="dialog-box">
                <h3>Are you sure you want to delete this task?</h3>
                <div className="dialog-buttons">
                    <button className="delete-btn" onClick={confirmDelete}>
                        Yes
                    </button>
                    <button className="cancel-btn" onClick={closeDeleteDialog}>
                        No
                    </button>
                </div>
            </dialog>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.status}`}>
                        <span className="task-text">{todo.text}</span>
                        <span className={`status-tag ${todo.status.replace(" ", "-")}`} >{todo.status} </span>
                        <div className="actions">
                            <button className="view-btn" onClick={() => openEditDialog(todo.id, todo.text, todo.status)}>View</button>
                            <button className="delete-btn" onClick={() => openDeleteDialog(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
