import Logo from "../../components/basic/logo/Logo";
import Styles from "./Footer.module.css";
import YoutubeSVG from "../../assets/images/svg/YoutubeSVG";
import TictokSVG from "../../assets/images/svg/TictokSVG";
import TwiterSVG from "../../assets/images/svg/TwiterSVG";

const arr = new Array(3);
arr.fill(null);

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={Styles.footer__content}>
                    <div className={Styles.footer_links}>
                        <Logo />
                        <div className={Styles.media}>
                            <a href="https://tictok.com">
                                <TictokSVG />
                            </a>
                            <a href="https://youtube.com">
                                <YoutubeSVG />
                            </a>
                            <a href="https://twiter.com">
                                <TwiterSVG />
                            </a>
                        </div>
                    </div>
                    <div className={Styles.footer_lists}>
                        {
                            arr.map((v, i) => {
                                return (
                                    <div className={Styles.list} key={i}>
                                        <h4>О компании</h4>
                                        <ul>
                                            <li>
                                                <a href="#">История компании</a>
                                            </li>
                                            <li>
                                                <a href="#">История компании</a>
                                            </li>
                                            <li>
                                                <a href="#">История компании</a>
                                            </li>
                                            <li>
                                                <a href="#">История компании</a>
                                            </li>
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;