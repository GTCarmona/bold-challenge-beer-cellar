### Bold challenge - Beer Cellar

Full MERN stack developed between 4~5 hours

Setup: I used a boilerplate used during my time in IronHack bootcamp as a student, same used in my last project. I chosed to do mainly because of the timeframe, as this offers me the basic setup for MongoDB and the authentication process with Passport.

Link to deployed version: https://challenge-my-beer-cellar.herokuapp.com/

Technologies used in this challenge:
-JavaScript / -React (Hooks) / Node.js / MongoDB / Express.js / HTML / SCSS / React Bootstrap

Features able to implement within the time period

- View of list of all beers
- Detailed view of specified beer
- View with form to add a new bottle
- Sorting by beer name, and filtering by beer type OR style (not 100%)
- User signup and login, so initialy only the user would see the beers that were added by him, an they are stored in the database.

## My Approach

I wanted to implement some elements with Node.js and databases because I thought it made sense given the context (users creating data). I also wanted to practice this implementation together with React Hooks, which I haven't done before. So I started by creating the back-end routes, and tested them on Postman. From there I moved to the views, with the adding beer form and the beer list. I created a separeted component to render invividual beers, and one view specific for the Beer Detail, to accomplish what was asked. By the end I focused on styling and cleaning the code, and spent some time after the 4 hours limit to make it work on a heroku deployed version, as well as cleaning the code.

Overall I think I achieved it what was asked, but still not what I planned at the start. I lost too much time working on the filter and choose to use React.Boostrap over Reactstrap, which I also have less experience with but wanted to try it out.

With more time I would:

- I did not prioritize the style at all, so I would definitely work on it.
- Add comments and ratings
- Image upload for beers and user
- Make it possible for other users to comment and rate each others beers

Reference: https://www.thebeerstore.ca/
