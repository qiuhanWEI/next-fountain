import Header from "./Header";
import "../styles.scss";

const Layout = props => (
    <div className="main-wrapper">
        <Header />
        {props.children}
    </div>
);

export default Layout;
