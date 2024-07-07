# Zesty - Online Food Ordering Website
The Zesty online food ordering website is a comprehensive platform built using the MERN stack (MongoDB, Express, React, Node.js) that offers users a seamless experience for browsing, selecting, and ordering food items. Here's a detailed description of its features and technology stack:

## Key Features:
1) User Authentication and Registration:

-> User Registration: New users can create an account by providing their details, which are securely stored in MongoDB.

-> User Login: Existing users can log in using their credentials. Authentication is managed using JSON Web Tokens (JWT), ensuring secure access to user-specific features.

2) Menu Filtering:

-> Filter: Users can click on the items mentioned in the menu and the menu will be filtered according to what they have selected. Each item displays essential details like name, description, price, and image.

3) Ordering and Payment:

-> Order Creation: Users can add selected food items to their cart and proceed to checkout.

-> Stripe Payments: Secure payment processing is handled using Stripe. Users can enter their payment details, and transactions are processed securely.

-> Order Confirmation: Once the payment is successful, the order is confirmed and stored in the database, becoming visible in the user's order history.

4) Order Tracking:

-> Order Status: Users can view the status of their orders in the "Order" section. The status updates in real-time as the order progresses through different stages: Food Processing, Out for Delivery, and Delivered.

5) Admin Panel Integration:

-> Order Management: The admin panel allows administrators to view all orders placed on the website. This includes detailed information about each order, such as the items ordered, customer details, and order status.

-> Status Updates: Administrators can update the status of each order. These updates are immediately reflected in the user's order section on the main website, keeping users informed about the progress of their orders.

6) Responsive Design:

-> Ensure that the website is fully responsive, providing an optimal user experience across various devices, including desktops, tablets, and smartphones.

## Technology Stack

1) Frontend: React

-> React Framework: The frontend is built using React, which provides a dynamic and responsive user interface.

-> State Management: React's state management (using hooks and context API) ensures efficient handling of user data and UI state.

-> React Router: Enables smooth navigation between different sections of the website, such as the menu, cart, and order history.

2) Backend: Node.js and Express

-> Node.js: The backend server is built with Node.js, providing a robust and scalable runtime environment.
-> Express Framework: Express.js is used to create a RESTful API that handles requests from the frontend, such as user authentication, order processing, and status updates.

3) Database: MongoDB

-> MongoDB: A NoSQL database is used to store user information, food items, orders, and other relevant data. Its flexibility and scalability make it ideal for handling dynamic data structures.

-> Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js, Mongoose, is used to define schemas and interact with the database.

4) Authentication: JWT

-> JSON Web Tokens: JWT is used for securing API endpoints. When users log in, a token is generated and sent to the client, which must be included in subsequent requests to access protected routes.

5) Payments: Stripe

-> Stripe API: Stripe is integrated for handling secure payment processing. It ensures that user payment information is handled safely and transactions are processed efficiently.

6) Deployment: Render

Render: The backend of the website is deployed on Render.com, which offers easy deployment, automatic scaling, and continuous integration capabilities for both the frontend and backend.

## Benefits

1) User Experience: The platform provides a seamless and intuitive experience for users, from browsing the menu to making payments and tracking orders.

2) Efficiency: The admin panel ensures efficient management of orders and food items, streamlining operations.

3) Security: Using JWT for authentication and Stripe for payments ensures that user data and transactions are secure.

4) Scalability: The MERN stack ensures that the application can scale with growing user demands and data.