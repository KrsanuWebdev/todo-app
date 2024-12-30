import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  newTask: string = ''; // Input for new task
  tasks: { title: string; completed: boolean; editing: boolean }[] = []; // Array to store tasks

  // Add a new task to the list
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask.trim(), completed: false, editing: false });
      this.newTask = ''; // Clear input field
    }
  }

  // Toggle the completion status of a task
  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  // Remove a task from the list
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Start editing a task
  editTask(index: number) {
    this.tasks[index].editing = true; // Enable editing mode
  }

  // Save the edited task
  saveTask(index: number) {
    this.tasks[index].editing = false; // Disable editing mode
  }
}
