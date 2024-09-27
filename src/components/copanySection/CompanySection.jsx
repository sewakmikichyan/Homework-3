import React from "react";
import companyImg1 from "../../assets/images/company_1.jpg";
import companyImg2 from "../../assets/images/company_2.jpg";
import companyImg3 from "../../assets/images/company_3.jpg";
import companyImg4 from "../../assets/images/company_4.jpg";
import Styles from "./CompanySection.module.css"

const createData = (img, description) => (
    {
        img: img,
        description: description
    }
)

const datas = [
    createData(companyImg1, "Дорожное строительство"),
    createData(companyImg2, "Благоустройство"),
    createData(companyImg3, "Аренда техники"),
    createData(companyImg4, "Асфальтирование дорог"),
];

const CompanySection = () => {
    return (
        <div className={Styles.section}>
            <div className="container">
                <div className={Styles.section__content}>
                    <div className="title-block">
                        <h3 className={Styles.main_title}>КАТЕГОРИИ</h3>
                    </div>
                    <div className={Styles.images_block}>
                        {
                            datas.map(({ img, description }) => {
                                return (
                                    <div className={Styles.card} key={Math.random()}>
                                        <img src={img} alt="IMAGE" />
                                        <h5 className={Styles.card_title}>{description}</h5>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanySection;