Expense Tracker App
An expense tracker application that allows users to log expenses by category, amount, and date, and displays a running total of expenses. This app includes a login system, a dashboard to view and add expenses, and a protected route to prevent unauthorized access.
Table of Contents
1.	Features
2.	Technologies Used
3.	Installation
4.	Usage
5.	File Structure
6.	Future Enhancements
________________________________________
Features
•	User Authentication: Login and logout system to access the expense tracker dashboard.
•	Expense Tracker: Users can add expenses by category, amount, and date.
•	Dashboard: Displays a list of all logged expenses with options to delete entries and a running total.
•	Responsive Design: Optimized layout for ease of use and readability.
________________________________________
Technologies Used
•	Node.js with Express for server-side code.
•	HTML, CSS, and JavaScript for the frontend interface.
•	Session Management to protect dashboard access.
•	MySQL or any preferred database for storing expenses (optional, based on future enhancement).
________________________________________
Installation
1.	Clone the Repository:
bash
Copy code
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2.	Install Dependencies: Ensure you have Node.js installed, then run:
bash
Copy code
npm install
3.	Set Up the Server:
o	In the root of your project, create a .env file to store any environment variables (like session secrets or database configuration).
o	Populate it as needed (e.g., SESSION_SECRET="your-secret-key").
4.	Run the Application:
bash
Copy code
node app.js
The server will start on http://localhost:3000.
________________________________________
Usage
Access the Application
1.	Login Page:
o	Go to http://localhost:3000/login.
o	Enter your email and password to log in.
2.	Dashboard:
o	Upon logging in, you’ll be redirected to the dashboard page (http://localhost:3000/dashboard).
o	You can add new expenses by selecting a category, entering an amount, and picking a date.
o	Each expense added will appear in the expenses list, along with the total expenses calculated at the bottom of the table.
Routes Overview
•	/auth/login: Endpoint for user login. Validates credentials and starts a session for the user.
•	/dashboard: Protected route that displays the expense tracker dashboard. Accessible only if logged in.
•	/auth/logout: Logs the user out by ending the session.
Deleting Expenses
1.	Each expense entry in the dashboard has a "Delete" button.
2.	Click the button to remove the expense from the list and update the total amount.
________________________________________
File Structure
bash
Copy code
/expense-tracker
├── app.js               # Main server file with routes
├── /public              # Public folder for static files
│   ├── login.html       # Login page
│   ├── dashboard.html   # Dashboard page
│   ├── login.css        # Styles for login page
│   ├── dashboard.js     # JavaScript for handling expense additions/deletions
│   └── dashboard.css    # Styles for dashboard
└── package.json         # Node dependencies and scripts
________________________________________
Future Enhancements
•	Database Integration: Store expenses and user data in a MySQL or PostgreSQL database.
•	User Registration: Implement a registration system for new users.
•	Additional Categories: Expand the list of categories available for expenses.
•	Detailed Analytics: Display charts and insights about spending patterns.
________________________________________
Contact
For questions or support, please contact machariaanthony2639@gmail.com


