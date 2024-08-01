import React from "react";
import "../globals.css";

type PropsItem = {
  label: string;
  url: string;
};

type HeaderPropsType = {
  datas: PropsItem[];
};

export default function HeaderNav({ datas }: HeaderPropsType) {
  return (
    <nav className="header">
      <ul>
        {datas.map((data, i) => {
          return <li key={i}>{data.label}</li>;
        })}
      </ul>
    </nav>
  );
}
