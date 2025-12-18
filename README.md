# Home tutorly

<img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1728009108/Screenshot_2024-10-04_at_03.31.02_uutgaj.png" title="Image" alt="image">

Home tutorly is a React-based web application that allows users to search and filter tutors based on various criteria. It provides an intuitive interface for users to find the best tutors that match their needs.

## Demo Link

Access the live site at [Project-Link](https://home-tutorly.netlify.app/)

## Features

- **Search Functionality**: Quickly search for tutors by name.
- **Filter Options**: Filter tutors based on criteria such as years of experience, subject expertise, verification, gendr and ratings.
- **Responsive Design**: Built with Tailwind CSS to ensure a seamless experience across all devices.
- **State Management**: Utilizes React Context for efficient state management.
- **Type Safety**: Developed using TypeScript for enhanced code reliability.
- **End-to-End Testing**: Comprehensive tests written using Cypress to ensure application reliability.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.16.0 or higher
- **npm**: Version 9.5.1 or higher

## Technologies Used

- **React.js**: For building the user interface
- **Tailwind CSS**: For styling
- **React Context**: For state management
- **Typescript**: For type safety
- **JavaScript**: Core programming language

## Installation

To install and run Home tutorly locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ChuksJoshuaa/Home-Tutorly.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Web
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

## Configuration

No additional configuration is required to run the project.

## Folder Structure

```plaintext
├── components/ # Reusable React components
├── pages/ # Main application pages
├── contexts/ # Context API providers
├── reducers/ # React reducers and functionality
├── utils/ # Utility functions and helpers
├── cypress/ # End-to-end tests using Cypress

```

## Usage

To start the application and begin using Home tutorly, follow these steps:

1. **Start the application**:
   ```bash
   npm run dev
   ```
2. **Open your web browser** and navigate to ``http://localhost:5173`.
3. **Use the search and filter features** to find tutors that match your criteria.

## Running Tests

To run the Cypress end-to-end tests, use the following command:

```bash
npm run open:cypress
```

## Contributing

Contributions are welcome! To contribute to Home tutorly, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit them**:
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Submit a pull request**.
