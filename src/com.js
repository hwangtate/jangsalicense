import React from 'react';
import { Link } from 'react-router-dom';
import './style/com.css';

function Com() {
  return (
    <div className='com-container'>
      <h2 className='com-tit'>
       자세히 알아보기
      </h2>
      <div className='com-contain'>
        <Link to={'/about'} className='com-img' id='com-img1' >
          <h3 className='com-title'>회사 스토리</h3>
          <p className='com-sub'>아직 못 미더우신가요?</p>
        </Link>

        <Link to={'/solution'} className='com-img' id='com-img2'>
          <h3 className='com-title'>솔루션 소개</h3>
          <p className='com-sub'>자영업자 맞춤 솔루션</p>
        </Link>

        <Link to={'/service'} className='com-img' id='com-img3'>
          <h3 className='com-title'>반프랜차이즈</h3>
          <p className='com-sub'>매출을 올리는 혁신적인 전략</p>
        </Link>
      </div>
    </div>
  );
}

export default Com;
