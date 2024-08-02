"use client";

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import "../globals.css";
import "./top.css";
import WorkCard from "../components/card";
import { useForm } from "react-hook-form";
import "animate.css";
import TextButton from "../components/text_button";
import { useRouter } from "next/navigation";
import TextIconButton from "../components/text_icon_button";

const cards = [
  { title: "未定1", content: "今作成中です", url: "card_image.png" },
  { title: "未定2", content: "今作成中です", url: "card_image.png" },
  { title: "未定3", content: "今作成中です", url: "card_image.png" },
];

export default function Page() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => console.log(data);

  const movePage = (url: string) => {
    router.push(url);
  };

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
        <div className="top-text animate__animated animate__fadeInDown animate__slower">
          OTA SHOYA
        </div>
      </section>
      <section className="profile-area">
        <div className="section-profile-title animate__animated animate__fadeInLeft animate__delay-2s">
          PROFILE
        </div>
        <div className="profile-content">
          <div className="profile-image animate__animated animate__fadeInLeft animate__delay-2s z-n1"></div>
          <div className="profile-summary animate__animated animate__fadeInRight animate__delay-2s">
            <div className="name">Ota Shoya</div>
            <ul>
              <li>System Engineer</li>
            </ul>
            <TextIconButton
              label="See more..."
              type="button"
              btnUi="profile_btn"
              iconUi="profile_btn_icon"
              imgUrl="/arrow-right-circle.svg"
              handleClick={() => movePage("/profile")}
            />
          </div>
        </div>
      </section>
      <section className="work-area">
        <div className="section-title animate__animated animate__fadeInLeft animate__delay-3s">
          WORK
        </div>
        <div className="work-content animate__animated animate__fadeInRight animate__delay-3s">
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
        <div className="section-title animate__animated animate__fadeInLeft animate__delay-4s">
          CONTACT
        </div>
        <div className="form-content animate__animated animate__fadeInRight animate__delay-4s">
          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-label">Name</div>
              <input className="form-field" id="name" {...register("name")} />
            </div>
            <div>
              <div className="form-label">Company Name</div>
              <input
                className="form-field"
                id="company_name"
                {...register("company_name")}
              />
            </div>
            <div>
              <div className="form-label">Phone number</div>
              <input
                className="form-field"
                id="phone_number"
                {...register("phone_number")}
              />
            </div>
            <div>
              <div className="form-label">E-mail</div>
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
            <TextIconButton
              label="Send"
              type="submit"
              btnUi="form-btn"
              iconUi="form_btn_icon"
              imgUrl="/send.svg"
            />
          </form>
        </div>
      </section>
    </>
  );
}
