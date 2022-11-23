var objPeople = [
	{ // Object @ 0 index
		username: "varun",
		password: "sharma"
	},
	{ // Object @ 1 index
		username: "pratyush",
		password: "ranjan"
	},
	{ // Object @ 2 index
		username: "harshit",
		password: "kamma"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			alert ("You Are Logged In");
            window.location.replace("/index.html");
			// stop the function if this is found to be true
			return
		}
     
	}

		alert("Wrong Credentials")
		
	
	console.log("incorrect username or password")
}