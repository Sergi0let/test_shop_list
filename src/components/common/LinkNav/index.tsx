import { NavLink } from 'react-router-dom';

type LinkNavProps = {
  url: string;
  title: string;
};

const LinkNav: React.FC<LinkNavProps> = ({ url, title }) => {
  return (
    <li className="navbar-item">
      <NavLink className="navbar-link" to={url}>
        {title}
      </NavLink>
    </li>
  );
};

export default LinkNav;
