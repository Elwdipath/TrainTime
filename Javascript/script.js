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
    var fT;

    //Capture data from submit button and push to db

    $("#subB").on("click", function(event){
        event.preventDefault();
        
        
        tN = $("#name-input").val().trim();
        tD = $("#destination-input").val().trim();
        fT = $("#first-train-time-input").val().trim();
        tF = $("#frequency-input").val().trim();
        
        console.log(fT)
        db.ref().push({
          trainName: tN,
          destination: tD,
          frequency: tF,
          firstTrain: fT,
        })
        $("#name-input").val(' ')
        $("#destination-input").val(' ')
        $("#frequency-input").val(' ')
        $("#first-train-time-input").val(' ')
  })

  db.ref().on("child_added", function(snapshot){
      var dv = snapshot.val()

      var nTrain = dv.trainName;
      var tDest = dv.destination;
      var tFreq = dv.frequency;
      var fTrain = dv.firstTrain;

      var firstTimeConverted = moment(fTrain, "HH:mm").subtract(1, "years")
        console.log("First Time: " + firstTimeConverted)
      
      //Current Time

      var cTime = moment();
        console.log(cTime)

      //Difference between times

      var dTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("Time Difference: " + dTime)

      // Divide out to get remainder

      var tRemainder = dTime % tFreq  
        console.log ("Remainder: " + tRemainder);

      // Minute Until Train
    var tMinus = tFreq - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinus);

      // Next Train

    var nextTrain = moment().add(tMinus, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

        $("#tSchedule").append("<tr><td>" + nTrain + "</td><td>" + tDest + "</td><td>" + tFreq + 
        "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinus + "</td></tr>");
  })