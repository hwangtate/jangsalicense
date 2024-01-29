import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './style/topnav.css';
import 'aos/dist/aos.css';


function Topnav() {

  const location = useLocation();

  const currentPath = location.pathname;

  let title, subtitle, backgroundId, text, textId;

  if (location.pathname === '/about') {
    title = (
      <>
        솔루션은 어떻게 만들었길래<br/>
        그렇게 효과가 있는거야 ?
      </>
      );
    subtitle = (
      <>
        이런 질문을 듣곤 합니다.
      </>
      );
    backgroundId = 'topnav-background1';
    text = '회사 스토리';
    textId = 'topnav-subtitle-blue'
  }else if (currentPath.startsWith('/solution')) {
    title = (
      <>
        왜 솔루션이 효과적인지<br/>
        알려드리겠습니다.
      </>
      );
    subtitle = (
      <>
        요식업 / 외식업 / 음식점 맞춤 솔루션
      </>
      );
    backgroundId = 'topnav-background2'
    text = '솔루션 소개';
    textId = 'topnav-subtitle-blue2'
  }else if (currentPath.startsWith('/service')) {
    title = (
      <>
        반프랜차이즈가 도대체 뭐길래<br/>
        그렇게 효과적인거야 ?
      </>
      );
    subtitle = (
      <>
        그 이유를 지금부터 알려드리겠습니다.
      </>
      );
    backgroundId = 'topnav-background3'
    text = '반프랜차이즈';
    textId = 'topnav-subtitle-blue3'
  }

  return(
    <>
      <div id={backgroundId}>
        <h2 id={textId} >{text}</h2>
        <h1 id="topnav-title" >{title}</h1> 
        <h2 id="topnav-subtitle" >{subtitle}</h2> 
      </div>
    </>
  );
}

export default Topnav;
