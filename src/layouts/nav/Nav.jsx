import Styles from "./Nav.module.css";
import Logo from "../../assets/images/svg/LogoSVG";
import Tel from "../../assets/images/svg/TelSVG";

const links = [
    "Главная",
    "Услуги",
    "Цены",
    "Наши работы",
    "Контакты"
];

const Nav = () => {
    return (
        <nav className={Styles.main__nav}>
            <Logo />
            <ul className={Styles.navbar}>
                {
                    links.map((link, i) => {
                        return (
                            <li className="navbar-item" key={i}>
                                <span className="navbar-link">{link}</span>
                            </li>
                        );
                    })
                }
            </ul>
            <div className={Styles["contact-block"]}>
                <Tel />
                <div className={Styles["description_contact-block"]}>
                    + 8 921 123-12-12
                    <a href="tel: +8921123-12-12">Заказ звонка</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;