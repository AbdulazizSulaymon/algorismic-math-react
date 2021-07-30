import './App.css';

function App() {
  return (
    <div>
      <div className="container py-4">
        <h1 className="display-3" id="timer">10</h1>
        <div className="timeline mb-4">
          <div className="time" id="time"></div>
        </div>
        <div className="question-panel box mt-2 mt-sm-5">
          <span id="question"></span> = <span id="answer">?</span>
        </div>
        <div className="row mt-5 pt-0 pt-sm-4 justify-content-center">
          <div className="col-9 col-md-10 col-lg-8 col-xl-7">
            <div className="row">
              <div className="col-6 col-sm-3 mb-2">
                <div className="box case"></div>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <div className="box case"></div>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <div className="box case"></div>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <div className="box case"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="level">level: <span id="level">1</span></div>
      <a href="https://algorismic.uz" className="d-inline-block mb-4" target="_blank">
        <img src="./img/logo.png" className="logo" alt="" />
      </a>

      <div id="gameModal" className="d-none">
        <div id="win" className="panel d-none">
          <img src="img/win.png" alt="" />
          <h1>Congratulations. New record: <span id="lastLevelWin">10</span></h1>
          <button className="btn text-white fs-1 mb-0 shadow-none" onclick="init()">
            <i className="fas fa-redo-alt    "></i>
          </button>
        </div>
        <div id="lose" className="panel d-none">
          <img src="img/lose.png" alt="" />
          <h1>Game Over</h1>
          <h1>Level: <span id="lastLevelLose">10</span></h1>
          <button className="btn text-white fs-1 mb-0 shadow-none" onclick="init()">
            <i className="fas fa-redo-alt    "></i>
          </button>
        </div>
      </div>

      <audio src="" id="player"></audio>
    </div>
  );
}

export default App;
