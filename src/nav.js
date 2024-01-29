import './style/nav.css';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Nav() {

  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    const handleResize = () => {
      // 화면 크기가 1000px 이상이면 모바일 메뉴바 닫기
      if (window.innerWidth >= 1000 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]); // mobileMenuOpen이 변경될 때만 useEffect가 다시 실행되도록 설정

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleNavLinkClick = () => {
    // 모바일 메뉴바가 열려있는 경우에만 닫도록 처리
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  
  return (
      <header>
        <nav id='nav'  className={scrolling ? 'scrolled' : ''}>
          <Link to={'/'} id='nav-box1' className={` ${mobileMenuOpen ? 'open' : ''}`}>
            <p className='nav-box1-size'>장사면허</p>
          </Link>
          <div id='nav-box2'>
            <Link to={'/about'} className='nav-text'>
              회사 스토리
            </Link>

            <Link to={'/solution'} className='nav-text'>
              솔루션 소개
            </Link>

            <Link to={'/service'} className='nav-text'>
              반프랜차이즈
            </Link>

            <a href='https://forms.gle/ibcdRxyTg4oCrJfz6' className='nav-text'>
              문의하기
            </a>

          </div>

          <div className='burger-menu' onClick={handleMobileMenuToggle}>
            <div className={`burger-line ${mobileMenuOpen ? 'open' : ''}`} />
            <div className={`burger-line ${mobileMenuOpen ? 'open' : ''}`} />
            <div className={`burger-line ${mobileMenuOpen ? 'open' : ''}`} />
          </div>

          <div className={`menu-box-container ${mobileMenuOpen ? 'open' : ''}`} >
            <div className='mobile-menu'>

              <Link to={'/about'} id='nav-text-size' onClick={handleNavLinkClick}>
                회사 스토리
              </Link>

              <Link to={'/solution'} onClick={handleNavLinkClick}>
                솔루션 소개
              </Link>

              <Link to={'/service'} onClick={handleNavLinkClick}>
                반프랜차이즈
              </Link>

              <a href='https://forms.gle/ibcdRxyTg4oCrJfz6' onClick={handleNavLinkClick}>
                문의하기
              </a>
            </div>
          </div>

        </nav>
      </header>
  );
}

export default Nav;
