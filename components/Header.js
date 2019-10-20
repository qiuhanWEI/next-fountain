import Link from "next/link";
import { useRouter } from "next/router";

const MENUS = [
    {
        name: "HOME",
        path: "index"
    },
    {
        name: "PRODUCTS",
        path: "products"
    },
    {
        name: "SERVICES",
        path: "solutions"
    },
    {
        name: "PROJECTS",
        path: "project"
    },
    {
        name: "ABOUT",
        path: "about"
    },
    {
        name: "CONTACT US",
        path: "contact"
    }
];

const isAvtive = path => {
    const router = useRouter();
    return path.indexOf(router.query.path) > -1;
};

const Header = () => (
    <div>
        <div className="header">
            <div className="logoLink">T.Y. Fountain</div>
            <ul className="nav">
                <li className="navItem">
                    {MENUS.map((props, ind) => {
                        const active = isAvtive(props.path) ? "active" : "";
                        return (
                            <Link
                                href={`/post/[path]`}
                                as={`/post/${props.path}`}
                                key={ind}
                            >
                                <a className={`navItemLink ${active}`}>
                                    <span className="menuTitle">
                                        {props.name}
                                    </span>
                                </a>
                            </Link>
                        );
                    })}
                </li>
            </ul>
        </div>
        <style jsx>{`
            .header {
                margin: 0 auto;
                padding: 20px 0;
                justify-content: space-between;
                position: fixed;
                right: 0;
                left: 0;
                z-index: 999;
                min-width: 1200px;
                background-color: #fff;
                display: flex;
                box-shadow: 1px 0 4px rgba(0, 0, 0, 0.15);
            }
            .logoLink {
                color: #3080fe;
                font-size: 30px;
                font-weight: 500;
                text-decoration: none;
                margin: 0 20px;
            }
            .nav {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .navItem {
                height: 40px;
                line-height: 40px;
                margin-left: 20px;
            }
            .navItemLink {
                display: inline-block;
                padding: 0 20px;
                text-decoration: none;
                color: #3080fe;
            }
            .active {
                border-bottom: 2px solid;
            }
            .menuTitle {
                font-size: 20px;
                font-weight: 400;
            }
        `}</style>
    </div>
);

export default Header;
