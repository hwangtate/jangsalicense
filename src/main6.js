import React from 'react';
import './style/main6.css';

function Main6() {
  const handleImgClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeLrmVD51SSQfc8DQHIJ5klZPLVSydhm6-sy_qluELhPQgoow/viewform?pli=1'; // 원하는 URL로 변경
  };

  return (
    <>
      <div className='main6-background'>
        <img src='img/main6/text1.png' className='main6-img1' alt='이미지'/>
        <img src='img/main6/text2.png' className='main6-img2' alt='이미지'/>
        <img src='img/main6/text3.png' className='main6-img3' alt='이미지' onClick={handleImgClick} />
      </div>
    </>
  );
}


export default Main6;
