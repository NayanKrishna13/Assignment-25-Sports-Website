
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRyKUBPIQXnlv1tGubuATVinGKwEtzg8A",
    authDomain: "sports-website-aaf87.firebaseapp.com",
    databaseURL: "https://sports-website-aaf87-default-rtdb.firebaseio.com",
    projectId: "sports-website-aaf87",
    storageBucket: "sports-website-aaf87.appspot.com",
    messagingSenderId: "12843460721",
    appId: "1:12843460721:web:aa8c8932bc1584b3efd3d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function readResults(year){
  var results=firebase.database().ref(year);
  results.on('value',(data)=>{
    var ranks=data.val();
    document.getElementById("result1").innerHTML="<br> 1."+ranks[1];
     document.getElementById("result2").innerHTML="<br> 2."+ranks[2];
     document.getElementById("result3").innerHTML="<br> 3."+ranks[3];
     document.getElementById("result4").innerHTML="<br> 4."+ranks[4];
    
  }
             )
}