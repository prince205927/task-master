import React from 'react';
import type { Task } from '../../types/index';
interface TaskCardProps{
    task: Task,
    onStatusChange: (taskId: string, status: Task['status']) => void;
}
const TaskCard:React.FC<TaskCardProps> = ({task, onStatusChange}) => {
    return(
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div>
                <span>Priority: {task.priority}</span>
                <span>Status: {task.status}</span>
            </div>
            <select value={task.status} onChange ={(e) => onStatusChange(task.id, e.target.value as Task['status'])} >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="review">Review</option>
                <option value="done">Done</option>
            </select>
        </div>
    )
}


export default TaskCard;
