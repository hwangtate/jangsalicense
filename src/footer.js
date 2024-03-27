import React from 'react';
import { Link } from 'react-router-dom';
import './style/footer.css';

function Footer() {
  return (
    <footer>
      <p id='footer-logo'>장사면허</p>
      <p id="footer-text">
        경기도 안양시 동안구 엘에스로 142, 10층 1042호 | 문의 : help@jangsalicense.com<br/>
        대표자 : 황태영 | 사업자등록번호 : 708-20-01853<br/><br/>
        Copyright 2024. jangsalicense all rights reserved.<br/><br/>
        <Link to="/privacy" className="fa">개인정보처리방침</Link>
      </p>
    </footer>
  );
}

export default Footer;