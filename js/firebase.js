
  const firebaseConfig = {
    apiKey: "AIzaSyC6Uu2SQitkMGQETJkcZjHTDWjourPAA4M",
    authDomain: "high-rise-services.firebaseapp.com",
    databaseURL: "https://high-rise-services-default-rtdb.firebaseio.com",
    projectId: "high-rise-services",
    storageBucket: "high-rise-services.appspot.com",
    messagingSenderId: "1067833362412",
    appId: "1:1067833362412:web:73e681f079c102cf7b22c9",
    measurementId: "G-YWB822909H"
  };

  //You need to make sure storageBucket and database URL are set correctly
  //First you need to create a realtime database under firestore database

  //At this point you need to initialize your firebase appId
  //Copy the firebase instance to your

  //firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  //At this point create a reference for your database and return an object an object for our 
  //case we return back a reference to contactFormDB

  var contactFormDB =firebase.database().ref('contactForm')

  //At this point we need to get the contact form from the index file and return it through the
  //the submitForm Function)
document.getElementById('contactForm').addEventListener('submit', submitForm)

// If the form gets submitted it will call this submit function 'submitForm' 
//Now let's create that submitForm Function()
function submitForm(e) {
    //e arguement is assigned to the function to prevent default action of the form from happening
    e.preventDefault()


    // At this point we need to get the values of each field in the form
    var name=getElementById('nameid') //This Variable will return a value of a particular element as shown 
    //from the next description; const getElementVal=(id) => {
    var pnumberid=getElementById('pnumberid')
    var emailid=getElementById('emailid')
    var msgContent = getElementById('msgContent')

    //At this point you can test locally with Console.log to see if it is working
    console.log(name, pnumberid, emailid, msgContent)
    saveMessages(name, pnumberid, emailid, msgContent)


    //Enable the Alert
    document.querySelector('.alert').style.display="block"

    //Remove the alert messages from
    setTimeout(() =>{
      document.querySelector('.alert').style.display="none"
    },3000
    );
}

//Reset the form 
document.getElementById('contactForm').reset()

//Create a function to capture and save all this messages
const saveMessages = (name, pnumberid, emailid, msgContent) => {
  //We need to push all this messages to the database
  var newContactForm = contactFormDB.push(name, pnumberid, emailid, msgContent)

  //We need to set the values at this point 
  newContactForm.setValue({
    name:nameid,
    pnumberid:pnumberid,
    emailid:emailid,
    msgContent:msgContent,

  })
}




// At this point we need to get the values of each field in the form
//Now, Instead of of repeating each element in the form of elementById..., this is the best way 
//to approach it

const getElementVal=(id) => {
     return document.getElementById(id).value
    }



 