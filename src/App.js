import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import cataplexy from "./assets/cataplexy.jpg";
import sleepparalysis from "./assets/sleepparalysis.jpg";
import nacrolepsy1 from "./assets/nacrolepsy1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
        <a class="navbar-brand" href="#">
          {" "}
          <b>Nacrolepsy Awareness</b>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {/* jumbotron */}
      <div class="jumbotron jbtn1">
        <h1 class="display-4 jumbotronh1">What is narcolepsy?</h1>
        <br></br>
        <p class="lead jumbotronpara1">
          Narcolepsy is a chronic neurological disorder that affects the brain’s
          ability to control sleep-wake cycles.
          <br></br>
          People with narcolepsy may feel rested after waking, but then feel
          very sleepy throughout much of the day.
        </p>
        <hr class="my-4" />

        <br></br>
        <p>What's a day in the life of someone with nacrolepsy like?</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
        <br></br>
      </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={nacrolepsy1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Disrupted night time sleep.</h3>
              <p>Nighttime sleep in patients with narcolepsy is characterized by a short sleep latency and a sleep-onset REM period in approximately 50% of cases. Aside from the short sleep latency, it is also characterized by an inability to stay asleep.
                 Patients with narcolepsy experience frequent awakenings during sleep.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cataplexy}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Cataplexy</h3>
              <p>
                Cataplexy is a condition which causes several physical changes,
                from slurred speech to complete weakness of most muscles,
                and may last up to several minutes.
                Some people with narcolepsy experience only one or two episodes of cataplexy a year, while others have numerous episodes daily.
                 Not everyone with narcolepsy experiences cataplexy.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sleepparalysis}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Sleep paralysis</h3>
              <p>
              People with narcolepsy often experience a temporary inability to move or speak while falling asleep or upon waking. 
              These episodes are usually brief — lasting a few seconds or minutes — but can be frightening.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default App;
