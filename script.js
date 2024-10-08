


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDix2b-xCtZ1zabAy3muIRpv307zJ6sXoA",
  authDomain: "send-esms.firebaseapp.com",
  databaseURL: "https://send-esms-default-rtdb.firebaseio.com",
  projectId: "send-esms",
  storageBucket: "send-esms.appspot.com",
  messagingSenderId: "304041024188",
  appId: "1:304041024188:web:370ae3e067e6c2f5d60eb9"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');

  // Save message
  saveMessage(name, email);
 // Show alert
location.href ="https://www.instagram.com/reel/C-juXuqBNtG/?igsh=MXc1bDF3ZmpkYzU4NQ==";
// Clear form
document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email
  });
}
