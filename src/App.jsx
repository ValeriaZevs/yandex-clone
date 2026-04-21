import { newsData, ratesData } from './data/mockData';
import { NewsBlock } from './components/NewsBlock';
import { SearchBlock } from './components/SearchBlock';
import { Banner } from './components/Banner';
import { Widget } from './components/Widget';

function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
      
      <header>
        <NewsBlock news={newsData} rates={ratesData} />
      </header>

      <main>
        <SearchBlock />
        <Banner imgUrl="https://via.placeholder.com/900x100?text=Форсаж+Баннер" link="#banner-link" />
      </main>

      <footer style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '30px' }}>
        
        <Widget title="Погода" link="#weather">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '24px' }}>🌧️ +17°</span>
            <span style={{ fontSize: '12px', color: 'gray' }}>Утром +17, <br/>днём +20</span>
          </div>
        </Widget>

        <Widget title="Карта Германии" link="#map">
          <p>Расписания</p>
        </Widget>

        <Widget title="Эфир" link="#live">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
            <li>▶️ Управление как искусство <span style={{ color: 'gray' }}>Успех</span></li>
            <li>▶️ Ночь. Мир в это время <span style={{ color: 'gray' }}>earthTV</span></li>
          </ul>
        </Widget>

        <Widget title="Посещаемое" link="#visited">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
            <li><b>Недвижимость</b> — о сталинках</li>
            <li><b>Маркет</b> — люстры</li>
          </ul>
        </Widget>

      </footer>

    </div>
  );
}

export default App;