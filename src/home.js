import './style/home.css'
import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // 스타일 파일
import Slider from 'react-slick'; // 슬릭 라이브러리 추가
import 'slick-carousel/slick/slick.css'; // 슬릭 스타일 추가
import 'slick-carousel/slick/slick-theme.css';
import Com from './com';
import Bottomnav from './bottomnav';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (1초)
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <main>
      {/* 첫번쨰 */}
        <div className="background-container">
          <img src="/img/background1.png" id="background" alt="배경" />
          <h1 className="home-title">지금 매출에 <p className='home-color'>만족한다면</p><br/>나가주셔도 좋습니다.
          <h2 className="home-subtitle">장사면허는 무료 솔루션을 제공합니다.</h2>
          </h1>
        </div>
      {/* 두번째 */} 
        <div className='second-container'>
          <h1 className='second-title'>매출이 낮은 이유는 <p className='home-color1'>딱 6가지로</p> 구분됩니다.</h1>
          <h2 className='second-subtitle'>상권 | 인테리어 | 청결 | 태도 | 음식 | 마케팅<br/>한 가지라도 부족하다면 매출은 오르지 않습니다.</h2>
        </div>
        <div className='third-container'>
          <div className='third-box' data-aos="fade-up">
            <img src="/img/thr/img1.png" className='third-img' alt="사진" />
            <h2 className='third-title'><p className='home-color1'>상권</p>의 중요성과 돌파방법</h2>
            <p className='third-subtitle'>상권이 이미 좋지 않으신가요 ? <br/>상권이 좋지 않아도 매출을 올릴 수 있는 돌파 방법을 알려드립니다.</p>
            <Link to={'/'} className='third-link'>관련 블로그 읽으러 가기&nbsp;&nbsp;➜</Link>
          </div>
          <div className='third-box' data-aos="fade-up">
            <img src="/img/thr/img2.jpg" className='third-img' alt="사진" />
            <h2 className='third-title'>완벽한 <p className='home-color1'>인테리어</p>란 무엇일까 ?</h2>
            <p className='third-subtitle'>가게의 인테리어는 가게의 얼굴입니다.<br/>내 가게의 인테리어는 완벽한지 확인해 보세요.</p>
            <Link to={'/'} className='third-link'>관련 블로그 읽으러 가기&nbsp;&nbsp;➜</Link>
          </div>
          <div className='third-box' data-aos="fade-up">
            <img src="/img/thr/img3.jpg" className='third-img' alt="사진" />
            <h2 className='third-title'>내 가게는 과연 <p className='home-color1'>청결</p>할까 ?</h2>
            <p className='third-subtitle'>가게를 깨끗하게 유지하는 것은 선택이 아닌 필수입니다.<br/>지금 가게가 깨끗한지 확인해 보세요.</p>
            <Link to={'/'} className='third-link'>관련 블로그 읽으러 가기&nbsp;&nbsp;➜</Link>
          </div>
          <div className='third-box' data-aos="fade-up">
            <img src="/img/thr/img4.jpg" className='third-img' alt="사진" />
            <h2 className='third-title'>단골 손님을 만드는 <p className='home-color1'>태도</p>는 무엇일까 ?</h2>
            <p className='third-subtitle'>일단 손님과 친해지세요.<br/>단골 손님을 만드는 가장 쉬운 방법입니다.</p>
            <Link to={'/'} className='third-link'>관련 블로그 읽으러 가기&nbsp;&nbsp;➜</Link>
          </div>
          <div className='third-box' data-aos="fade-up">
            <img src="/img/thr/img5.jpg" className='third-img' alt="사진" />
            <h2 className='third-title'>맛있는 <p className='home-color1'>음식</p>이란 뭘까 ?</h2>
            <p className='third-subtitle'>단순히 맛만 있으면 되는 거 아닌가 ?<br/>아닙니다, 맛있는 음식의 본질을 알려드립니다.</p>
            <Link to={'/'} className='third-link'>관련 블로그 읽으러 가기&nbsp;&nbsp;➜</Link>
          </div>
          <div className='third-box' data-aos="fade-up">
            <img src="/img/thr/img6.jpg" className='third-img' alt="사진" />
            <h2 className='third-title'>매출을 끌어올리는 <p className='home-color1'>마케팅</p> 방법</h2>
            <p className='third-subtitle'>상권, 인테리어, 청결, 태도, 음식까지 완벽하다면,<br/>이제는 마케팅만 잘한다면 매출을 확실히 끌어올릴 수 있습니다.</p>
            <Link to={'/'} className='third-link'>관련 블로그 읽으러 가기&nbsp;&nbsp;➜</Link>
          </div>
          </div> 
        {/* 세번째 */}
          <div className='fourth-container'>
            
            <div className='fourth-size'>
              <div className='fourth-size-box'>
                <h2 className='fourth-title'>이미 검증된 <p className='home-color1'>솔루션 시스템</p></h2>
                <h2 className='fourth-subtitle'>5개의 가게에 솔루션 시스템을 도입한 결과,<br/>6개월 내로 월 매출이 <p className='fourth-strong'>최대 4배 상승했습니다.</p></h2>
              </div>
            </div>

            <div className='fourth-container-box'>
              <Slider {...sliderSettings}>
                <div className="slide-item">
                  <img src="/img/gra/a.png" className='gra-img' alt="사진" />
                </div>
                <div className="slide-item">
                  <img src="/img/gra/b.png" className='gra-img' alt="사진" />
                </div>
                <div className="slide-item">
                  <img src="/img/gra/c.png" className='gra-img' alt="사진" />
                </div>
                <div className="slide-item">
                  <img src="/img/gra/d.png" className='gra-img' alt="사진" />
                </div>
                <div className="slide-item">
                  <img src="/img/gra/e.png" className='gra-img' alt="사진" />
                </div>
              </Slider>
            </div>

          </div>
          {/* 네번째 */}
          <div className='fifth-container'>
            <h1 className='fifth-title'>장사면허에서는 <p className='home-color1'>반프랜차이즈</p> 전략으로<br/>상호이익 관계를 추구합니다.</h1>
            <h2 className='fifth-subtitle' >1. 일회성 솔루션이 아닌, 3년 동안 지속되는 솔루션으로 확실한 매출 증가를 보장합니다.</h2>
            <h2 className='fifth-subtitle' >2. 말만 하는 솔루션이 아닌, 장사에 대한 모든 것을 함께 관리하고 행동합니다.</h2>
            <h2 className='fifth-subtitle' >3. 월 로열티제로 함께 매출을 올리고, 돈을 지불하지 않아도 솔루션을 받을 수 있습니다.</h2>
          </div>
          <Com/>
          {/* 마지막 문의하기 */}
          <Bottomnav/>
    </main>
  );
}

export default Home;