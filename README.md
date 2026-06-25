# Todo Application

A full-stack Todo Application built using **ASP.NET Core Web API (.NET 10)** for the backend and **React JS** for the frontend.

## Features

- Create new todo items
- View all todo items
- Update existing todo items
- Delete todo items
- Search todos by keyword
- Filter todos by category (Work / Personal)
- Filter todos by priority (High / Medium / Low)
- Global exception handling
- Input validation using Data Annotations
- In-memory data storage
- Unit testing using xUnit

---

## Technologies Used

### Backend
- ASP.NET Core Web API (.NET 10)
- C#
- Dependency Injection
- In-Memory Data Storage
- xUnit

### Frontend
- React JS
- Axios
- CSS

---

## Project Structure

```
TodoApplication
│
├── backend
│   └── TodoApp
│
├── frontend
│   └── todo-frontend
│
└── README.md
```

---

## Prerequisites

Before running the project, make sure you have installed:

- .NET 10 SDK
- Node.js (LTS version recommended)
- npm
- Visual Studio 2022 (or later) with ASP.NET and web development workload

---

## Running the Backend

1. Open the **TodoApp** project in Visual Studio.

2. Restore the NuGet packages.

3. Run the project.

The API will start at something similar to:

```
https://localhost:7234
```

---

## Running the Frontend

Open a terminal inside the frontend folder:

```bash
cd frontend/todo-frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The application will open in your browser at:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todo | Get all todos |
| GET | /api/todo/{id} | Get todo by ID |
| POST | /api/todo | Add a new todo |
| PUT | /api/todo/{id} | Update a todo |
| DELETE | /api/todo/{id} | Delete a todo |
| GET | /api/todo/search/{keyword} | Search todos |
| GET | /api/todo/category/{category} | Filter by category |
| GET | /api/todo/priority/{priority} | Filter by priority |

---

## Testing

The backend includes unit tests written using **xUnit**.

To run the tests:

```bash
dotnet test
```

or use **Test Explorer** in Visual Studio.

---

## Future Improvements

- Database integration using SQL Server
- User authentication
- Todo completion status
- Responsive UI improvements
- Docker support
- Deployment to Azure

---
