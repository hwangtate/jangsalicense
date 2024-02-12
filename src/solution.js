import React from 'react';
import './style/solution.css';
import Topnav from './topnav';
import Com from './com';


function Solution() {

  return (
    <main>
      <Topnav/>
      <div className='solution-container'>
        <h2 className='solution-title'>
          고객님의 <p className='solution-strong-blue'>업종이</p> 무엇이든<br/>
          <p className='solution-strong-blue'>5가지 전략</p>으로 <p className='solution-strong-blue'>맞춤 공략</p>합니다.
        </h2>
        <div className='solution-box'>
          <img src='/img/solution/design2.png' className='solution-box-img' alt='이미지'/>
          <h2 className='solution-box-title'>
            인테리어 전략
            <p className='solution-box-subtitle'>
            인테리어는 중요합니다. 밥을 맛있게 먹을 수 있는 <p className='solution-strong'>분위기를</p> 만들어주기 때문이죠.<br/>
            음식 사진은 있으신가요? / 가게에 명확한 스토리가 있으신가요? <br/><br/>

            인테리어가 좋지 않으면 당연히 <p className='solution-strong'>매출은 오르기 힘듭니다.</p><br/><br/>

            <p className='solution-strong-line'>인테리어 비용 없이도, 최상의 인테리어를 할 수 있는 방법을 제시합니다.</p>
            </p>
          </h2>
        </div>

        <div className='solution-box'>
          <img src='/img/solution/clean2.png' className='solution-box-img' alt='이미지'/>
          <h2 className='solution-box-title'>
            청결 및 위생 전략
            <p className='solution-box-subtitle'>
            청결은 기본 중에 <p className='solution-strong'>기본입니다.</p> 하지만 많은 사장님들이 까먹고 있습니다.<br/>
            전구 또는 천장에 거미줄이 있진 않으신가요? / 내 가게에서 냄새가 나진 않을까요? <br/><br/>

            <p className='solution-strong-line'>가게가 깨끗하지 않다면 당연히 손님은 오지 않습니다.</p><br/><br/>

            최적의 <p className='solution-strong'>청결 관리 방법을</p> 제시합니다. 
            </p>
          </h2>
        </div>

        <div className='solution-box'>
          <img src='/img/solution/service2.png' className='solution-box-img' alt='이미지'/>
          <h2 className='solution-box-title'>
            서비스 및 태도 전략
            <p className='solution-box-subtitle'>
            <p className='solution-strong'>태도 하나만으로도</p> 가게의 <p className='solution-strong'>매출을</p> 좌지우지할 수 있는 걸 아시나요?<br/>
            사장님의 특별한 서비스와 웃음을 손님에게 드린다면 그것만으로도 단골을 만들고 <p className='solution-strong'>매출을 100% 이상</p> 상승시킬 수 있다고 약속드립니다.<br/><br/>
            
            <p className='solution-strong-line'>독보적인 친절한 태도로 손님을 끌어당기는 방법을 제시합니다.</p>
            </p>
          </h2>
        </div>

        <div className='solution-box'>
          <img src='/img/solution/food2.png' className='solution-box-img' alt='이미지'/>
          <h2 className='solution-box-title'>
            음식 및 메뉴 전략
            <p className='solution-box-subtitle'>
            음식이 엄청 맛있을 <p className='solution-strong'>필요는 없습니다.</p><br/>
            고객층 파악 / 메뉴 구성 다양화 / 가격 전략 / 품질 관리 등 다양한 전략으로 <p className='solution-strong'>손님을 사로잡으면</p> 됩니다.<br/><br/>

            대표 메뉴 음식을 싸게 만들어 손님을 불러들이고, 사이드 메뉴로 <p className='solution-strong'>매출을 극대화시키는</p> 방법을 알고 계신가요?<br/>
            이 외에도 <p className='solution-strong-line'>매출을 극대화시키는 방법을 제시합니다.</p>
            </p>
          </h2>
        </div>

        <div className='solution-box'>
          <img src='/img/solution/marketing2.png' className='solution-box-img' alt='이미지'/>
          <h2 className='solution-box-title'>
            마케팅 전략 
            <p className='solution-box-subtitle'>
            꼭 <p className='solution-strong'>돈이 드는 마케팅</p> 방법만 있는 것은 아닙니다.<br/>
            아직도 <p className='solution-strong'>블로그, SNS</p> 등을 안 하시나요? / 아직도 <p className='solution-strong'>쿠폰, 회원제, 협업</p>을 안 하시나요?<br/><br/>

            마케팅 외의 것들이 완벽하더라도 마케팅이 부족하다면 매출은 오르지 않습니다.<br/><br/>

            <p className='solution-strong-line'>장사면허는 모든 마케팅을 대신하면서 최고의 효과를 만들어내고 있습니다.</p>
            </p>
          </h2>
        </div>

      </div>
      <div className='solution-container2'>
        <h2 className='solution-title'>
          검증된 <p className='solution-strong-blue'>반프랜차이즈(솔루션)</p>으로<br/>
          이미 <p className='solution-strong-blue'>효과를</p> 보고 있습니다.
        </h2>
        <div className='solution-container2-box'>
          <img src="/img/gra/a.png" className='solution-box-img2' alt="사진" />
        
          <img src="/img/gra/b.png" className='solution-box-img2' alt="사진" />
        
          <img src="/img/gra/c.png" className='solution-box-img2' alt="사진" />
        
          <img src="/img/gra/d.png" className='solution-box-img2' alt="사진" />
        
          <img src="/img/gra/e.png" className='solution-box-img2' alt="사진" />
        </div>
      </div>

      <Com/>
    </main>
  );
}

export default Solution;
