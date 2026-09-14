const figlet = require("figlet");


figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


/// i have do it becouse when you install npm globally and try to print things
/// from like friglet you have link by running command "npm link figlet" 
/// and then when you run it , it will go fine 

/// to install globally you have to run a command like "npm install -g <package-name>"
/// it istall things globally 


/// but it is good practice to install packages localy not globally 
