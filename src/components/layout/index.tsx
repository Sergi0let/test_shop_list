import Footer from '../Footer';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="wrapper-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
