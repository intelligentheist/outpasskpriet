
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA5TrsWk4BNkWan7gzcFstqV8J2eP38f_k",
    authDomain: "outpass-53c71.firebaseapp.com",
    databaseURL: "https://outpass-53c71-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "outpass-53c71",
    storageBucket: "outpass-53c71.appspot.com",
    messagingSenderId: "110278579590",
    appId: "1:110278579590:web:04bbc42beda01a4d748807",
    measurementId: "G-K7ZGN70GPT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
}


//signOut

function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var email = user.email;
        alert("Active user "+email);
        var input = prompt("Press 1 to go to outpas portal!")
        if (input == '1' || input == 1 )
        {
        window.location.href = "studentportal.html"
        }

    }else{
      alert("No Active user Found")
    }
  })