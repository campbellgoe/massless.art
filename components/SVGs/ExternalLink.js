const ExternalLink = ({ href, children, colour = 'black' }) =>
  <a href={href} target="_blank" rel="noreferrer noopener">
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style={{color: colour, width: '1em', verticalAlign: 'bottom', marginLeft: '4px', marginBottom: '2px' }}>
      <path className="shp0" d="M76 16L17 16L17 112L111 112L111 52" />
      <path className="shp1" d="M121 7L89 16L113 38L121 7Z" />
      <path className="shp1" d="M46 82L115 12L99 19C99 19 108.88 27.72 109 28C109.13 28.28 115 12 115 12" />
      <style jsx>{`
        .shp0, .shp1 {
          fill: none;
          stroke: currentColor;
        }
        .shp0 {
          stroke-width: 12;
        } 
        .shp1 {
          stroke-width: 8;
        }
      `}</style>
    </svg>
  </a>;

export default ExternalLink;