export const Widget = ({ title, link, children }) => {
  return (
    <div style={{ width: '250px', marginBottom: '20px' }}>
      <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>
        <a href={link} style={{ color: '#0054dd', textDecoration: 'none' }}>
          {title}
        </a>
      </h3>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};