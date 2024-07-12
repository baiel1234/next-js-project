import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="logo">
            <Link href="/"><img src="/logo.png" alt="Салымбеков университет" /></Link>
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Университет</Link>
            {dropdown === 1 && (
              <ul className="dropdown">
                <li><Link href="/university/about">О университете</Link></li>
                <li><Link href="/university/history">История</Link></li>
                <li><Link href="/university/mission">Миссия и ценности</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Образование</Link>
            {dropdown === 2 && (
              <ul className="dropdown">
                <li><Link href="/education/programs">Программы</Link></li>
                <li><Link href="/education/faculty">Факультеты</Link></li>
                <li><Link href="/education/admissions">Приемная комиссия</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Клиническая база</Link>
            {dropdown === 3 && (
              <ul className="dropdown">
                <li><Link href="/clinical-base/hospitals">Больницы</Link></li>
                <li><Link href="/clinical-base/partners">Партнеры</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Наука</Link>
            {dropdown === 4 && (
              <ul className="dropdown">
                <li><Link href="/science/research">Исследования</Link></li>
                <li><Link href="/science/publications">Публикации</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Студенту</Link>
            {dropdown === 5 && (
              <ul className="dropdown">
                <li><Link href="/student/services">Сервисы</Link></li>
                <li><Link href="/student/life">Студенческая жизнь</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Абитуриенту</Link>
            {dropdown === 6 && (
              <ul className="dropdown">
                <li><Link href="/applicant/info">Информация для абитуриентов</Link></li>
                <li><Link href="/applicant/apply">Как подать заявку</Link></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter(7)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="">Благотворительность</Link>
            {dropdown === 7 && (
              <ul className="dropdown">
                <li><Link href="/charity/projects">Проекты</Link></li>
                <li><Link href="/charity/donate">Как помочь</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
