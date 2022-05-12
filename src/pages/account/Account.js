import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonCard,
  IonIcon,
} from "@ionic/react";
import style from "./Account.module.css";
import avatar from "../../img/avatar.jpg";
import {
  rocketOutline,
  carOutline,
  calendarOutline,
  heartCircleOutline,
  documentTextOutline,
  ticketOutline,
  alertCircleOutline,
  callOutline,
  settingsOutline,
} from "ionicons/icons";

const Account = () => {
  return (
    <IonPage>
      <IonHeader className={style.header_info}>
        {/* <div className={style.header_image}> */}
        <IonAvatar className={style.avatar_custom}>
          <IonImg src={avatar} />
        </IonAvatar>
        {/* </div> */}
      </IonHeader>
      <h3 className={style.name_user}>
        <strong>Dũng Dương</strong>
      </h3>
      <IonContent fullscreen className={style.content_custom}>
        <IonCard>
          <div className={style.model_sub_content}>
            <div className={style.model_sub_make_model}>
              <div className={style.make_model_tree}>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={calendarOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>Appointments</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={rocketOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>Test Drivers</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div
                  className={`${style.make_model_tree_item} ${style.make_model_tree_item_underline}`}
                >
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon className={style.icon_custom} icon={carOutline} />
                    <div className={style.make_model_tree_item_title}>
                      <span>Orders</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={heartCircleOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>My Favorites</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={documentTextOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>Browsing History</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={ticketOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>My Voucher</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonCard>

        <IonCard>
          <div className={style.model_sub_content}>
            <div className={style.model_sub_make_model}>
              <div className={style.make_model_tree}>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={alertCircleOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>FAQ</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon className={style.icon_custom} icon={callOutline} />
                    <div className={style.make_model_tree_item_title}>
                      <span>Contact Us</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <strong>1-800-82-3388</strong>
                      {/* <i className={style.make_model_tree_item_arrows_down}></i> */}
                    </div>
                  </div>
                </div>
                {/* tree item */}
                <div className={style.make_model_tree_item}>
                  <div className={style.make_model_tree_item_header}>
                    <IonIcon
                      className={style.icon_custom}
                      icon={settingsOutline}
                    />
                    <div className={style.make_model_tree_item_title}>
                      <span>Settings</span>
                    </div>
                    <div className={style.make_model_tree_item_arrows}>
                      <i className={style.make_model_tree_item_arrows_down}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Account;
