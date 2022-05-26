# Project Name: Bicycle Builder

## Project Description: 
Bicycle Builder is a manufacturer website. This website has firebase authentication system. Private route, nested route. This website also has payment integration system. user can order a quantity of product. if user not paid for the product user can cancel this product. user can payment for the product. if user pay any order product user can not cancel paid product. user can update profile from my profile page. This website also has admin route only admin can access this particular route. Admin can add product. Admin can cancel any user order which is not paid yet. Admin can delete any product.

## Live Project: [https://bicycle-builder.web.app/](https://bicycle-builder.web.app/).

## Project features and functionality:

* The website has several route some of route like (Home, Dashboard, Login, My orders, Blogs, Mange orders, Add product and My Profile).
* Default Dashboard route will hide. When user login or sign up user can see dashboard.
* If a user login or sign up server will create a jwt token and set up user browser's local storage after that when user login and go to my-orders route verify the user in server with jwt token.
* If a user login or sign up user can see dashboard menu My profile, My orders and Add review.
* This Website has admin functionality. When an admin login or sign up admin will not see user route except my profile admin will see manage orders, Add product, Manage Product and all user.
* Admin can make admin any user.
* Admin also delete any product or add any product.

## The technology used in the project is mentioned below:

* React
* React Router
* React firebase hooks
* Firebase
* Tailwind CSS
* Daisyui tailwind component library
* React Icons
* React toastify
* json web token
* express
* mongodb