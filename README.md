# Happier Hours 
https://solo-project.herokuapp.com/

Happier Hours is a full stack project that allows users to view happy hours that have been added to the app, as well as the ability to add happy hours that enjoy and want others to be able to see. Users can also add comments about each location to let others know why it is a good place to visit for happy hour.  

## Built With

HTML 5, CSS 3, Bootstrap, JavaScript, AngularJS, Posgres SQL, Express.js,
node.js

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postico](https://eggerapps.at/postico/)
- npm install
### Installing

Steps to get the development environment running.

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE happy (
  id serial primary key,
  "Location" varchar (100) UNIQUE,
  "Day" varchar (20),
  "Time" varchar (20),
  Specials varchar (300),
  approved boolean default false);

 CREATE TABLE comments (
  id serial primary key,
  "comments" varchar (500),
  user_id int REFERENCES users (id),
  location_id int REFERENCES happy (id)
  );
```
<!-- ## Screen Shot -->
### Completed Features

High level list of items completed.

- [x] Search for happy hours by weekday or weekend or all
- [x] Add comments to each location
- [x] Each location has a link out to google directions
- [x] Ability to post a happy hour after admin approval
- [x] Admin approval or rejection of submited happy hours

### Next Steps

- [ ] Ability to use googe places API as opposed to just google directions
- [ ] Expand search ability and allow happy hours be searched by time, not just day

## Authors

* Greg Wallerus


## Acknowledgments

* Scott Bromander and Kris Szafranski for base passport code.
