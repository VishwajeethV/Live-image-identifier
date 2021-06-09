function setup() {
  canvas = createCanvas(350,280);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JO8jlcg8D/model.json',modelLoaded);
  }

  function modelLoaded() {
    console.log("modelLoaded");
  }

  function draw() {
      image(video,0,0,350,280);
      classifier.classify(video,getresult);
  }

  function getresult(error,result) {
    if(error){
      console.log(error);
    }
    else{
      console.log(result);
      document.getElementById('result_object_name').innerHTML=result[0].label;
      document.getElementById('result_accuracy').innerHTML=result[0].confidence.toFixed(3);
    }
  }