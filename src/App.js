import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const getTrueAnswer = () => eval(`${a}${sign}${b}`);
  const getRandomNumber = () => Math.floor(Math.random() * 49) + 1;

  const [a, seta] = useState(getRandomNumber());
  const [b, setb] = useState(getRandomNumber());
  const [sign, setSign] = useState(getRandomNumber() % 2 == 1 ? '+' : '-')
  const [variants, setVariants] = useState([
    getTrueAnswer(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber()
  ].sort(() => Math.random() - 0.5));
  const [selected, setSelected] = useState(-1);
  const [className, setClassName] = useState("")
  const [time, setTime] = useState(10)
  const [level, setLevel] = useState(1)
  const [startedTimeOut, setStartedTimeOut] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false)

  const check = (v, i) => {
    setSelected(i);

    clearTimeout(startedTimeOut);

    if (getTrueAnswer() == v) {
      setClassName("success");
      setLevel(level + 1);
      setTime(time + 2)
    }
    else {
      setClassName("error");
      setTime(time >= 3 ? time - 3 : 0);
    }

    setTimeout(() => { next(); }, 400)
  }

  const next = async () => {
    seta(getRandomNumber());
    setb(getRandomNumber());
    setSign(getRandomNumber() % 2 == 1 ? '+' : '-');
    setSelected(-1)
  }

  useEffect(() => {
    setVariants([
      getTrueAnswer(),
      getRandomNumber(),
      getRandomNumber(),
      getRandomNumber()
    ].sort(() => Math.random() - 0.5))
  }, [a, b, sign]);

  const player = document.getElementById("player");

  useEffect(() => {
    if (time > 0) {
      const t = setTimeout(() => setTime(time - 1), 1000);
      setStartedTimeOut(t);
    }
    else {
      setIsGameOver(true)
      player.src = "/audio/over.mp3";
      player.play();
    }
  }, [time])

  const newGame = () => {
    setTime(10);
    setIsGameOver(false);
    setLevel(1);
    next();
  }

  return (
    <div>
      <div className="container py-4">
        <h1 className="display-3 fw-bold" >{time}</h1>
        <div className="timeline mb-4">
          <div className="time" style={{ width: time * 10 + `%` }} ></div>
        </div>
        <div className="question-panel box mt-2 mt-sm-5">
          <span id="question">{a} {sign} {b}</span> = <span id="answer">?</span>
        </div>
        <div className="row mt-5 pt-0 pt-sm-4 justify-content-center">
          <div className="col-9 col-md-10 col-lg-8 col-xl-7">
            <div className="row">
              {variants.map((v, i) =>
                <div className="col-6 col-sm-3 mb-2" key={i} onClick={() => check(v, i)}>
                  <div className={`box case ${i == selected && className}`}>{v}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      <div className="level">level: <span id="level">{level}</span></div>
      <a href="https://algorismic.uz" className="d-inline-block mb-4" target="_blank">
        <img src="./img/logo.png" className="logo" alt="" />
      </a>

      <div id="gameModal" className={!isGameOver && "d-none"}>
        <div id="win" className="panel d-none">
          <img src="img/win.png" alt="" />
          <h1>Congratulations. New record: <span id="lastLevelWin">10</span></h1>
          <button className="btn text-white fs-1 mb-0 shadow-none" onclick="init()">
            <i className="fas fa-redo-alt    "></i>
          </button>
        </div>
        <div id="lose" className={`panel ${!isGameOver && "d-none"}`}>
          <img src="img/lose.png" alt="" />
          <h1 className="fw-bold">Game Over</h1>
          <h1 className="fw-bold">Level: <span id="lastLevelLose">10</span></h1>
          <button className="btn text-white fs-1 mb-0 shadow-none fw-bold" onClick={newGame}>
            {/* <FontAwesomeIcon icon={faRedoAlt} /> */}
            Yangi o'yin
          </button>
        </div>
      </div>

      <audio src="" id="player"></audio>
    </div>
  );
}

export default App;
