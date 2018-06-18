# ChatApp
Simple chat app for connecting users together

#tools
framwork angular 5 
nodejs
materlize css for design
mongoose for database
and another packages listed at package.json files

##Features
1- can get contacts of current user
2- start chat with one contact
3- get chat history of current chat

we should use token to get current user data and use login and logout functionality 
but now we will use static data to test it easily:

1- open mongobooster interface or operting system terminal and insert to Chatapp database users:
/*-----------------------------------------------------------------*/
db.users.insert([
{
	"updatedAt" : ISODate("2018-06-19T13:27:17.656+02:00"),
	"createdAt" : ISODate("2018-06-19T13:27:17.656+02:00"),
	"name" : "user1user",
	"email" : "user1@user.com",
	"active" : true,
	"contacts" : [
		//write here ids of rest users that he can connect like: ObjectId("5b1f7aa507eaef167c51ac95"),
		
	]
},

{
	"updatedAt" : ISODate("2018-06-19T13:28:17.656+02:00"),
	"createdAt" : ISODate("2018-06-19T13:28:17.656+02:00"),
	"name" : "user2user",
	"email" : "user2@user.com",
	"active" : true,
	"contacts" : [
	//write here id of first user
	]
},

{
	"updatedAt" : ISODate("2018-06-19T13:28:17.656+02:00"),
	"createdAt" : ISODate("2018-06-19T13:28:17.656+02:00"),
	"name" : "user3user",
	"email" : "user3@user.com",
	"active" : true,
	"contacts" : [
	//write here id of first user
	]
},

{
	"updatedAt" : ISODate("2018-06-19T13:28:17.656+02:00"),
	"createdAt" : ISODate("2018-06-19T13:28:17.656+02:00"),
	"name" : "user4user",
	"email" : "user4@user.com",
	"active" : true,
	"contacts" : [
	//write here id of first user
	]
}
])
2- after inserting data take the first user Id and paste it at line 34
src/app/component/app.component.ts
3-then add this user id at api, beacause we should send token from front end
to the api to resolve id issue
at line 9 and 46 of api api/controllers/chatAppController.js

then it will workes well
/*-----------------------------------------------------------------*/


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.



