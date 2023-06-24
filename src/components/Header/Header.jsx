import './Header.scss';

export default function Header() {
  return (
    <header className="headerContainer">
      <div className="header_item">
        <a href="#">Home</a>
      </div>
      <div className="header_item">
        <a href="#">Contractors</a>
      </div>
      <div className="header_item">
        <a href="#">Cart</a>
      </div>
    </header>
  );
}
