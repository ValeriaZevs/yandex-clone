export const SearchBlock = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '15px', color: '#0054dd', marginBottom: '10px' }}>
        <span>Видео</span> <span>Картинки</span> <span>Новости</span> <span>Карты</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h1 style={{ color: 'red', margin: 0 }}>Яндекс</h1>
        <input 
          type="text" 
          style={{ flexGrow: 1, padding: '10px', border: '2px solid #ffcc00' }} 
        />
        <button style={{ padding: '10px 20px', backgroundColor: '#ffcc00', border: 'none', fontWeight: 'bold' }}>
          Найти
        </button>
      </div>
      
      <p style={{ fontSize: '12px', color: 'gray', marginTop: '5px' }}>
        Найдётся всё. Например, <span style={{ color: 'black' }}>фаза луны сегодня</span>
      </p>
    </div>
  );
};