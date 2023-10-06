import React from 'react'

export default function App1() {
  return (
    <div className="App1">
    <div className="app2">
      <div className="app__header">
        <h1 id="time-header">Время игры: <span id="time">5.0</span></h1>
        <h1 id="result-header" className="hide">Ваш результат: <span id="result"></span></h1>
      </div>
      <div className="app__content">
        <button className="btn" id="start">Начать</button>

        <div className="game" id="game"></div>
      </div>
      <div className="app__footer">
        <div className="input">
          <label for="game-time">Время игры, (сек)</label>
          <input type="number" id="game-time" min="5" step="1" value="5"></input>
        </div>
      </div>
    </div>
    </div>
  )
}
