// Question Number 02
// let person_Name = "ziyan kaim khani";
// console.log ("Assalam-o-Alikum, ",person_Name," learn the Python today!");

// Question Number 03
// var person_Name = "ziyan kk";
// console.log(person_Name.toLowerCase());
// console.log(person_Name.toUpperCase());
// console.log(person_Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

// Question Number 04
// var quote = "Hello Kamran Khan Tessori";
// console.log("Governor Sindh, ", "\"", quote, "\"");
// console.log("Hello,\"A man is known by the company he keeps\"");

//  Question Number 06
// let person_Name = "\tziyan \nkhan";
// //print name with whitespaces
// console.log(person_Name);
// //print name without whitespaces
// let stripped_Name : string = person_Name.trim();
// console.log(stripped_Name);

//  Question Number 07 and 08
// let num = [2,4,16];
// console.log(num[1]+num[1],"adding",num[1],num[1]);
// console.log(num[1]*num[0],"multiplying",num[1],num[0]);
// console.log(num[2]/num[0],"dividing",num[2],num[0]);
// console.log(num[2]-num[1]-num[1],"subtracting",num[2],num[1],num[1]);


//  Question Number 09
// let myNumber = 7;
// console.log ("My favorite number is ",myNumber);

//  Question Number 11
// let friendName = ["ziyan","Ahmad","talha","ali"];
// console.log (friendName[0]);
// console.log (friendName[1]);
// console.log (friendName[2]);
// console.log (friendName[3]);

//  Question Number 12
// let friendName =  ["uzair","affan","zain","ziyan"];
// console.log("Good evening! ",friendName[0]);
// console.log("Good day young lad! ", friendName[1]);
// console.log("Good evening boy! ",friendName[2]);
// console.log("Good evening young-gun! ",friendName[3]);


//  Question Number 13
// let favoriteMotors = ['Revo Dala','toyota car','boeing jet','honda hybrid'];
// favoriteMotors.forEach(choice => {
// console.log("I like to have",choice)});


//  Question Number 14
// let guestList = ['Ammi','Abbu','ziyan Bhai','shayan bhai','rehan Bhai'];
// guestList.forEach(guestNumber => {
//     console.log('You are invited to family dinner',guestNumber)
// });

//  Question Number 15
// let guestList =  ['Ammi','Abbu','ziyan Bhai','shayan bhai','rehan Bhai'];
// let greeting = ['you are invited for dinner','its dinner time!!','amazing dinner awaits you', 'you and your family are invited','lets get some fine dinner'];
// let guestNotComing = 3;
// console.log(guestList[guestNotComing]," We are going to miss you!\n\n");
// guestList[guestNotComing] = 'Ayesha';
// for (let counter = 0; counter < guestList.length; counter++){
//     console.log(greeting[counter], guestList[counter]);  
// }

//  Question Number 16
// var guestList = ['Ammi','Abbu','ziyan Bhai','shayan bhai','rehan Bhai'];
// //var greeting = ['you are invited for dinner', 'its dinner time!!', 'amazing dinner awaits you', 'you and your family are invited', 'lets get some fine dinner'];
// //var guestNotComing = 3;
// //console.log(guestList[guestNotComing], " We are going to miss you!\n\n");
// //guestList[guestNotComing] = 'Ahmed';
// console.log ("Hurry! we have found a bigger table")
// guestList.unshift('shayan bhai');
// guestList.splice(0,1,'rehan');
// guestList.push('Mama');
// for (var counter = 0; counter < guestList.length; counter++) {
//     console.log(guestList[counter],', you are invited for the dinner party');
//     //console.log(guestList[counter]);
// }

//  Question Number 17
//Apologizing guests, sending the message for not invited and removing them
// console.log ("\n \nwe can invite only two people due to dinner table space unavailability");
// for (counter = 0;counter < guestList.length-2;counter++){
//     console.log(guestList[counter],', we are extremely sorry we cannot invite you');
//     }
// guestList.splice(0,counter);
// //confirming all invities are removed from the list
// console.log(guestList);

// counter = 0;

// //sending final invitation to remaining guests
// while(counter!= guestList.length){
//     console.log(guestList[counter],', you are invited');
//     counter++;
// }

// //Clearing the array of guestList
// guestList.splice(0,counter);
// console.log(guestList);


//  Question Number 18
// let myLocations = ['karachi','islamabad','sindh','jhudo','Tando'];
// //showing the original order of location array
// console.log('Original order',myLocations);
// console.log('Alphabetically sorted locations ',[...myLocations].sort());
// console.log('Original order',myLocations);
// console.log('Alphabetically reversed order',[...myLocations].sort().reverse());
// console.log('Original order',myLocations);
// console.log('Reverse order',[...myLocations].reverse());
// console.log('Reverse-reverse order',[...myLocations].reverse().reverse());
// console.log('Sorting locations',myLocations.sort());
// console.log('Sorted alphabetically',myLocations.sort((a,b) => b.localeCompare(a)));


//  Question Number 19
// var guestList = ['Ammi','Abbu','ziyan Bhai','shayan bhai','rehan bhai'];
// guestList.forEach(function (guestNumber) {
//     console.log('You are invited to family dinner', guestNumber);
// });
// //Exercise 19 - Dinner guests
// console.log('Total guests coming to dinner are ',guestList.length);


// //  Question Number 20
// let country = ['Pakistan','saudia','Dubai','Us','Uk'];
// console.log(country);


//  Question Number 21
// type myCountryObject = {
//     name: string;
//     rivers: number;
//     capital: string;
//     population: string;
//     };
// //creating objects from myCountryObject
// const pak: myCountryObject = {
//     name : 'Pakistan',
//     rivers : 5,
//     capital : 'Islamabad',
//     population : '225m'
// };
// const chn: myCountryObject = {
//     name : 'China',
//     rivers : 5,
//     capital : 'Beijing',
//     population : '1.45b'
// };
// const ind: myCountryObject = {
//     name : 'India',
//     rivers : 7,
//     capital : 'New Dehli',
//     population : '1.4b'
// };
// const rus: myCountryObject = {
//     name : 'Russia',
//     rivers : 100,
//     capital : 'Moscow',
//     population : '145m'
// };
// const germ: myCountryObject = {
//     name : 'Germany',
//     rivers : 4,
//     capital : 'Berlin',
//     population : '83m'
// };

// //printing the objects
// console.log (pak);
// console.log (ind);
// console.log (germ);
// console.log (rus);
// console.log (chn);


//  Question Number 22
// let dummy = [1,2,3,4,5];
// //putting index to 10, is an intentional error generating query
// console.log (dummy[10]);


//  Question Number 23 and 24
// let myCar = 'honda';
// //Test 1: Is myCar == 'honda'? Prediction: True
// console.log("Is myCar == 'honda'? I predict True.");
// console.log(myCar == 'honda');
// // Test 2: Is myCar == 'toyota'? Prediction: False
// console.log("Is myCar == 'toyota'? I predict False.");
// console.log(myCar == 'toyota');
// // Test 3: Is myCar != 'toyota'? Prediction: True
// console.log("Is myCar != 'toyota'? I predict True");
// console.log(myCar!='toyota');
// //Test 4: Is myCar !== 'Honda'? Prediction: True
// console.log("Is myCar !== 'Honda'? I predict True");
// console.log(myCar !== 'Honda');
// //Test 5: Is myCar.length < 0? Prediction: False
// console.log("Is myCar.length < 0? I predict False");
// console.log(myCar.length < 0);
// // Test 6: Is myCar === 'honda' Prediction: True
// console.log("Is myCar === 'honda? I predict True.");
// console.log(myCar === 'honda');
// // Test 7: Is myCar > 'toyota'>? Prediction: False
// console.log("Is myCar > 'toyota'? I predict False.");
// console.log(myCar > 'toyota');
// // Test 8: Is myCar.length > 'toyota'.length? Prediction: False
// console.log("Is myCar.length > 'toyota'.length? I predict False.");
// console.log(myCar.length > 'toyota'.length);
// // Test 9: Is myCar.toUpperCase() == 'HONDA'? Prediction: True
// console.log("Is myCar.toUpperCase() == 'HONDA'? I predict True.");
// console.log(myCar.toUpperCase() == 'HONDA');
// // Test 10: Is myCar.length < 5? Prediction: False
// console.log("Is myCar.length < 5? I predict False.");
// console.log(myCar.length < 5);


//  Question Number 25
// let alien_color = 'blue';

// if(alien_color === 'blue') {
//     console.log ('The player just earned 5 points');
// }
// if(alien_color === 'red'){
//     console.log ('The player just died. Game over!');
// }


//  Question Number 26
// let alien_color = 'green';
// if(alien_color === 'green') {
//     console.log("The player earned 5 points.");
// }
// else {
//     console.log("The player got 10 points.");
// }

// //block 2 - executing else condition
// alien_color = 'red';
// if(alien_color === 'green') {
//     console.log("The player earned 5 points.");
// }
// else {
//     console.log("The player got 10 points.");
// }


//  Question Number 27
// let alienColor = 'green';
// if (alienColor === 'green'){
//     console.log ('you have earned 5 points');
// }
// else if (alienColor === 'red'){
//     console.log ('you have earned 10 points');
// }
// else if (alienColor === 'yellow'){
//     console.log ('you have earned 15 points');
// }
// else {
//     console.log ('unknown color of alien');
// }

// //for red color if condition
// alienColor = 'red';
// if (alienColor === 'green'){
//     console.log ('you have earned 5 points');
// }
// else if (alienColor === 'red'){
//     console.log ('you have earned 10 points');
// }
// else if (alienColor === 'yellow'){
//     console.log ('you have earned 15 points');
// }
// else {
//     console.log ('unknown color of alien');
// }

// //for yellow color if condition
// alienColor = 'yellow';
// if (alienColor === 'green'){
//     console.log ('you have earned 5 points');
// }
// else if (alienColor === 'red'){
//     console.log ('you have earned 10 points');
// }
// else if (alienColor === 'yellow'){
//     console.log ('you have earned 15 points');
// }
// else {
//     console.log ('unknown color of alien');
// }

// //for unknown color else condition
// alienColor = 'white';
// if (alienColor === 'green'){
//     console.log ('you have earned 5 points');
// }
// else if (alienColor === 'red'){
//     console.log ('you have earned 10 points');
// }
// else if (alienColor === 'yellow'){
//     console.log ('you have earned 15 points');
// }
// else {
//     console.log ('unknown color of alien');
// }


//  Question Number 28
// let personAge = 42;
// if (personAge < 2){
//     console.log('person is a baby');
// }
// else if (personAge >= 2 && personAge < 4){
//     console.log('person is toddler');
// }
// else if (personAge >= 4 && personAge < 13){
//     console.log('person is kid');
// }
// else if (personAge >= 13 && personAge < 20){
//     console.log('person is teenager');
// }
// else if (personAge >= 20 && personAge < 65){
//     console.log('person is adult');
// }
// else if (personAge >= 65){
//     console.log('person is an elder');
// }
// else {
//     console.log('invalid age');
// }


//  Question Number 29
// var favoriteFruits = ['apple', 'banana', 'grapes', 'berries', 'melons'];
// if (favoriteFruits.indexOf('apple') !== -1) {
//     console.log('you really like apple');
// }
// if (favoriteFruits.indexOf('banana') !== -1) {
//     console.log('you really like banana');
// }
// if (favoriteFruits.indexOf('grape') !== -1) {
//     console.log('you really like grape');
// }
// if (favoriteFruits.indexOf('berries') !== -1) {
//     console.log('you really like berries');
// }
// if (favoriteFruits.indexOf('melons') !== -1) {
//     console.log('you really like melons');
// }


//  Question Number 30
//Exercise 30 - Hello admin
// let userLoginID = ['admin','ziyan', 'ali','hannan','sad','danish'];
// for(let userLogin of userLoginID){
//     if(userLogin ==='admin'){
//         console.log ('Hello admin, would you like to see a status report?');
//     }
//     else{
//         console.log ('Hello',userLogin, 'thank you for logging in again.');
//     }
// }


//  Question Number 31
//Exercise 31 - No user, an extension to Exercise 30
//Exercise 30 - Hello admin
// var userLoginID =['admin','ziyan', 'ali','hannan','sad','danish'];
// for (var _i = 0, userLoginID_1 = userLoginID; _i < userLoginID_1.length; _i++) {
//     var userLogin = userLoginID_1[_i];
//     if (userLogin === 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//     }
//     else {
//         console.log('Hello', userLogin, 'thank you for logging in again.');
//     }
// }
// //Exercise 31 continues from here
// if (userLogin.length === 0){
//     console.log('we need more users');
// }


//  Question Number 32
//Exercise 32 - Checking users
// let currentUsers = ['ziyan','ali','Ahmed','Danish','hannan'];
// let newUsers = ['ahMAd','Saad','zAid','maliHa','rehaN'];
// //converting both currentUsers and newUsers to Lowercase
// let newUserLowercase = newUsers.map(nUser=>nUser.toLowerCase());
// let currentUsersLowercase = currentUsers.map(cUser=>cUser.toLowerCase());
// console.log (newUserLowercase);
// console.log (currentUsersLowercase);

// //comparing both arrays to check the validity
// for(let counter of newUserLowercase){
//     if(currentUsersLowercase.indexOf(counter)!== -1){
//         console.log('Sorry!',counter,'is already taken.');
//     }
// else{
//     console.log('Congratulations! your',counter,'is available');
// }
// }


//  Question Number 33
//Exercise 33 - Ordinal numbers
// let ordinalNum = [1,2,3,4,5,6,7,8,9];
// for(let counter =0; counter<=ordinalNum.length;counter++){
//     if (ordinalNum[counter] === 1){
//         console.log(ordinalNum[counter],'st');
//     }
//     if (ordinalNum[counter] === 2){
//         console.log(ordinalNum[counter],'nd');
//     }
//     if (ordinalNum[counter] === 3){
//         console.log(ordinalNum[counter],'rd');
//     }
//     if (ordinalNum[counter]>3){
//         console.log(ordinalNum[counter],'th');
//     }
// }


//  Question Number 34
//Exercise 34 - Pizzas
// let myPizza = ['mayo','supre','khan','fatija'];
// //printing the name of pizza
// for(let pizza of myPizza){
//     console.log(pizza);
// }
// //printing pizza name with sentence
// for(let pizza of myPizza){
//     console.log('I love',pizza,'pizza');
// }
// //printing final statement
// console.log ('I love pizza soooo much!!');


//  Question Number 35
//Exercise 35 - Animals
// let myAnimals = ['cat','dog','parrot'];
// //listing the names of the pets
// for(let animal of myAnimals){
//     console.log(animal);
// }
// //printing a statement with names of pets
// for(let animal of myAnimals){
//     console.log(animal,'is a good pet');
// }
// //at the end statement
// console.log('Any of these animals would make a great pet');


//  Question Number 36
//Exercise 36 - Tshirts
//Constructing the function
// function myTshirt(size:string,message:string){
//     console.log('The size of the tshirt is',size,'\nThe message to be printed',message);
// }
// //Calling the function
// myTshirt('21','ziyan');


//  Question Number 37
//Exercise 37 - Large Tshirts
//Creating a function
// function myTshirt(size:string='Large',message:string ='I love Typescript'){
//     console.log('The size of the Tshirt is',size,'\nMessage that will be printed on the Tshirt is',message);
// }
// //calling function in general
// myTshirt();
// //calling function with one argument
// myTshirt('medium');
// //calling function with both arguments
// myTshirt('medium-large','ziyan');


//  Question Number 38
//Exercise 38 - Cities
//creating function of describe_city()
// function describe_city(city:string='Karachi',country:string='Pakistan'){
//     console.log(city,'is in',country);
//     }
//     //calling function with default values
//     describe_city();
//     //calling function with one argument
//     describe_city('Lahore');
//     describe_city('Islamabad');
//     describe_city('Naran');
    

//  Question Number 39
//constructing function city_country()
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
// // Call the function with at least three city-country pairs
// console.log(city_country('Karachi', 'Pakistan')); 
// console.log(city_country('Dhaka', 'Bangladesh'));
// console.log(city_country('Beijing', 'China')); 
  


//  Question Number 40
//Exercise 39 - City names
//constructing function city_country()
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
//   }
// // Call the function with at least three city-country pairs
// console.log(city_country('Karachi', 'Pakistan')); 
// console.log(city_country('Dhaka', 'Bangladesh'));
// console.log(city_country('Beijing', 'China')); 
  

//  Question Number 41
//Exercise 41 - Magicians
//creating function with array
// function showMagicians(magicians:string[]){
//     console.log('The Magicians are...');
//     //for every element of the magician array
//     for(let magician of magicians){
//         //printing the name of each magician
//         console.log(magician);
//     }
// }
// //creating new string array
// let myMagicians = ['Me','You','Them','Who'];
// //passing the created string array in function showMagician
// showMagicians(myMagicians);



//  Question Number 43
//Exercise 43 - Unchanged magicians - continuing with Exercise 41 code
// Define the make_great function
// function make_great(magicians: string[]): string[] {
//     let greatMagicians: string[] = [];

//     for (let magician of magicians) {
//         greatMagicians.push(magician + " the Great");
//     }

//     return greatMagicians;
// }

// // Define the show_magicians function
// function show_magicians(magicians: string[]): void {
//     console.log("Magicians:");
//     for (let magician of magicians) {
//         console.log(magician);
// // Array of magician's names
// let magicians: string[] = ["Me", "You", "They", "Them"];

// // Create a copy of the original array
// let originalMagicians: string[] = [...magicians];

// // Call the make_great function with the copy of the array
// let greatMagicians: string[] = make_great([...magicians]);

// // Call the show_magicians function with the original array
// console.log("Original Magicians:");
// show_magicians(originalMagicians);

// // Call the show_magicians function with the array containing "the Great" added to each magician's name
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);
//     }
// }


//  Question Number 44
//Exercise 44 - Sandwiches
// function sandwiches (...items:string []){
//     console.log('\nSummary of order');
//     if(items.length === 0){
//         console.log('**No order placed**');
//     }
//     else{
//         console.log('items ordered');
//         for(let item of items){
//             console.log('*',item);
//         }
//     }
// }
// //Calling the function
// sandwiches('fajita');
// sandwiches();
// sandwiches('Burger','fries','Zinger');


//  Question Number 45
// Exercise 45 - Cars
// Define the CarInfo function
// type CarInfo = {manufacturer: string; model: string; [key: string]: string | number;};

// function createCar(manufacturer: string, model: string, ...options: [string, string | number][]): CarInfo {
//     let car: CarInfo = { manufacturer, model };
//     options.forEach(([key, value]) => {
//         car[key] = value;
//     });
//     return car;
// }

// // Example usage:
// const myCar = createCar('Revo', 'Fit', ['color', 'silver'], ['year', 2016]);
// console.log(myCar);
