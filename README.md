# Project Name: Bicycle Builder

## Project Description:

Bicycle Builder is a manufacturer website. This website has firebase authentication system. Private route, nested route. This website also has payment integration system. user can order a quantity of product. if user not paid for the product user can cancel this product. user can payment for the product. if user pay any order product user can not cancel paid product. user can update profile from my profile page. This website also has admin route only admin can access this particular route. Admin can add product. Admin can cancel any user order which is not paid yet. Admin can delete any product.

## Live Project: [https://bicycle-builder.web.app/](https://bicycle-builder.web.app/).

## Project features and functionality:

- The website has several route some of route like (Home, Dashboard, Login, My orders, Blogs, Mange orders, Add product and My Profile).
- By Default Dashboard route will be hidden. When user login or sign up user can see dashboard.
- when a user logs in or signs up the server will create a jwt token that will be saved in the browser's local storage. after that, if the user navigates the "my-orders" route then a request with jwt token will be sent to the server to verify the user.
- If a user logs in or signs up user can see the dashboard menu "My profile", "My orders", and "Add review".
- This Website has admin functionality. When an admin logs in or signs up admin will not see the user routes like "My Orders", and "Add Review". an admin will see "manage orders", "Add product", "Manage Product" and "all user".
- Admin can make admin to any user.
- Admin can cancel any unpaid order also delete any product or add any product.

## The technology used in the project is mentioned below:

- React
- React Router
- React firebase hooks
- Firebase
- Tailwind CSS
- Daisyui tailwind component library
- React Icons
- React toastify
- json web token
- express
- mongodb
