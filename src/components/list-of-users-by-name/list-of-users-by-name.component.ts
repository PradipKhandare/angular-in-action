import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-of-users-by-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-of-users-by-name.component.html',
  styleUrls: ['./list-of-users-by-name.component.css']
})
export class ListOfUsersByNameComponent {


  searchText = '';
  searchAge = '';

  users = [
    { name: 'Pradip', age: 28 },
    { name: 'Akshay', age: 23 },
    { name: 'Rutuja', age: 24 },
    { name: 'Sumit', age: 28 },
    { name: 'Shreyash', age: 20 },
  ];

  filteredUSers = [...this.users];


  filterUsers() {
    const search = this.searchText.toLowerCase();
    this.filteredUSers = this.users.filter(u => u.name.toLowerCase().includes(search));
  }

  filterAge() {
    const age = this.searchAge.toLowerCase();
    this.filteredUSers = this.users.filter(user => user.age.toString().includes(age));
  }

  employee = [
    { name: 'Pradip Khandare', age: 12, email: 'pradip@example.com', location: 'Pune', role: 'Admin' },
    { name: 'Akshay Patil', age: 17, email: 'akshay.patil@example.com', location: 'Mumbai', role: 'User' },
    { name: 'Rutuja Deshmukh', age: 24, email: 'rutuja.d@example.com', location: 'Nagpur', role: 'Moderator' },
    { name: 'Sumit Kale', age: 28, email: 'sumit.kale@example.com', location: 'Nashik', role: 'User' },
    { name: 'Shreyash Joshi', age: 20, email: 'shreyash.j@example.com', location: 'Pune', role: 'User' },
    { name: 'Neha Sharma', age: 16, email: 'neha.sharma@example.com', location: 'Delhi', role: 'Admin' },
    { name: 'Rohan Mehta', age: 30, email: 'rohan.mehta@example.com', location: 'Bangalore', role: 'User' },
    { name: 'Sneha Kulkarni', age: 22, email: 'sneha.k@example.com', location: 'Hyderabad', role: 'Moderator' },
    { name: 'Vikram Singh', age: 35, email: 'vikram.singh@example.com', location: 'Jaipur', role: 'Admin' },
    { name: 'Aarti Jadhav', age: 27, email: 'aarti.jadhav@example.com', location: 'Pune', role: 'User' }
  ];

  filteredEmployee = [...this.employee];


  puneEmployee = this.employee.filter(empl => empl.location == 'Pune');
  belowEighteenEmployee = this.employee.filter(emp => emp.age < 18);
  adminRoleEmployee = this.employee.filter(emp => emp.role == 'Admin');

  searchEmployee = '';

  filterEmployeByName() {
    const employee = this.searchEmployee.toLowerCase();
    this.filteredEmployee = this.employee.filter(emp => emp.name.toLowerCase().includes(employee));
  }

  searchEmailText = '';
  filterEmployeeByEmail() {
    const searchText = this.searchEmailText.toLowerCase();
    this.filteredEmployee = this.employee.filter(emp => emp.email.toLowerCase().includes(searchText));
  }

}
