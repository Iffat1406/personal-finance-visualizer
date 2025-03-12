# Personal Finance Visualizer
---
**Overview**
Personal Finance Visualizer is a web application designed to help users track and manage their income and expenses efficiently. The app provides a user-friendly interface for adding, viewing, and deleting financial transactions.

**Features**

- Add, view, and delete income and expenses
-Categorize transactions for better tracking
-Visual representation of financial data
-Secure data handling with MongoDB
-Responsive and intuitive UI
---

**Tech Stack**

Frontend:

1. React.js (Vite)
2. Styled Components
3. Axios for API requests

Backend:

1. Node.js & Express.js
2. MongoDB with Mongoose
3. CORS configuration
---

**Installation**

1. Clone the repository:
    ``git clone https://github.com/Iffat1406/personal-finance-visualizer.git
    cd personal-finance-visualizer``

2. Backend Setup:
        ``cd backend
        npm install``

3. Create a .env file in the backend folder and add your MongoDB connection string:
        ``MONGO_URI=your_mongodb_connection_string
        PORT=8000``

4. Run the backend server:
    ``npm start``

5. Frontend Setup:
        ``cd frontend
        npm install
        npm run dev``

6. API Endpoints

- Expense Routes

POST ``/api/v1/add-expense`` - Add a new expense
GET ``/api/v1/get-expenses`` - Get all expenses
DELETE ``/api/v1/delete-expense/:id`` - Delete an expense

- Income Routes

POST ``/api/v1/add-income`` - Add a new income
GET ``/api/v1/get-incomes`` - Get all incomes
DELETE ``/api/v1/delete-income/:id`` - Delete an income


