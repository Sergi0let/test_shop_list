import LinkNav from '../common/LinkNav/LinkNav';
import { linksData } from '../../seeds/links_data';
import { LinkNavProps } from '../../entities/NavLink';
import './index.scss';

export default function Header() {
  return (
    <header className="header">
      <p className="navbar-logo">Title</p>
      <nav>
        <ul className="navbar-list">
          {linksData.map((link: LinkNavProps) => (
            <LinkNav key={link.id} url={link.url} title={link.title} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
