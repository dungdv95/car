import { useState } from "react";
import style from "./Footer.module.css";
import {
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { arrowDownCircle } from "ionicons/icons";
import DropdownFooter from "./DropdownFooter";

function Footer() {
  const [emailVal, setEmailVal] = useState("");

  const [listFunction, setListFunction] = useState([
    {
      id: 1,
      namefunc: "Service",
      initOpen: true,
      arrFunc: [
        {
          text: "Buy Car",
          link: "/buy-car",
        },
        {
          text: "Sell Car",
          link: "/sell-car",
        },
        {
          text: "Dealer Login",
          link: "https://bidding.carsome.my/ucd/#/login",
        },
      ],
    },
    {
      id: 2,
      namefunc: "Support",
      initOpen: false,
      arrFunc: [
        {
          text: "Insurance",
          link: "/car-insurance",
        },
        {
          text: "FAQ",
          link: "/faqs",
        },
        {
          text: "Contact Us",
          link: "/contact_us",
        },
        {
          text: "Locate Us",
          link: "/locate-us",
        },
      ],
    },
    {
      id: 3,
      namefunc: "About Carsome",
      initOpen: false,
      arrFunc: [
        {
          text: "Our Story",
          link: "/about-us",
        },
        {
          text: "Buying from Carsome",
          link: "/buying-from-carsome",
        },
        {
          text: "Quality Assured Cars",
          link: "/quality-assured-cars",
        },
        {
          text: "Car Reviews",
          link: "/news/car-reviews",
        },
        {
          text: "Articles",
          link: "/news",
        },
        {
          text: "Careers",
          link: "https://www.careers-page.com/carsome",
        },
        {
          text: "Carsome Academy",
          link: "https://www.academy.carsome.my/",
        },
        {
          text: "Carsome Capital",
          link: "/capital",
        },
      ],
    },
    {
      id: 4,
      namefunc: "Partner Websites",
      initOpen: false,
      arrFunc: [
        {
          text: "WapCar",
          link: "https://www.wapcar.my/",
        },
        {
          text: "PropSocial",
          link: "https://propsocial.my/",
        },
        {
          text: "ZeroHero",
          link: "https://www.zerohero.my/",
        },
        {
          text: "CarTimes",
          link: "https://cartimes.com.sg/",
        },
        {
          text: "Carlist",
          link: "https://www.carlist.my/",
        },
      ],
    },
  ]);

  const onChangeEmail = (e) => {
    setEmailVal(e.target.value);
  };
  return (
    <div className={style.footer_total}>
      <div className={style.footer_total_content}>
        <div className={style.footer_content_header}>
          <div className={style.footer_content_header_left}>
            <div className={style.footer_content_header_left_logo}>
              <dl>
                <dt>
                  <a className={style.footer_header_link} href="/">
                    Carsome
                  </a>
                </dt>
                <dd className={style.footer_header_body}>
                  Carsome is Southeast Asia’s largest integrated car e-commerce
                  platform, with presence in Malaysia, Indonesia, Thailand and
                  Singapore.
                </dd>
                <dd className={style.footer_header_follow}>
                  <ul className={style.footer_header_follow_ul}>
                    <li className={style.footer_header_follow_fb}>
                      <a
                        className={style.footer_click_fb}
                        href="https://www.facebook.com/CarSome.my/"
                      >
                        <i className={style.footer_click_fb_icon}></i>
                      </a>
                    </li>
                    <li className={style.footer_header_follow_in}>
                      <a
                        href="https://www.instagram.com/carsomemalaysia/"
                        className={style.footer_click_in}
                      >
                        <i className={style.footer_click_in_icon}></i>
                      </a>
                    </li>
                    <li className={style.footer_header_follow_linkin}>
                      <a
                        href="https://www.linkedin.com/company/carsome/mycompany/"
                        className={style.footer_click_linkin}
                      >
                        <i className={style.footer_click_link_icon}></i>
                      </a>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>
          <div className={style.footer_content_header_right}>
            <div className={style.footer_right_top}>
              <p className={style.footer_right_top_title}>
                Subscribe to Our Newsletter
              </p>
              <p className={style.footer_right_top_subtitle}>
                Get the latest discounts, promotions & exclusive benefits
                delivered straight to your inbox.
              </p>
              <div className={style.footer_right_top_email}>
                <div className={style.footer_right_top_email_input}>
                  <input
                    type="text"
                    value={emailVal}
                    onChange={onChangeEmail}
                  />
                  <label
                    style={
                      emailVal.length > 0
                        ? { transform: "translateY(-60%) scale(.75)" }
                        : {}
                    }
                  >
                    Email address
                  </label>
                </div>
                <button className={style.footer_right_top_email_submit}>
                  Submit
                </button>
              </div>
            </div>
            <div className={style.footer_right_bottom}>
              {listFunction.map((item) => (
                <DropdownFooter key={item.id} listItem={item}></DropdownFooter>
              ))}
            </div>
          </div>
        </div>
        <div className={style.footer_content_mid}>
          <dl className={style.footer_content_mid_total}>
            <dt className={style.footer_content_mid_total_title}>
              <span>Download the App</span>
            </dt>
            <dd className={style.footer_content_mid_total_icon}>
              <a
                className={style.footer_content_mid_total_icon_chplay}
                target="_blank"
                href="https://carsome.page.link/oN6u"
              ></a>
              <a
                className={style.footer_content_mid_total_icon_appstore}
                target="_blank"
                href="https://carsome.page.link/hgRH"
              ></a>
            </dd>
          </dl>
        </div>
        <div className={style.footer_content_bottom}></div>
        <IonList>
          <IonItem>
            <IonSelect
              value="enable"
              interface="popover"
            >
              <IonSelectOption value="enable">ABC Enable</IonSelectOption>
              <IonSelectOption value="mute">Mute</IonSelectOption>
              <IonSelectOption value="mute_week">Mute for a week</IonSelectOption>
              <IonSelectOption value="mute_year">Mute for a year</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </div>
    </div>
  );
}
export default Footer;
