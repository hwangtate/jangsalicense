import React from 'react';
import './style/about.css';
import Topnav from './topnav';
import Com from './com';
import Bottomnav from './bottomnav';

function About() {
  return (
    <main>
      <Topnav />
      <div className='about-container'>
        <h2 className='about-title'>
          먼저, 솔루션에 대해서 이야기 해보고자 합니다.<br/>기존의 솔루션을 해주는 사람들은 <p className='about-strong'>말로만 솔루션을 하고 있습니다.</p></h2>
        
        <img src='/img/about/aboutback.png' alt='사진' className='about-img'/>

        <h3 className='about-text'>한 가지 예를 들어보겠습니다.</h3>

        <h3 className='about-talk'>
          가게 내부가 너무 칙칙하네요, 조명을 더 밝은걸로 교체 해주세요.
        </h3>

        <h3 className='about-text'>이런 <p className='about-strong-1'>솔루션</p>을 받으면 자연적으로 <p className='about-strong-1'>4가지의 생각</p>을 하게 됩니다.</h3>

        <h3 className='about-talk'>
          어떻게 칙칙한건지 나는 모르겠는데 ? 
        </h3>
        <h3 className='about-talk'>
          조명 브랜드는 어떤걸로 ?
        </h3>
        <h3 className='about-talk'>
          밝기는 정확히 어느정도로 ?
        </h3>
        <h3 className='about-talk'>
          가격은 얼마가 나오는데 ?
        </h3>
        <h3 className='about-text'>
          왜 이런 생각들이 들게 될까요. 멍청해서 ? 바보라서 ? <p className='about-strong-1'>절대 아닙니다.</p><br/>
          <p className='about-strong-1'>어떻게, 어떤식으로</p> 해야 하는지 가르쳐 주지 <p className='about-strong-1'>않았기</p> 때문입니다.
        </h3>
        <h3 className='about-text'>
          그럼 이걸 <p className='about-strong-1'>A부터 Z까지</p> 가르쳐 주면 어떨까요 ??
        </h3>
        <h3 className='about-talk'>
          A라는 근거 때문에 칙칙합니다. 그리고 B조명으로, C강도의 밝기로 D라는 업체에서 E정도의 가격으로 바꾸시면 됩니다.
        </h3>
        <h3 className='about-text'>
          이렇게 정확하게 알려준다면 <p className='about-strong-1'>제대로 이해하고</p> 조명을 바꿀것 입니다.<br/>
          솔루션을 받고 <p className='about-strong-1'>매출이</p> 오르지 않았다면 <p className='about-strong-1'>그 잘못은</p> 솔루션을 해준 사람에게 있습니다.
        </h3>
      </div>
      {/* 두번쨰 */}
      <div className='about-container2'>
        <h3 className='about-title2'>
          잠시, 제 이야기를 하고자 합니다.
        </h3>

        <p className='about-text2'>
          저는 2년전까지 <p className='ab-la-st'>웹사이트 제작과 데이터 분석 및 시스템 개발 사업을</p> 하고 있었습니다.<br/><br/><br/>

          제 사촌이 운영하던 카페가 <p className='ab-la-st'>적자가 심하게 나고 있어,</p><br/>
          컨설턴트와 상담을 했지만 여전히 <p className='ab-la-st'>적자가 심하게 났습니다.</p><br/><br/><br/>

          이를 해결하고자, <p className='ab-la-st'>2명의 프랜차이즈 대표님들과</p> 꾸준한 상담을 하며 적자를 해결했고 매출까지 올리는 데 성공합니다.<br/>
          그러다 저희는 생각했습니다.  <p className='ab-la-st1'>"꾸준하고 친절한 솔루션이면 모든 가게가 드라마틱하게 바뀔 수 있구나."</p><br/><br/><br/>
          
          그렇게 저는 <p className='ab-la-st'>모두에게 적용 가능</p>하고 <p className='ab-la-st'>매출이 확실히 오르는 솔루션</p>을 만들고자 했습니다.<br/>
          마침 제가 데이터 분석 및 시스템 개발 사업을 하고 있었기에 <p className='ab-la-st'>8700시간을</p> 들여 솔루션을 만들어낼수 있었습니다.<br/>
          솔루션을 만들수 있게 약 <p className='ab-la-st'>130번의 회의와 점검</p> 그리고 <p className='ab-la-st'>2000시간을 투자해주신 대표님들께 다시 한 번 감사드립니다.</p>
        </p>
        <h3 className='about-last-title'>
         현재까지 5개의 가게에 도입을 했고, <p className='ab-la-st1'>그 결과 5개 가게 모두 성공적으로 매출을 끌어 올릴수 있었습니다.</p>
        </h3>

        <p className='about-text2' >
        <p className='ab-la-st'>
          이곳에 지금 문의하지 않으셔도 좋습니다. 저희 유튜브, 블로그 등을 보시면서 최대한 도움이 되셨으면 합니다.
        </p>
        </p>
      </div>
      <Com />
      <Bottomnav/>
    </main>
  );
}

export default About;
