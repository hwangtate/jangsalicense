import React, { useState } from 'react';
import './style/inquiry.css';

// FAQ 데이터
const faqs = [
  {
    question: 'Q 돈을 지불하지 않아도 솔루션을 받을 수 있나요?',
    answer: <>
    네, 가능합니다.<br/><br/>
    상담 신청만 해도 무료 솔루션을 제공하여 어떻게 해야 매출을 올릴 수 있는지 친절하게 다 알려드립니다.
    </>
  },
  {
    question: 'Q 계약 기간 도중에 매출이 오르지 않으면 계약 파기가 가능한가요?',
    answer: 
    <>
    네, 가능합니다.<br/><br/>
    6개월 이내로 월 매출 50% 이상 상승하지 못할 시 계약 파기가 가능하다는 계약 조항이 있습니다.
    </>
  },
  {
    question: 'Q 계약 기간 도중에 가게를 매각해도 괜찮은가요?',
    answer: 
    <>
    네, 괜찮습니다.<br/><br/>
    하지만 권리금의 10%를 지불하거나 매입한 사람이 남은 계약을 양도 받아야 합니다."
    </>
  }
];

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
}

function Inquiry() {
  return (
      <div className="faq-container">
        <h2 className="faq-header">자주 묻는 질문 3가지</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
  );
}

export default Inquiry;
