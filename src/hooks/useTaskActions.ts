import { useState } from 'react';
import type { Task } from '../types';

export const useTaskActions = (initialTasks: Task[] = []) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, ...updates } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const filterTasks = (status?: Task['status']) => {
    if (!status) return tasks;
    return tasks.filter(task => task.status === status);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    filterTasks
  };
};
