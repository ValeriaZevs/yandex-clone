export const Banner = ({ imgUrl, link }) => {
  return (
    <a href={link} style={{ display: 'block', margin: '20px 0' }}>
      <img src={imgUrl} alt="Рекламный баннер" style={{ width: '100%', height: '100px', objectFit: 'cover', backgroundColor: '#e0e0e0' }} />
    </a>
  );
};