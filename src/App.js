import logo from './logo.svg';
import './App.css';

function App() {

  // Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 style={{color:'red',fontSize:'80px'}}>Maintenance Break!</h1>
          <hr/>
          <h1>We will be back in</h1>
        <h2 id="demo"></h2>
        <p style={{fontSize:'12px'}}>Team JSAP - Let's make it done</p>
        </div>
      </header>
    </div>
  );
}

export default App;