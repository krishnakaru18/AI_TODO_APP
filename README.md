Momentum: AI-Powered To-Do List & Project Tracker
Momentum is a modern, responsive, and intelligent web application designed to help you manage tasks and track projects with ease. Built with a clean UI and powerful features, it leverages Google's Gemini API to bring intelligent task management to your fingertips. This application is a single-file, all-in-one solution that uses Firebase for real-time data persistence.

✨ Key Features
Full CRUD Operations: Create, read, update, and delete both projects and tasks seamlessly.

Project Organization: Group your tasks into distinct projects for better organization.

Dual Views:

List View: A classic, straightforward view of your tasks.

Kanban Board: A visual, drag-and-drop board to track task status (To-Do, In Progress, Done).

Task Details: A comprehensive slide-in panel to view and manage task descriptions, priority, due dates, and status.

Filtering: Quickly focus on what matters by filtering tasks by project or viewing only tasks scheduled for "Today".

Persistent Storage: Real-time data synchronization and storage powered by Google Firebase Firestore.

Responsive Design: A fully responsive interface that works flawlessly on desktop, tablets, and mobile devices.

Light & Dark Modes: A beautiful and easy-on-the-eyes theme switcher for any lighting condition.

🤖 AI-Powered by Gemini
Momentum integrates the power of Large Language Models to supercharge your productivity:

AI Smart Add: Describe a high-level goal (e.g., "Launch a new marketing campaign"), and the Gemini API will automatically generate a new project and populate it with a list of actionable to-do items.

AI Sub-task Suggestions: For any given task, the AI can analyze its title and description to suggest the next logical steps, which you can add to your list with a single click.

🚀 Tech Stack
This project is built as a self-contained, single-file application, demonstrating a modern web architecture without the need for complex build steps.

Frontend:

HTML5

Tailwind CSS: For a utility-first, responsive, and modern design.

Vanilla JavaScript (ES6 Modules): For all client-side logic and DOM manipulation.

Backend & Database:

Google Firebase:

Firestore: Real-time, NoSQL database for storing all user data.

Authentication: Secure anonymous or custom token-based user authentication.

AI Integration:

Google Gemini API (gemini-2.5-flash): For all generative AI features.

🔧 Setup and Installation
To get this project running on your own Firebase instance, follow these steps:

Clone the Repository:

git clone [https://github.com/your-username/momentum-app.git](https://github.com/your-username/momentum-app.git)
cd momentum-app

Create a Firebase Project:

Go to the Firebase Console.

Create a new project.

Add a new "Web App" to your project.

Enable Firestore Database and Anonymous Authentication in the Firebase console.

Configure the Application:

Open the index.html file.

Find the <script type="module"> section.

Inside the script, locate the firebaseConfig object placeholder. Replace it with the configuration object provided by Firebase when you created your web app.

(Optional) This app is designed to work with environment variables (__app_id, __firebase_config, __initial_auth_token) injected at runtime. If you are not using such an environment, you must hardcode your firebaseConfig.

Run the Application:

Simply open the index.html file in your favorite web browser. You can use a simple live server extension in your code editor for the best experience.

This will connect the application to your personal Firebase backend, and you can start managing your tasks immediately.
