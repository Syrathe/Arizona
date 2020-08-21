import React, { Component } from 'react';

import az4 from 'C:/Users/herrm/my-app/src/az4.jpeg';
import { Link, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <div class="col-xs-1"></div>
      <div class="col-xs-8">
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </head>
        <body>
          <div class="row">
          <img src={"az4"} class="img-responsive" alt="Cinque Terre"/>
            <div class = "column col-xs-0  col-md-1"></div>
            <div class = "column col-xs-8 col-md-7">
              <h3>LoremIpsum</h3>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam odio, dapibus vulputate erat vel, pretium malesuada est. Aenean non felis at erat pretium posuere. Sed lacus nunc, malesuada in enim non, viverra euismod lectus. Sed a mattis eros, vel vehicula metus. Fusce ac vestibulum urna, ut tincidunt arcu. Cras purus nulla, viverra non ligula ut, semper ultricies est. Mauris a lorem ut arcu feugiat accumsan ut non ligula. Fusce ut dolor sed erat laoreet tincidunt nec vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat eros sit amet purus pretium, eu aliquet nisi tempus. Vivamus a sodales eros, vel dignissim diam. Integer aliquet euismod purus, vel facilisis velit eleifend a. Maecenas molestie ut tellus eget consectetur. Fusce purus tortor, tincidunt eget magna nec, condimentum blandit lectus.</p>
            </div>
            
            <div class = "column col-xs-1  col-md-1"></div>
          </div>

          
          <div class="row">
            <div class = "column col-xs-1  col-md-1"></div>
            <div class = "column col-xs-10 col-md-10">
              <h3>DolotSirAmet</h3>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec diam odio, dapibus vulputate erat vel, pretium malesuada est. Aenean non felis at erat pretium posuere. Sed lacus nunc, malesuada in enim non, viverra euismod lectus. Sed a mattis eros, vel vehicula metus. Fusce ac vestibulum urna, ut tincidunt arcu. Cras purus nulla, viverra non ligula ut, semper ultricies est. Mauris a lorem ut arcu feugiat accumsan ut non ligula. Fusce ut dolor sed erat laoreet tincidunt nec vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat eros sit amet purus pretium, eu aliquet nisi tempus. Vivamus a sodales eros, vel dignissim diam. Integer aliquet euismod purus, vel facilisis velit eleifend a. Maecenas molestie ut tellus eget consectetur. Fusce purus tortor, tincidunt eget magna nec, condimentum blandit lectus.</p>
            </div>
            <div class = "column col-xs-1  col-md-1"></div>
          </div>

          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        
        </body>
      </div>
      <div class="col-xs-1"></div>
    </div>
  );
}

export default App;
