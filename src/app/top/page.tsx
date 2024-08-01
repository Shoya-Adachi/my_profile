"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import "../globals.css";
import "./top.css";
import WorkCard from "../components/card";
import { useForm } from "react-hook-form";

const cards = [
  { title: "未定1", content: "今作成中です", url: "card_image.png" },
  { title: "未定2", content: "今作成中です", url: "card_image.png" },
  { title: "未定3", content: "今作成中です", url: "card_image.png" },
];

export default function Page() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <section className="header-area">
        <Image
          src="/top_image.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className="z-n1"
        />
        <div className="top-text">OTA SHOYA</div>ss
      </section>
      <section className="profile-area">
        <div className="section-profile-title">PROFILE</div>
        <div className="profile-content">
          <Image src="/profile_image.png" alt="" width={800} height={800} />
          <div className="profile-summary">
            <div className="name">Ota Shoya</div>
            <ul>
              <li>26 years old</li>
              <li>System Engineer</li>
            </ul>
            <a>See more...</a>
          </div>
        </div>
      </section>
      <section className="work-area">
        <div className="section-title">WORK</div>
        <div className="work-content">
          {cards.map((card) => {
            return (
              <WorkCard
                key={card.title}
                title={card.title}
                content={card.content}
                url={card.url}
              />
            );
          })}
        </div>
      </section>
      <section className="contact-area">
        <div className="section-title">CONTACT</div>
        <div className="form-content">
          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-label">Name</div>
              <input className="form-field" id="name" {...register("name")} />
            </div>
            <div>
              <div className="form-label">Company Name</div>
              <input
                className="form-field"
                id="companyName"
                {...register("comanyName")}
              />
            </div>
            <div>
              <div className="form-label">Phone number</div>
              <input
                className="form-field"
                id="phoneNumber"
                {...register("phoneNumber")}
              />
            </div>
            <div>
              <div className="form-label">e-mail</div>
              <input
                className="form-field"
                id="e-mail"
                {...register("e-mail")}
              />
            </div>
            <div>
              <div className="form-label">Content</div>
              <input
                className="form-field"
                id="content"
                {...register("content")}
              />
            </div>
            <button className="form-button" type="submit">send</button>
          </form>
        </div>
      </section>
    </>
  );
}
