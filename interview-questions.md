# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: How you would fix this mistake is by adding in another column to your table with the exact name of the column was primary keys in the table you were trying to reference. In the example that I remember we talked about cohort table And then the student table we added a column called cohort ID which was filled with the primary key of the cohort table. The name would be animal ID because Animals inside the animal table can have multiple sightings but the siding table can only have one animal.

  Researched answer: Thanks to the wonderful instruction by Sarah I was able to recall the lecture that we had on active record associations. During that lecture we created the two tables called Cohart and student. Once I was done answering the question above I went back and watched The lecture on YouTube again it was amazing that I retained that much information. I always worry that I'm falling behind because I feel like my brain is mush and then when I'm asked questions in recalling them makes me feel like I am on the right track now all I need to do is be able to do that during an interview/white boarding session.



2. Which RESTful API routes must always be passed params? Why?

  Your answer: They "get" route must always be passed by params Because it is the read attribute in CRUD.

  Researched answer: once again I was able to recall the answer because of the wonderful instruction by you and Sarah. Params is a useful tool that helps us when moving around and recalling that our routes within our database. It took me a while staring at her diagram of the crude HTTP verbs and route to actually understand what the heck was happening but I think I got a good grasp on it.



3. Name three rails generator commands. What is created by each?

  Your answer: I don't know of three commands I'm only familiar with one command and that is rails g model And what this does Is it creates a model which is a type of a database that refers to a relational model.

  Researched answer: As they go over all different kinds of commands for rails that will generate a model adding a column to that model and scaffold or scaffolding. They're all really important is it helps you navigate and manipulate data especially scaffolding that helps you without sending too many requests to the API that you are working with.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? 
The name of the controller method is students.

1. method="GET"    /students 
 This method would show all students within the table         

2. method="POST"   /students 
 This method is used to create a new student in the table

3. method="GET"    /students/new
This is used to get that new students name and only the new students name

4. method="GET"    /students/2  
In every Able they are assigned a special value by rails so this method calls the student with the idea of number two

5. method="GET"    /students/edit/2   
This one here will pull up the student Number two and makes it available to be edited

6. method="PATCH"  /students/2   
This one is to update the student within the table   

7. method="DELETE" /students/2  
This method can speak for itself it will delete student With the ID number of two    



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can see all the paint colors listed on the home page of the application.
As a user, I can click on the paint colors and be routed to a page where I see the name of the color and medium in which they sell this coloring and other information..
As a user, I can navigate from one page back to another page.
As a user, I see a form where I can order paints .
As a user, I can click a button that put the paints that I just ordered from the form into a shopping cart.
As a user, I can navigate from the form back to the shopping page.
As a user, I can click a button that will submit my shopping cart.
As a user, a Button appears asking me do I want to continue shopping or go back to the homepage.
As a user, I can now see a track my order page link.
As a user, I can see a tracking number all the items that I bought.
As a user, I can see a link that will take me back to the homepage.
