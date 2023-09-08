# To-Do List Web Application

Welcome to the To-Do List Web Application repository! This simple web app allows you to manage your to-do list with ease.

## Features

### Local Storage Integration

- To-dos are now saved to local storage, ensuring that your tasks persist between page reloads and sessions.
- When you revisit the app, your to-dos will be loaded from local storage automatically.
- Local storage is updated in real-time when you edit, add, or delete tasks, ensuring data integrity.

### Edit Box Styling

- The edit box for to-do items has been enhanced for a more polished user experience:
  - Sharp corners (border-radius: 0).
  - No outline when clicked (outline: none).
  - A 2px black bottom border (border-bottom: 2px solid black).
  - No border on the top, right, and left.

## Files

### `script.js`

The main JavaScript file that powers the To-Do List Web Application. It handles the application's functionality, including adding, editing, and deleting tasks, as well as integrating with local storage.

### `styles.css`

The Cascading Style Sheets (CSS) file responsible for styling the user interface of the web app. It ensures the app looks polished and user-friendly.

### `sw.js`

The Service Worker JavaScript file, `sw.js`, enables Progressive Web App (PWA) capabilities by caching essential files. This allows the web app to work offline or in low-network conditions.

### `manifest.json`

The `manifest.json` file defines the metadata and settings for the web app, including its name, icons, start URL, and display mode. It's essential for PWA functionality.

## Getting Started

To get started with the To-Do List Web Application, simply clone this repository and open the `index.html` file in your web browser. You can then start adding, editing, and managing your to-dos.

## Website

You can access the To-Do List Web Application online at [todowebapp](https://davidgatling.github.io/todowebapp/).

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy using the To-Do List Web Application! We hope it helps you stay organized and productive.
