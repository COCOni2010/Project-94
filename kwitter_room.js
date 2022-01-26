var firebaseConfig = {
      apiKey: "AIzaSyBxJShysJP3Sioj9GCXzgzRTMUcaNaBByI",
      authDomain: "letschat-d0157.firebaseapp.com",
      databaseURL: "https://letschat-d0157-default-rtdb.firebaseio.com",
      projectId: "letschat-d0157",
      storageBucket: "letschat-d0157.appspot.com",
      messagingSenderId: "553534289283",
      appId: "1:553534289283:web:56f60bde15bbc8a1abb2b6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
