const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Fix Bug in Code",
        "taskDescription": "Fix the issue causing the app to crash when submitting a form.",
        "date": "2024-11-20",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskTitle": "Design Homepage Layout",
        "taskDescription": "Create a modern, user-friendly homepage layout.",
        "date": "2024-11-22",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare a PowerPoint presentation for the client meeting tomorrow.",
        "date": "2024-11-21",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": 2,
    "firstName": "Isha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update Product Documentation",
        "taskDescription": "Update the user manual with the new features in the latest version.",
        "date": "2024-11-19",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskTitle": "Set Up Database",
        "taskDescription": "Set up the initial database schema for the new project.",
        "date": "2024-11-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Client Meeting Preparation",
        "taskDescription": "Prepare materials and agenda for the upcoming client meeting.",
        "date": "2024-11-21",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskTitle": "Test New Feature",
        "taskDescription": "Test the new feature and report any bugs.",
        "date": "2024-11-20",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskTitle": "Launch Marketing Campaign",
        "taskDescription": "Launch the social media campaign for the new product.",
        "date": "2024-11-22",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskNumber": {
      "active": 2,
      "newTask": 2,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": 4,
    "firstName": "Sanya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Research Competitor Products",
        "taskDescription": "Research and compile a report on competitor products in the market.",
        "date": "2024-11-19",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskTitle": "Fix UI Bug",
        "taskDescription": "Fix the bug where the UI does not render correctly on mobile devices.",
        "date": "2024-11-20",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create Task Management Feature",
        "taskDescription": "Develop a task management feature to track employee tasks.",
        "date": "2024-11-21",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskTitle": "Prepare Budget Report",
        "taskDescription": "Prepare the budget report for the upcoming fiscal year.",
        "date": "2024-11-22",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  }
];

const admin =  [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employees'))
    const admins = JSON.parse(localStorage.getItem('admin'))

    return {employee,admins}
}
  