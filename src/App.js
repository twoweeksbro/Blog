import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['강남 코트 추천','리액트','파이썬']);
  let [logo, setLogo] = useState('ReactBlog');
  
  let num = [1,2];
  let e = num[0];
  let d = num[1];

  let [a,c] = [1,2];
  // a = 1, c = 2
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '16px'}}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <h4>글제목</h4>
        <p>5월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <h4>글제목</h4>
        <p>5월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <h4>글제목</h4>
        <p>5월 30일 발행</p>
      </div>
      <h4> { post } </h4>
    </div>
  );
}

export default App;
