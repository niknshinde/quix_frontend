Here are step-by-step instructions to help users set up and run the Quix frontend on their local machine:

please first clone the backend code of quix and run it then clone this . backend code link(https://github.com/niknshinde/quix_backend.git)

1. **Clone the Git Repository:**
   - Open your terminal.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command:
     ```bash
     git clone https://github.com/niknshinde/quix_frontend.git
     ```

2. **Open in VS Code:**
   - Navigate into the cloned directory using:
     ```bash
     cd quix_frontend
     ```
   - Open the project in Visual Studio Code:
     ```bash
     code .
     ```

3. **Install NPM Packages:**
   - In the terminal, run the following command to install the necessary dependencies:
     ```bash
     npm i
     ```

4. **Set Backend URL:**
   - Open the `src/BackendState.js` file.
   - Locate the following line:
     ```javascript
     const host = 'http://localhost:4000';
     ```
   - Replace `'http://localhost:4000'` with the URL where your Quix backend server is running.
     - Ensure that you don't include a trailing "/" at the end of the URL.

5. **Save Changes:**
   - Save the `BackendState.js` file.

6. **Start React Application:**
   - In the terminal, run the following command to start the React application:
     ```bash
     npm start
     ```
   - This will launch the application, and you should be able to access it in your web browser at `http://localhost:3000` by default.

By following these steps, users should be able to set up and run the Quix frontend on their local machine. Make sure to start the backend server first before running the frontend application. If you encounter any issues or have further questions, feel free to ask!
