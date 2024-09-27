import React from "react";
import Styles from "./TechnicySection.module.css";
import Tractor1 from "../../assets/images/tractors/tractor1.png";
import Tractor2 from "../../assets/images/tractors/tractor2.png";
import Tractor3 from "../../assets/images/tractors/tractor3.png";
import Tractor4 from "../../assets/images/tractors/tractor4.png";
import Tractor5 from "../../assets/images/tractors/tractor5.png";
import Tractor6 from "../../assets/images/tractors/tractor6.png";
import Tractor7 from "../../assets/images/tractors/tractor7.png";
import Tractor8 from "../../assets/images/tractors/tractor8.png";

const createData = (img, text, key) => (
    {
        img: img,
        text: text,
        key: key
    }
)

const cards = [
    createData(Tractor1, "укладчик асфальтобетона", 0),
    createData(Tractor2, "Грейдер", 1),
    createData(Tractor3, "Погрузчик амкадор", 2),
    createData(Tractor4, "Минипогрузчик", 3),
    createData(Tractor5, "4 катка", 4),
    createData(Tractor6, "4 т каток", 5),
    createData(Tractor7, "Тонар", 6),
    createData(Tractor8, "Тралл", 7),
];

const TechnicySection = () => {
    return (
        <section className={Styles.section}>
            <div className="container">
                <div className={Styles.section__content}>
                    <div className="title-block">
                        <h3 className={Styles.main_title}>НАша ТЕХНИКА</h3>
                    </div>
                    <div className={Styles.cards_block}>
                        {
                            cards.map(card => {
                                return (
                                    <div className={Styles.card} key={card.key}>
                                        <img src={card.img} alt="TRACTOR" />
                                        <h5 className={Styles.card_text}>{card.text}</h5>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnicySection;