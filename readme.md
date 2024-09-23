# FoodX - Order your food online now!

I have created a Food Ordering Application utilizing the following technologies:
1. React Js.
2. CSS.
3. MongoDB Atlas.
4. Express and Node.

   **Features of the Project**
   - Added Dark Mode Toggle Button.
   - Added a Chatbot using Tawk.io API.
   - Added Strong Authentication and encryption system using Bcrypt.
   - Added Category Sort.
   - User can order and track his order.
   - Signin Login and Password validation done.
   - Added Cart and Payout logic.

<b>Created APP Youtube Video Link:</b> https://youtu.be/JBzFgBJ-SZE (For more Clarity)


<h2>Flow of the Project:</h2>

- Once User visits the website, he can either Login or create an account.
- Both the Login and Sign up validations are done.
- Once the user is done with Log In, he can add products to the cart and the cart total will be displayed.
- The Total  will be inclusive of deliver fee mentioned clearly.
- Now since No Payment gateways were functional for developers and testing, i couldnt embed any Payment Gateway.
- Once the user clicks on proceed to checkout, He will need to add his delivery address and then only he will be able to proceed to place his order.
- Once order is placed, the payment verification logic will be skipped and the useer will be redirected to a order success screen where he can either go back to the menu page or My orders Page.
- The user can view the details of the order in My orders Page and if he clicks on track order, he will get the latest status of the order fetched from the database.
- User can click on categories to view products similar to the categories added.

- Admin will have three options:
- He can Add Products, List and remove the products if not in stock.
- View order details and Update the status of the order.

<h3>How to use the project</h3>

- There are three Modules:
  1. FoodX (Frontend).
  2. Backend.
  3. Admin.

- once you clone the project, you need to open terminals for all the three directories.
- install the dependencies "npm install Bcrypt, axios, mongoose.
- Run "npm run dev" for FoodX and admin.
- Run "npm run server" to run the backend.
- Once server starts running, add your own database link in the config.js file. Use Mongoose to add it as done in the code.
- After following all the process you are good to go to run this project!
- For any queries feel free to contact me.

**Modules:**
- Signup.
- Login.
- Validation of empty fields and values.
- Same user cannot register twice.
- Dark Mode and Light Mode as per the users device preference.
- Remember me. (Password and email stored in the users local storage).
- User Friendly user interface.
- Added a chatbot for customer support.

**To be Completed in the coming days:**
- Promocode logic during checkout.
- Admin Dashboard with visualizations and detailed edit access.
- Enhance the User Interface and add more sorting features.
- Using Webhooks.
- Complete Testing and fixing of bugs.


Building this App has made me face a lot of challenges and learn a lot of new things, this challenge has motivated me and has given me a boost to start with new projects in the 
coming days. This project challenge has taught me the power of consistency and it has developed my knowledge and problem solving skills. I have built this project from scratch and building this was not less than participating in a Hackathon.

For any Suggestions or any assistance, Please feel free to contact me on mailto:kennethrebello253@gmail.com or +91 8317390275

