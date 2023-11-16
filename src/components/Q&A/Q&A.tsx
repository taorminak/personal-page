import { useState } from "react";
import "./Q&A.css";
import webpack from "../../assets/images/webpack-original.svg";
import vue from "../../assets/images/vuejs-original.svg";
import html5 from "../../assets/images/html5-original.svg";
import css3 from "../../assets/images/css3-original.svg";
import sass from "../../assets/images/sass-original.svg";
import eslint from "../../assets/images/eslint-original.svg";
import bootstrap from "../../assets/images/bootstrap-original.svg";
import figma from "../../assets/images/figma-original.svg";
import js from "../../assets/images/javascript-original.svg";
import ts from "../../assets/images/typescript-original.svg";
import reactjs from "../../assets/images/react-original.svg";
import github from "../../assets/images/github-original.svg";
import git from "../../assets/images/git-original.svg";
import vscode from "../../assets/images/vscode-original.svg";
import trello from "../../assets/images/trello-plain.svg";

interface Sections {
  education: { isOpen: boolean };
  skills: { isOpen: boolean };
  me: { isOpen: boolean };
  languages: { isOpen: boolean };
}

function QAndA() {
  const [sections, setSections] = useState<Sections>({
    me: { isOpen: false },
    skills: { isOpen: false },
    education: { isOpen: false },
    languages: { isOpen: false },
  });

  const handleSectionChange = (id: keyof Sections, isOpen: boolean) => {
    setSections((prevSections) => ({
      ...prevSections,
      [id]: { isOpen },
    }));
  };

  return (
    <div className="accordion">
      <div className="accordion_container">
        <h1 className="accordion_title">Q&A</h1>
        <h2 className="accordion_subtitle">
          Here you can find some information about...
        </h2>

        {Object.keys(sections).map((id) => {
          const key = id as keyof Sections;

          return (
            <label key={key} htmlFor={key} id={`btn${key}`}>
              <div
                className={`container__html ${
                  sections[key].isOpen ? "active" : ""
                }`}
                onMouseEnter={() => handleSectionChange(key, true)}
                onMouseLeave={() => handleSectionChange(key, false)}
                onTouchStart={() => handleSectionChange(key, !sections[key].isOpen)}
              >
                <input
                  type="radio"
                  name="about-parts"
                  id={key}
                  checked={sections[key].isOpen}
                  onChange={() =>
                    handleSectionChange(key, !sections[key].isOpen)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionChange(key, !sections[key].isOpen);
                  }}
                />
                <div className="container_part">
                  <span className="container_subtitle">{`...${key}`}</span>
                  <i className="fa-sharp fa-solid fa-plus"></i>
                  {sections[key].isOpen && (
                    <span className="container_text img__html">
                      <div>
                        {key === "me" && (
                          <>
                            <p>
                              Passionate about programming. Fast-learner,
                              adherent of the idea of the long-life learning.
                              Adaptable and creative.
                            </p>
                            <p>
                              I like to spend time productively and hope to
                              significantly expand the list of frameworks and
                              programming languages I know over time, as well as
                              to implement some inspiring high-quality projects.
                            </p>
                          </>
                        )}
                        {key === "skills" && (
                          <div>
                            <img
                              src={html5}
                              alt="HTML5"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img src={css3} alt="CSS3" width="40" height="40" />
                            &nbsp;
                            <img src={sass} alt="SASS" width="40" height="40" />
                            &nbsp;
                            <img
                              src={eslint}
                              alt="ESLint"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={bootstrap}
                              alt="Bootstrap"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={figma}
                              alt="Figma"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={js}
                              alt="JavaScript"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={ts}
                              alt="TypeScript"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={reactjs}
                              alt="React"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img src={vue} alt="Vue" width="40" height="40" />
                            &nbsp;
                            <img src={git} alt="Git" width="40" height="40" />
                            &nbsp;
                            <img
                              src={vscode}
                              alt="VSCode"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={github}
                              alt="GitHub"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={trello}
                              alt="Trello"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                            <img
                              src={webpack}
                              alt="Webpack"
                              width="40"
                              height="40"
                            />
                            &nbsp;
                          </div>
                        )}
                        {key === "education" && (
                          <ul>
                            <li>Online IT School "IT GIRLS"</li>
                            <li>
                              RS Schools Course «JavaScript/Front-end. Stage
                              1,2»
                            </li>
                          </ul>
                        )}

                        {key === "languages" && (
                          <ul>
                            <li>English C1</li>
                            <li>Russian C2</li>
                            <li>Romanian C1</li>
                            <li>German B1+</li>
                          </ul>
                        )}
                      </div>
                    </span>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default QAndA;
