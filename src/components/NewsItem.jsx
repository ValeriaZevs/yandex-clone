export const NewsItem = ({ icon, text, link }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
      <span>{icon}</span>
      <a href={link} style={{ textDecoration: 'none', color: '#000' }}>
        {text}
      </a>
    </div>
  );
};