Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
    }
    
    console.log('m15 version:',m15.version);
    classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/JRfCRS77Y/model.json',modelLoaded);
    
    function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResults(error, results) 
   { if (error) {console.error(error);} 
        else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results [0].label;
        document.getElementById("result_emotion_name2").innerHTML = results [1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label =="Peace")
        {
            document.getElementById().innerHTML = "&#9996;";
         }

         if(results[0].label =="High Five")
        {
            document.getElementById().innerHTML = "&#128400;";
        }
        if(results[0].label =="Good")
        {
            document.getElementById().innerHTML = "&#128077;";
         }

         if(results[0].label =="Okay")
         {
             document.getElementById().innerHTML = "&#128076;";
          }

          if(results[0].label =="Bad")
          {
              document.getElementById().innerHTML = "&#128078;";
           }
// Label One

         if(results[1].label =="Peace")
        {
            document.getElementById().innerHTML = "&#9996;";
         }

         if(results[1].label =="High five")
        {
            document.getElementById().innerHTML = "&#128400;";
         }

         if(results[1].label =="Good")
         {
             document.getElementById().innerHTML = "&#128077;";
          }

        if(results[1].label =="Okay")
          {
              document.getElementById().innerHTML = "&#128076;";
           }

        if(results[1].label =="Bad")
           {
               document.getElementById().innerHTML = "&#128078;";
            }
        }}
