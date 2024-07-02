# School ERP System

School ERP System is a web application designed to manage various aspects of a school's operations, including faculty updates, student profiles, and more. The application is built using ReactJS and integrates with a mock API for data management and performs CRUD operation using axios.


## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [User Documentation](#user-documentation)
- [Future Development](#future-development)
  
## Features
- **Admissions Management**: Handle the CRUD operations for student admissions.
- **Faculty Management**: Handle the CRUD operations for Faculty admissions.
- **Dynamic Layout Adjustments**: Responsive design for better user experience..
- **Mock API Integration**: Data management using axios and mock API.

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/linaphadte/School-ERP.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd school-erp
    ```
3. **Install dependencies**:
    ```bash
    npm install
    npm install react-router-dom
    npm install bootstrap
    npm install react-axios
    ```
## Usage
1. **Run the development server**:
    ```bash
    npm start
    ```
2. **Open your browser and navigate to**:
    ```
    http://localhost:3000
    ```


## Technologies
- **Frontend**: ReactJS, HTML, CSS
- **State Management**: React Hooks, Context API
- **HTTP Client**: axios
- **Mock API**: Mock API service for testing
- **CSS Framework**: Bootstrap
## Project Structure
```
school-erp/
├── node_modules/
├── public/
├── src/
│   ├── Components/
│   │   ├── Images/
│   │   └── Inc/
│   │       ├── Appupdate.js
│   │       ├── Facultyprofile.js
│   │       ├── Facultyupdate.js
│   │       ├── Navbar.js
│   │       ├── Newapp.js
│   │       ├── Newfaculty.js
│   │       ├── Sidebar.js
│   │       └── Studentprofile.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
## API Endpoints
- **Get all students**: `GET /students`
- **Get student by ID**: `GET /students/:id`
- **Add new student**: `POST /students`
- **Update student**: `PUT /students/:id`
- **Delete student**: `DELETE /students/:id`
- **Get all faculty**: `GET /faculty`
- **Get faculty by ID**: `GET /faculty/:id`
- **Add new faculty**: `POST /faculty`
- **Update faculty**: `PUT /faculty/:id`
- **Delete faculty**: `DELETE /faculty/:id`

## User Documentation

### Admission Page

#### View Admissions
1. Navigate to the **Admission** section from the sidebar.
2. You can view a list of all current students.

![Admissions List](https://github.com/linaphadte/School-ERP/blob/master/SSimages/studentprofile.png)

#### Add New Student
1. Click the **New Application** button and select Student from the dropdown.
2. Fill out the form with the necessary information and click **Save**.

![Add Admission Form](https://github.com/linaphadte/School-ERP/blob/master/SSimages/addstudent.png)
![Add Admission Form ](https://github.com/linaphadte/School-ERP/blob/master/SSimages/addstudent2.png)

#### Edit Admission
1. Click the **Edit icon** button next to the Admission you want to edit.
2. Update the necessary information and click **Update**.

![Edit Admission Form](https://github.com/linaphadte/School-ERP/blob/master/SSimages/updatestudent.png)
![Edit Admission Form](https://github.com/linaphadte/School-ERP/blob/master/SSimages/updatestudent2.png)

#### Delete Admission
1. Click the **Delete icon** button next to the admission you want to remove.

![Delete Admission Confirmation](https://github.com/linaphadte/School-ERP/blob/master/SSimages/deletestudent.png)
![Delete Admission Confirmation](https://github.com/linaphadte/School-ERP/blob/master/SSimages/deletestudent2.png)

### Faculty Page

#### View Faculty
1. Navigate to the **Faculty** section from the sidebar.
2. You can view a list of all faculty members.

![Faculty List](https://github.com/linaphadte/School-ERP/blob/master/SSimages/facultyprofile.png)

#### Add Faculty
1. Click the **New Application** button and select Faculty from the dropdown.
2. Fill out the form with the necessary information and click **Save**.

![Add Faculty Form](https://github.com/linaphadte/School-ERP/blob/master/SSimages/addfaculty.png)

#### Edit Faculty
1. Click the **Edit** button next to the faculty member you want to edit.
2. Update the necessary information and click **Update**.

![Edit Faculty Form](https://github.com/linaphadte/School-ERP/blob/master/SSimages/updatefaculty.png)
![Edit Faculty Form](https://github.com/linaphadte/School-ERP/blob/master/SSimages/updatefaculty2.png)

#### Delete Faculty
1. Click the **Delete** button next to the faculty member you want to remove.

![Delete Faculty Confirmation](https://github.com/linaphadte/School-ERP/blob/master/SSimages/deletefaculty.png)

## Future Development
### Planned Features

- **Academics Section:**: Class schedule, course management, student grades and assignments.
- **Finance Section**: Fee management, expense tracking.
- **Assets Section**: Inventory managment and maintenance requests.
- **Calendar Section**: Event management and notifications.
- **Settings Section**: User Role and permissions.
  

### Enhancements
- **User Interface Improvements**: Continuously refine the user interface for better usability and aesthetics.
- **Performance Optimization**: Optimize the application for better performance and faster load times.
- **Accessibility**: Ensure the application is accessible to users with disabilities by following accessibility guidelines.


