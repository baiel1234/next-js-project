// pages/index.js
import Header from '../components/Header';
import SliderComponent from '../components/SliderComponent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <SliderComponent />
      <div className="sections-container">
  <div className="section">
    <h2>Лучшие преподаватели</h2>
    <p>В университете трудятся самые квалифицированные преподаватели</p>
  </div>
  <div className="section">
    <h2>Современный университет</h2>
    <p>Университет оснащен самыми передовыми оборудованиями для закрепления учебных материалов</p>
  </div>
  <div className="section">
    <h2>Клинические базы</h2>
    <p>Университет имеет как собственные так и аффилированные клинические базы, где студенты проходят практику</p>
  </div>
</div>
<div className="welcome-section">
  <h2>Добро пожаловать, Абитуриент-2023!</h2>
  <p>Выбирая нас - вы выбираете лучшее качество образования!</p>
  <a href="#" className="abiturient-link">АБИТУРИЕНТ ОНЛАЙН</a>
</div>
      <div className="founder-section">
        <img src="/founder.jpg" alt="Учредитель" />
        <div>
          <h2>Обращение учредителя</h2>
          <p>
            В видении каждого кыргызстанца, который питает надежду на лучшее, Кыргызстан к 2030 году станет страной конкурентоспособной, с диверсифицированной экономикой, высокими доходами на душу населения, полноправным и активным членом глобального сообщества. Для достижения этого необходимо делать упор на главное богатство - человеческие ресурсы.
          </p>
          <p>
            Движущей силой экономики, просвещенной элитой являются ученые, преподаватели, инвесторы, предприниматели и рабочие, которые создают знания, финансируют и развивают бизнес, обеспечивают экономику рабочей силой и создают фундамент конкурентоспособности на глобальном уровне.
          </p>
        </div>
      </div>
      <div className="news-section">
        <h2>Последние новости</h2>
        <div className="news-grid">
          <div className="news-item">
            <h3>Открытие нового кампуса</h3>
            <p>Сегодня открылся новый кампус университета, оснащенный по последнему слову техники.</p>
          </div>
          <div className="news-item">
            <h3>Партнерство с ведущими университетами</h3>
            <p>Университет заключил партнерские соглашения с ведущими мировыми университетами для обмена знаниями и студентами.</p>
          </div>
          <div className="news-item">
            <h3>Новая программа обучения</h3>
            <p>Введена новая программа обучения, направленная на подготовку специалистов в области медицины и техники.</p>
          </div>
        </div>
      </div>
      <div className="staff-section">
        <h2>Сотрудники университета</h2>
        <p>В Салымбеков Университет трудятся профессионалы своего дела, доктора медицинских наук, инновационные молодые преподаватели и многое другое.</p>
        <a href="#" className="btn-details">Подробнее</a>
      </div>
      <div className="section with-photo">
  <div className="section-content">
    <h2>Материально-техническая база</h2>
    <p>Позволяет студентам качественно получать образование в новом симулятивно-муляжном кабинете, в компьютерных классах. Студенты имеют доступ к более 140 000 книг онлайн и твердом переплете.</p>
  </div>
  <div className="section-photo">
    <img src="https://salymbekov.com/wp-content/uploads/2021/03/c0b9389.jpg" alt="Фотография базы" />
  </div>
</div>

      <div className="partners-section">
        <h2>Наши партнеры</h2>
        <div className="partners-logos">
          <img src="https://salymbekov.com/wp-content/uploads/2021/01/Inha-university.png" alt="Партнер 1" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/01/fpi-logo.png" alt="Партнер 2" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/gaziosmanpasa-hastanesi.png" alt="Партнер 3" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/01/cambridge_university_press_logo.svg_-1024x216.png" alt="Партнер 4" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/01/logo-topnews.png" alt="Партнер 5" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/memorial-hospital-logo.png" alt="Партнер 6" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/istinye-university-logo_0-1024x375.png" alt="Партнер 7" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/inha-college-logo.png" alt="Партнер 8" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/sudmedjekspert.png" alt="Партнер 9" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/morg.png" alt="Партнер 10" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2021/02/liv-hospital-logo-horizontal.png" alt="Партнер 11" className="partner-logo" />
          <img src="https://salymbekov.com/wp-content/uploads/2023/02/lincoln-university-college-linkoln-universitet-logo.png" alt="Партнер 12" className="partner-logo" />
        </div>
      </div>
      <div className="contacts-section">
        <h2>Contacts</h2>
        <div className="contacts-info">
          <p><strong>Телефон:</strong> +996 (312) 658-538</p>
          <p><strong>Электронная почта:</strong> info@salymbekov.com</p>
          <p><strong>Адрес:</strong> 720054, ул. Фучика 3,
          Бишкек, Кыргызстан</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};




