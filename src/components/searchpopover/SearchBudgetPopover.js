import React, { useEffect, useRef, useState } from "react";
import style from "./SearchBudgetPopover.module.css";
import {
    IonRange
  } from "@ionic/react";


function SearchBudgetPopover() {
    const [rangeValue,setRangeValue] = useState()
    const rangeRef = useRef();
    
    useEffect(() => {
        // console.log(rangeRef.current)
        rangeRef.current.value = {lower:0,upper:280000}
    }, []);

  return (
    <div className={style.popover_content}>
      <div className={style.popover_content_wraper}>
        <div className={style.popover_content_budget}>
          <div className={style.popover_content_budget_header}>
            <p>Full &amp; Monthly Payment(RM)</p>
          </div>

          <div className={style.popover_content_budget_range}>
            <div className={style.popover_content_budget_range_line}>
              <p className={style.popover_content_budget_range_line_p}>
                RM 97,000
              </p>
              <p className={style.popover_content_budget_range_line_p}>
                RM 280,000
              </p>
            </div>

            <div className={style.popover_budget_line}>
                <IonRange style={{padding:"unset"}} ref={rangeRef} dualKnobs={true} min={0} max={280000} step={3} onIonChange={e => setRangeValue(e.detail.value)} />
            </div>

            <div className={style.popover_content_budget_range_line}>
              <p className={style.popover_content_budget_range_line_p}>
                1,063/mo
              </p>
              <p className={style.popover_content_budget_range_line_p}>
                3,068/mo
              </p>
            </div>
          </div>

          <div className={style.popover_content_budget_bottom}>
            <button className={style.popover_content_budget_bottom_btn}>
              <span>Under 30,000</span>
            </button>
            <button className={style.popover_content_budget_bottom_btn}>
              <span>30,000-50,000</span>
            </button>
            <button className={style.popover_content_budget_bottom_btn}>
              <span>50,000-80,000</span>
            </button>
            <button className={style.popover_content_budget_bottom_btn}>
              <span>80,000-100,000</span>
            </button>
            <button className={style.popover_content_budget_bottom_btn}>
              <span>Above 100,000</span>
            </button>
          </div>
        </div>
      </div>
      <div className={style.popover_content_bottom}>
        <button className={style.popover_content_bottom_btn}>
          Apply (41 Cars)
        </button>
      </div>
    </div>
  );
}
export default SearchBudgetPopover;
