const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener("click", (event) => {
	event.preventDefault();
	emailInput.value = "";
	nameInput.value = "";
	messageInput.value = "";
	const email = emailInput.value;
	const name = nameInput.value;
	const message = messageInput.value;
	console.log(`
    Email: ${email}
    Name: ${name}
    Message: ${message}; 
    `);
	alert(
		"The contact function have not been added yet, Please use the links at the bottom."
	);
});
