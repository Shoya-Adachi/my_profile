import React from "react";
import "../globals.css";

type PropsItem = {
  label: string;
  url: string;
};

type HeaderPropsType = {
  datas: PropsItem[];
  title: string;
};

export default function FooterNav({ datas, title }: HeaderPropsType) {
  return (
    <div className="footer animate__animated animate__fadeInDown animate__slower">
      <div className="footer-title">{title}</div>
      <div className="footer-nav">
        <nav>
          <ul>
            {datas.map((data, i) => {
              return <li key={i}>{data.label}</li>;
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
