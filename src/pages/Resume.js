import {
  Call,
  Email,
  Gamepad,
  Games,
  GamesRounded,
  Javascript,
  LocationOn,
  MenuBook,
  Sports,
  SportsBasketball,
} from "@mui/icons-material";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useTranslation } from "react-i18next";

import { FaJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import ReactIcon from "../components/icons/ReactIcon";
import Nuxt from "../components/icons/Nuxt";
import Redux from "../components/icons/Redux";
import TypeScript from "../components/icons/TypeScript";
import Node from "../components/icons/Node";

export default function () {
  const { t } = useTranslation();
  return (
    <div className="w-100 px-4 pt-5 ">
      <header className="d-flex ">
        <section className="h-350 w-45 bg-Whiskey d-flex flex-column align-items-center pt-80px ps-80">
          <h1 className=" big-h1 dosis-700 mb-4">MUHAMMAD REZA ZARAINEH</h1>
          <h1 className="text-left w-100">WEB DEVELOPER</h1>
        </section>
        <section className="h-350 px-5 w-55 d-flex  bg-Shark pt-96px">
          <img className="photo-box" src="/images/profile/personal.png" />
          <div className="pe-4 ps-5 w-100 py-3">
            <h2 className="color-white pb-1 dosis-500 w-100  border-color-whiskey">
              Contacts
            </h2>
            <div className="d-flex flex-column row-10px pt-2">
              <section className="d-flex align-items-center">
                <Call className="icon-sm fill-whiskey ms-2" />
                <span className="caption color-white dosis-400">
                  + 98 ( 0 ) 9032446913
                </span>
              </section>
              <section>
                <Email className="icon-sm fill-whiskey ms-2" />
                <span className="caption color-white dosis-400">
                  mrzar@gmail.com
                </span>
              </section>
              <section>
                <LocationOn className="icon-sm fill-whiskey ms-2" />
                <span className="caption color-white dosis-400">
                  Iran , Kermanshah
                </span>
              </section>
            </div>
          </div>
        </section>
      </header>
      <main className="d-flex bg-Mischka min-height-400 pt-4 ">
        <article className="w-50 ps-80">
          <div className="card">
            <header className="title dosis-700 d-flex column-30px">
              MY EXPRIENCE
              <span className="divider "></span>
            </header>
            <main>
              <header className="d-flex flex-column my-3">
                <span className="title-medium dosis-600">WEB DEVELOPER </span>
                <span className="title-small dosis-600">2022-2023 </span>
              </header>
              <div className="w-100 body dosis-400">
                NOANDISH SOFTWARE DEVELOPER COMPANY
                <br />
                _ RAAD https://raadconnections.ir/ ,
                <br />
                My first project was printer-web written on The React that
                ordered by Raad company. web-application had user panel and
                admin panel.
                <br />
                User-panel: The most important parts of the user panel are:
                editor and create project & list of project. editor created for
                Implementation process of creation ,selection ,deletion, merge
                ,split ,adding word , symbol ,and another operations on thing
                named CustomLabel. ScreenShot:
                https://drive.google.com/file/d/1Z0g5wiacK5TFGu5zB1ijAKJJvgJlCN8w/view
              </div>
            </main>
            <main>
              <header className="d-flex flex-column my-3">
                <span className="title-medium dosis-600">WEB DEVELOPER </span>
                <span className="title-small dosis-600">2023-2023/03 </span>
              </header>
              <div className="w-100 body dosis-400">
                NOANDISH SOFTWARE DEVELOPER COMPANY
                <br />
                _ https://acardeon.ir/new ,
                <br />
                My second project was acardeon it provides services to artists
                and people who buy their tickets. my task was Adding new Design
                to its and web-app written on The Nuxt .
                <br />
                web-app has features likes Organizing an event by an artist or a
                music venue that can find each other on the site and regular
                user can buy their tickets
              </div>
            </main>
          </div>
          <div className="card">
            <header className="title dosis-700 d-flex column-30px">
              LANGUAGES
              <span className="divider "></span>
            </header>
            <main>
              <section className="d-flex align-items-center my-4">
                <span className="title-small dosis-600">PERSIAN </span>
                <div className="prosess-bar me-4">
                  <span className="prosess w-100"></span>
                </div>
              </section>
              <section className="d-flex align-items-center mb-4">
                <span className="title-small dosis-600">ENGLISH </span>
                <div className="prosess-bar me-4">
                  <span className="prosess w-75"></span>
                </div>
              </section>
            </main>
          </div>
        </article>
        <article className="w-50">
          <div className="card">
            <header className="title dosis-700 d-flex column-30px">
              PERSONAL SKILLS
              <span className="divider "></span>
            </header>
            <main className="d-flex pt-4">
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      pathColor: "#CFB42F",
                      textColor: "#CFB42F",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <FaJs
                    style={{
                      fill: "#CFB42F",
                      width: 30,
                      height: 30,
                    }}
                  />{" "}
                </span>
              </section>
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={100}
                    text={`${100}%`}
                    styles={buildStyles({
                      pathColor: "#212529",
                      textColor: "#212529",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <FaCss3
                    style={{
                      // fill: "#CFB42F",
                      width: 30,
                      height: 30,
                    }}
                  />{" "}
                </span>
              </section>
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={100}
                    text={`${100}%`}
                    styles={buildStyles({
                      pathColor: "#61DAFB",
                      textColor: "#61DAFB",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <ReactIcon />
                </span>
              </section>
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={90}
                    text={`${90}%`}
                    styles={buildStyles({
                      pathColor: "#00DC82",
                      textColor: "#00DC82",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <Nuxt />
                </span>
              </section>
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      pathColor: "#764ABC",
                      textColor: "#764ABC",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <Redux />
                </span>
              </section>
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={95}
                    text={`${95}%`}
                    styles={buildStyles({
                      pathColor: "#3178C6",
                      textColor: "#3178C6",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <TypeScript />
                </span>
              </section>
              <section className="d-flex flex-column align-items-center ms-3">
                <div style={{ width: 70, height: 70 }}>
                  <CircularProgressbar
                    value={60}
                    text={`${60}%`}
                    styles={buildStyles({
                      pathColor: "#43893F",
                      textColor: "#43893F",
                      trailColor: "#c8c8ca",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
                <span className="title-small dosis-600">
                  <Node />
                </span>
              </section>
            </main>
            <main className="mt-5 d-flex flex-column">
              <span className="title-small dosis-600 mb-4">RestApi </span>
              <span className="title-small dosis-600 mb-4">DesignPatters </span>
              <span className="title-small dosis-600 mb-4">OOP </span>
            </main>
          </div>
          <div className="card">
            <header className="title dosis-700 d-flex column-30px">
              MY EDUCATION
              <span className="divider "></span>
            </header>
            <main>
              <header className="d-flex flex-column my-3">
                <span className="title-medium dosis-600">
                  Software Associate
                </span>
                <span className="title-small dosis-600">2021-2024 </span>
              </header>
              <div className="w-100 body dosis-400">
                Technical university in Kermanshah
              </div>
            </main>
          </div>
          <div className="card">
            <header className="title dosis-700 d-flex column-30px">
              INTERSET
              <span className="divider "></span>
            </header>
            <main>
              <section className="d-flex align-items-center my-4">
                <MenuBook className="ms-4" />
                <span className="title-small dosis-600">Learning </span>
              </section>
              <section className="d-flex align-items-center my-4">
                <GamesRounded className="ms-4" />

                <span className="title-small dosis-600">Game </span>
              </section>
              <section className="d-flex align-items-center my-4">
                <SportsBasketball className="ms-4" />
                <span className="title-small dosis-600">Sports </span>
              </section>
              <section className="d-flex align-items-center my-4">
                <Javascript className="ms-4" />
                <span className="title-small dosis-600">JavaScript </span>
              </section>
            </main>
          </div>
        </article>
      </main>
    </div>
  );
}
