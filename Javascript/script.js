// FINISH HTML!

// $(document).ready(function() {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyBoU4QEHT0R5SGhL4VQy8aW4sEo7SXliX0",
  //   authDomain: "train-time-da527.firebaseapp.com",
  //   databaseURL: "https://train-time-da527.firebaseio.com",
  //   projectId: "train-time-da527",
  //   storageBucket: "train-time-da527.appspot.com",
  //   messagingSenderId: "920741048353",
  //   appId: "1:920741048353:web:ccd28e555e74f5fd9bb360"
  // }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let db = firebase.database();

    let tN;
    let tD;
    let tF;
    let nA;
    let mA;
    let fT

    //Capture data from submit button and push to db

    $("#subB").on("click", function(event){
        event.preventDefault();
        
        alert("Here")
        tN = $("#name-input").val().trim();
        tD = $("#destination-input").val().trim();
        tF = $("#frequency-input").val().trim();
        fT = $("first-input").val().trim();

        db.ref().push({
          trainName: tN,
          destination: tD,
          frequency: tF,
          firstTrain: fT,
        })
        
        
    })
  // })