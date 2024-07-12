const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Салымбеков университет белый" />
            <p>Процветание через образование</p>
            <p>Адрес: 3 Фучика, Бишкек</p>
            <p>Тел: +996 312 65 85 38</p>
            <p>Email: info@salymbekov.com</p>
          </div>
          <div className="footer-links">
            <h3>Полезные ссылки</h3>
            <ul>
              <li><a href="https://dordoi.org" target="_blank" rel="noopener noreferrer">Ассоциация Дордой</a></li>
              <li><a href="https://dordoiplaza.kg" target="_blank" rel="noopener noreferrer">Dordoi Plaza</a></li>
              <li><a href="https://cinematica.kg" target="_blank" rel="noopener noreferrer">Cinematica</a></li>
              <li><a href="https://edu.gov.kg" target="_blank" rel="noopener noreferrer">МОиН КР</a></li>
              <li><a href="https://med.kg" target="_blank" rel="noopener noreferrer">МЗ КР</a></li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h3>Контакты</h3>
            <ul>
              <li>Международный факультет Медицины</li>
              <li>Международный колледж IT и бизнеса</li>
              <li>Бизнес школа Салымбекова</li>
            </ul>
          </div>
          <div className="footer-clinics">
            <h3>Наши клиники</h3>
            <ul>
              <li>Лазмед</li>
              <li>DOC university clinic</li>
              <li>DOC university hospital</li>
              <li>Дордой офтмальмик сервис</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Salymbekov University 2023</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  