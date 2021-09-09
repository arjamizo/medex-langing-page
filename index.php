<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Medex</title>
  <style>
    body {
      margin: 0px;
      padding: 0px;
    }
    .container {
      margin: 0 auto;
      max-width: 1384px;
      text-align: center;
      width: 100%;
    }
    .container > * {
      max-width: 100%;
      margin-bottom: 48px; 
      width: 100%;
    }
    .container > *:last-child {
      margin-bottom: 0px;
    }
    .full-w {
      width: 100%;
    }
    .md-w-100vw {
      max-width: 500px;
    }
    .screens-section {
      min-height: 1000px;
    }
    @media (max-width: 480px) {
      .md-w-100vw {
        /* max-width: 40vw; */
        display: none;
      }
      .screens-section {
        min-height: unset;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="section">
      <img class="full-w" src="./assets/lp01.svg"/>
    </div>
    <div class="section screens-section">
      <div style="position: relative">
        <img class="md-w-100vw" src="./assets/screens.png" style="left: 110px; top: 327px; position: absolute;"/>
      </div>
      <img class="full-w" src="./assets/lp02.svg"/>
    </div>
    <div class="section">
      <img class="full-w" src="./assets/lp03.svg"/>
      <img src="./assets/google-play 1.png" alt="Google Play"/>
      <img src="./assets/app-store 1.png" alt="App Store"/>
    </div>
    <div class="section">
      <img class="full-w" src="./assets/lp04.svg"/>
      <!--       
      <img src="./assets/get-custom-care-daily.png"/>
      <img src="./assets/get-cust-hands.png"/>
      <img src="./assets/get-cust-activity.png"/>
      <img src="./assets/get-cust-supl.png"/>
      -->
    </div>
    <div class="section">
      <img class="full-w" src="./assets/lp05.svg"/>
    </div>
    <div class="section">
      <img class="full-w" src="./assets/lp06.svg"/>
    </div>
  </div>
</body>
</html>