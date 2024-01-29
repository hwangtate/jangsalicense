import React from 'react';
import './style/service.css';
import Topnav from './topnav';
import Inquiry from './inquiry';
import Com from './com';

function Service() {
  return (
    <main>
      <Topnav/>
      <div className='service-container'>
        <h2 className='service-title'>
          우선, <p className='service-st1'>프랜차이즈와 개인의 차이를</p> 알아보겠습니다.
        </h2>
        <p className='service-text'>
          프랜차이즈의 장점은 <p className='service-st'>확실한 매출이 보장됩니다.</p><br/>
          하지만 <p className='service-st'>순수익이 많이 낮고 자신만의 브랜드를 만들지 못합니다.</p>
        </p>
        <p className='service-text'>
          개인은 그 반대로 <p className='service-st'>매출이 보장되지 않습니다.</p><br/>
          하지만 <p className='service-st'>순수익은 프랜차이즈에 비해 높고 자신만의 브랜드를 만들 수 있습니다.</p>
        </p>
        <p className='service-text-big'>
          저희 장사면허는 프랜차이즈의 장점과 개인의 장점을 가져와서 반프랜차이즈를 만들었습니다.
        </p>
        <p className='service-text'>
          <p className='service-num'>1</p> 지속적인 솔루션과 대행으로 <p className='service-st1'>확실한 매출을 보장하고</p>
        </p>
        <p className='service-text'>
          <p className='service-num'>2</p> 로열티만 받으므로써 <p className='service-st1'>순수익을 높였고</p>
        </p>       
        <p className='service-text'>
          <p className='service-num'>3</p> 높은 자유도와 짧은 계약 기간으로 <p className='service-st1'>자신만의 브랜드</p>를 만들 수 있습니다.
        </p>
        <p className='service-text3'>
          저희는 고객님의 성공을 최우선으로 생각하기에 
          저희 솔루션을 통해 실제로 매출 증진에 큰 도움이 될 수 있는 고객님과만 계약을 맺고 있습니다.
        </p>
      </div>
      <a href='https://forms.gle/ibcdRxyTg4oCrJfz6'>
        <button className='service-link'>문의하기 ➜</button> 
      </a>
      <Inquiry/>
      <Com/>
    </main>
  );
}

export default Service;
