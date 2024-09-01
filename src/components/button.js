const Button = ({ onClick, children }) => {
  const buttonStyle = {
    margin: '15px',
    padding: '8px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: 'var(--ifm-color-primary)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontFamily: 'Titillium Web',
    fontWeight: 600,
  };

  const hoverStyle = {
    backgroundColor: 'var(--ifm-color-primary-darkest)',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
