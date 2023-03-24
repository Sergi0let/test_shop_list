import { NavLink } from 'react-router-dom';
import { LinkNavProps } from '../../../entities/NavLink';

const LinkNav: React.FC<LinkNavProps> = ({ url, title, pathname }) => {
  const activeStyle = {
    color: '#ffbc04',
  };

  return (
    <NavLink
      className="navbar-link"
      to={url}
      style={pathname === url ? activeStyle : {}}
    >
      {title}
    </NavLink>
  );
};

export default LinkNav;
