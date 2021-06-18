A simple task manager app using RESTful APIs to show CRUD (Create/Read/Update/Delete) operations in a simple,elegant and meaningful way.

The app is using Node.js and Express.js as the backend and custom HTML and CSS written from scratch for the frontend.

For trying it out on your systems you need a MongoDB Atlas account. Create it here :- [MongoDB Atlas](https://www.google.com/aclk?sa=l&ai=DChcSEwjezdeV4qHxAhVPt5YKHVikCCIYABAAGgJ0bA&ae=2&sig=AOD64_1D_LZ3MnXC7Vj594rYqFyB7sfNKA&q&nis=1&adurl&ved=2ahUKEwimg9CV4qHxAhVS4nMBHf1qCn0Q0Qx6BAgCEAE)

If you are here I suppose you know the basics of connecting to a database.

Create a .env file in the root directory of the project. Create a variable named "MONGO_URI=" inside it and paste your MongoDB Atlas connection string after the "=" sign.

Then run npm/yarn start. The server will start at port 5000. Go to localhost:5000 to see the frontend part of the app.

To perform CRUD operations manually download Postman from here :- [Postman](https://www.postman.com/downloads).

To send data to the server you can use a raw JSON format. It will look like this:- {"name":"your task","completed":true/false}

You need to always provide a task name because it is mandatory, "completed" is false by default but you can change it by sending {"completed":true} with the POST or PATCH method.

Use the API routes given below.

The API routes are as follows:-

    For localhost:5000/api/v1/tasks
      1.GET - Returns all the available tasks.
      2.POST - Creates a new single task.

    For localhost:5000/api/v1/tasks/:taskId
      1.GET - Returns a single task based on the taskId passed in the URL.
      2.PATCH - Updates a single task based on the taskId passed in the URL.
      3.DELETE - Deletes a single task based on the taskId passed in the URL.
