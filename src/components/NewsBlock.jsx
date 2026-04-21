import { NewsItem } from './NewsItem';

export const NewsBlock = ({ news, rates }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#0054dd' }}>
        Сейчас в СМИ <span style={{ color: 'gray', fontWeight: 'normal' }}>в Германии • Рекомендуем</span>
      </div>
      <div>
        {news.map((item) => (
          <NewsItem key={item.id} icon={item.icon} text={item.text} link={item.link} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '15px', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
        {rates.map((rate) => (
          <div key={rate.id}>
            {rate.currency} {rate.value} <span style={{ color: 'gray' }}>{rate.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};