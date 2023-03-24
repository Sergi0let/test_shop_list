import LinkNav from '../LinkNav';
import { linksData } from '../../../seeds/links_data';
import { LinkNavProps } from '../../../entities/NavLink';
import { useLocation } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul className="navbar-list">
        {linksData.map((link: LinkNavProps) => (
          <li key={link.id} className="navbar-item">
            <LinkNav pathname={pathname} url={link.url} title={link.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
