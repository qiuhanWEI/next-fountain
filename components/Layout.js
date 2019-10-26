import Header from './Header';
import Footer from './Footer';
import '../styles.scss';

const Layout = props => (
    <div className="main-wrapper">
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
