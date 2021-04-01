# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install and Run
1. run npm install to install dependencies
2. npm start to run the application at localhost:3000

### PROJECT DETIALS

This is a e-commerce web application made with react and redux. This app has all the basic functionality that should
be supported by e-commerce websites.

Note: .env.local file is included as it contains the API Key for the firebase


1. Authentication:

Firebase is used for authenticating user. Here user can create their account/Signup of Login if they have
existing account. Email and Password is used for login and signup functionality.

2. Styling Frameworks:

React-bootstrap + bootstrap is used for adding some default styling

3. State Management

Redux, React-Redux, Redux-thunk have been used to manage the global state for this e-commerce websites.
However redux is implemented using react-redux hooks instead of connect, mapState and mapDispatch methods.
Instead useSelector and useDispatch hase been used from redux to achieve the same redux functionality, due
to the fact that functional component is used instead of class components.

4. Routing:

React-Router-Dom is used for routing between the components, howewer routes are not protected as it was not
mentioned in the functionality.

5. Basic Workflow:
    1. Home Page will be loaded 
    2. User can add product in cart
    3. In Summary section total price will be updated as product is added in the cart
    4. Cart items will also be updated
    5. From cart section user can checkout
    6. After checkout success message will be displayed and after 1 sec user will be
       redirected to the home page and cart items will be cleared
    7. If user is not logged in then they cannot checkout and have to login or signup(if new user) first
    8. USer will be redirected automatically to login page if tries to checkout without logging in
 

