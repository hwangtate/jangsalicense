import React from 'react';
import './style/bottomnav.css';

function Bottomnav() {
  return (
    <div className='last-container'>
      <img src="/img/back1.png" id="background" alt="배경" />
      <h1 className="last-title">문의하지 마세요.<h2 className="last-subtitle">유튜브, 블로그를 보고 최대한 노력 해보시고,<br/>그래도 매출이 오르지 않는다면 <p className='last-strong'>그때 문의하세요.</p></h2></h1>
      <a href='https://forms.gle/ibcdRxyTg4oCrJfz6'>
        <button className='last-link'>문의하기 ➜</button> 
      </a>
    </div>
  );
}

export default Bottomnav;
