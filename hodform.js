// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDnmMzgeu_SvsSF9LUktZ_kYghBvQ4Ws2M",
    authDomain: "outpass-incharge.firebaseapp.com",
    projectId: "outpass-incharge",
    storageBucket: "outpass-incharge.appspot.com",
    messagingSenderId: "897316027554",
    appId: "1:897316027554:web:a417eca1202a25ba24abfb",
    measurementId: "G-34KYERZ8Z4"
  };


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
        window.location.href = "approval.html"
        }

    }else{
      alert("No Active user Found")
    }
  })