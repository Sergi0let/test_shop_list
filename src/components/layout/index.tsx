import { Link } from 'react-router-dom';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />

      <hr />

      {/* The children prop is where the child routes will render */}
      {children}
    </div>
  );
};
export default Layout;
