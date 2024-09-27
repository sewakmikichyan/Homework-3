import LocationSVG from "../../assets/images/svg/LocationSVG";
import MailSVG from "../../assets/images/svg/MailSVG";
import InfoSVG from "../../assets/images/svg/InfoSVG";
import Nav from "../nav/Nav";
import Styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={Styles.header}>
            <div className="container">
                <div className={Styles.header__content}>
                    <div className={Styles.part}>
                        <div>
                            <InfoSVG />
                            Информация
                        </div>
                        <span className={Styles["part-devider"]}></span>
                        <div>
                            О компании
                        </div>
                    </div>
                    <div className={Styles.part}>
                        <div>
                            <LocationSVG />
                            Адрес рыбатекст
                        </div>
                        <span className={Styles["part-devider"]}></span>
                        <div>
                            <MailSVG />
                            Мейл рыбатекст
                        </div>
                    </div>
                </div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;