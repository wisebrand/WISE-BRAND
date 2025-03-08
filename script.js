
// Create a new object to store account details
let accountDetails = {
  // Initialize properties
  email: '',
  password: '',
  username: '',
  phoneNumber: ''
};

// Function to update account details
function updateAccountDetails(email, password, username, phoneNumber) {
  accountDetails.email = email;
  accountDetails.password = password;
  accountDetails.username = username;
  accountDetails.phoneNumber = phoneNumber;
}

// Function to display account details
function displayAccountDetails() {
  console.log('Account Details:');
  console.log(`Email: ${accountDetails.email}`);
  console.log(`Password: ${accountDetails.password}`);
  console.log(`Username: ${accountDetails.username}`);
  console.log(`Phone Number: ${accountDetails.phoneNumber}`);
}

// Example usage:
updateAccountDetails('john.doe@example.com', 'password123', 'johndoe', '123-456-7890');
displayAccountDetails();
