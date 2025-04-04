# 📝 Blogging Site

Welcome to the **Blogging Site** repository! This is a full-featured web application that allows users to create, manage, and share blog posts. It includes user authentication, post management, and a responsive, clean UI for a smooth reading and writing experience.

## ✨ Features

- 🔐 **User Authentication**: Sign up, log in, and log out securely using Appwrite.
- ✍️ **Blog Management**: Create, edit, and delete blog posts with ease.
- 📰 **Post Viewing**: View all posts or dive into individual blog entries.
- 📱 **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|------------------------------------|
| Frontend    | React.js, JavaScript, Tailwind CSS |
| Backend     | JavaScript, Appwrite               |
| Database    | Appwrite Database                  |
| Auth        | Appwrite Authentication            |
| Versioning  | Git & GitHub                       |


## 🧑‍💻 Getting Started

Follow these steps to set up the project locally:

### ✅ Prerequisites

- Node.js and npm installed
- [React.js]
- [Appwrite]

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/deepaksingh2002/blogging_site.git
cd blogging_site

# Install dependencies
npm install

# Start the development server
npm run dev
```

Make sure to configure your Appwrite project settings (API endpoint, project ID, database collections, etc.) in an `.env` file.

## 🔐 Appwrite Setup

1. Create a new project in your Appwrite instance.
2. Enable authentication and set up email/password provider.
3. Create a collection for blog posts with relevant fields (e.g., title, content, user ID, timestamps).
4. Update your project `.env` with Appwrite credentials.

## 🙌 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to improve this project.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

