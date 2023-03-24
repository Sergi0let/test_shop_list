import { Link } from 'react-router-dom';
import { headerData } from '../../seeds/links_data';
import NavBar from '../common/NavBar/NavBar';

export default function Header(): JSX.Element {
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link className="navbar-logo" to={'/'}>
            {headerData.title}
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
}
