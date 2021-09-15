import React, { useState } from "react";
import { MainContainer } from "./HomeStyled";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./Home.css";

export default function useHomeFunction() {
  const data = [
    {
      index: 1,
      texto1: (
        <div>
          The graduates of the <b>Program in Chemical Engineering</b> of the
          Universidad Nacional de Colombia Bogotá Campus, will be integral
          citizens and professionals who:
          <br />
          <ul style={{ listStyleType: "disc" }}>
            <li>
              Will develop their careers applying scientific, technological,
              humanistic and administrative knowledge, with social
              responsibility to positively influence society.
            </li>
            <li>
              Will become leading professionals who design, operate, manage or
              market products, processes or industrial facilities, incorporating
              sustainability criteria.
              <br />
              Will be use their communication and team work skills developed as
              well as their commitment to life-long learning to advance their
              careers.
            </li>
            <li>
              Will contribute to well-being of their communities through their
              involvement in research, development and innovation projects.
            </li>
          </ul>
        </div>
      ),
    },
    {
      index: 2,
      texto1: (
        <div>
          Graduates of the <b>Electronic Engineering Program</b> of the
          Universidad Nacional de Colombia, Bogotá, will be integral citizens
          and professionals who:
          <br />
          <ul style={{ listStyleType: "disc" }}>
            <li>
              Will apply scientific, technological and administrative knowledge
              in the conception, design and implementation of solutions to
              Electronic Engineering problems considering social and
              environmental sustainability criteria.
            </li>
            <li>
              Contribute to the integral solution of engineering problems
              through leadership and effective communication in
              multidisciplinary teams.
            </li>
            <li>
              Apply lifelong learning skills in the face of social, economic and
              technological dynamics, recognizing the ethical responsibilities
              of their professional practice.
            </li>
          </ul>
        </div>
      ),
    },
    {
      index: 3,
      texto1: (
        <div>
          Graduates of the <b>Electrical Engineering Program</b> at the National
          University of Colombia, Bogotá campus, will be integral citizens and
          professionals who:
          <br />
          <ul style={{ listStyleType: "disc" }}>
            <li>
              Will apply scientific, technological and administrative knowledge
              in the conception, design and implementation of solutions to
              Electrical Engineering problems considering social and
              environmental sustainability criteria.
            </li>
            <li>
              Contribute to the integral solution of engineering problems
              through leadership and effective communication in
              multidisciplinary teams.
            </li>
            <li>
              Apply lifelong learning skills in the face of social, economic and
              technological dynamics, recognizing the ethical responsibilities
              of their professional practice.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const [carousel, setCarousel] = useState(data[0]);

  const [user, setUser] = useState({
    username: "",
    password: "",
    selected: 1,
  });

  const history = useHistory();

  const handleChangePrev = () => {
    const index = data.findIndex((item) => item.index === carousel.index);
    setCarousel(data[index === 0 ? data.length - 1 : index - 1]);
  };

  const handleChangeNext = () => {
    const index = data.findIndex((item) => item.index === carousel.index);
    setCarousel(data[index === data.length - 1 ? 0 : index + 1]);
  };

  function getContent(element, item1) {
    switch (element) {
      case 1:
        return item1;
      case 2:
        return (
          <div>
            Student Outcomes <br /> <br /> Nullam commodo sollicitudin risus, eu
            euismod ex semper quis. <br /> Integer sit amet scelerisque risus.
            Phasellus sed orci purus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi a magna
            ornare arcu vestibulum rhoncus ut ac massa. <br /> Nulla dapibus
            luctus lacus, vel cursus nunc eleifend eu. Nullam posuere, dui a
            vehicula efficitur, nulla urna posuere enim, sit amet tempor ligula
            odio id tortor. Vivamus ac ipsum elit. <br /> Phasellus commodo sit
            amet nulla ac congue. Praesent non nisi arcu. Praesent ornare
            eleifend orci eu rutrum. Nam nisi purus, facilisis quis metus
            bibendum, luctus pharetra nibh.
          </div>
        );
      default:
        return (
          <div>
            Relation Among Student Outcomes and Courses <br /> Donec interdum
            condimentum magna, nec porta libero congue non. Nulla rutrum tortor
            eget gravida luctus. Fusce finibus vel urna in auctor. Duis posuere
            venenatis purus in sagittis. Duis vulputate eu neque volutpat
            molestie. <br /> Maecenas at enim porta, pharetra nunc et, iaculis
            ante. In hac habitasse platea dictumst. Mauris fermentum rutrum
            velit id suscipit. Integer libero felis, pharetra in purus vitae,
            tristique eleifend ante. Donec justo diam, vulputate vitae eros nec,
            vulputate facilisis arcu. <br /> Curabitur non dui eget eros auctor
            blandit sit amet porta ligula. Aliquam erat volutpat. Nullam
            condimentum, nibh sed consequat pellentesque, neque nunc pulvinar
            dui, vel imperdiet ex libero vitae nulla. Proin eleifend pulvinar
            turpis, vulputate efficitur sem suscipit vel. In elementum efficitur
            enim non fringilla.
          </div>
        );
    }
  }

  return (
    <div>
      <MainContainer>
        <div className="row">
          <div className="col element title">
            Academic Evaluation System for Continuous Improvement
          </div>
        </div>
        <div className="row">
          <div className="col-3 trim">
            <div
              className="row login-button"
              onClick={() => history.push("/login")}
            >
              Login
            </div>
            {/* <div className="row search-container">
              <Search
                className="search-input"
                placeholder="Search"
                size="large"
                onSearch={(value) => console.log(value)}
              />
            </div> */}
            <div
              className="row lateral-button"
              onClick={() => setUser({ selected: 1 })}
            >
              Program Educational Objectives
            </div>
            <div
              className="row lateral-button"
              onClick={() => setUser({ selected: 2 })}
            >
              Student Outcomes
            </div>
            <div
              className="row lateral-button"
              onClick={() => setUser({ selected: 3 })}
            >
              Relation Among Student Outcomes and Courses
            </div>
          </div>
          <div className="col trim">
            <div className="row home-subtitle">
              Program Educational Objectives
            </div>
            <div className="row home-content">
              {getContent(user.selected, carousel.texto1)}
              {user.selected === 1 && (
                <div className="custom-carousel-controls">
                  <button type="button" onClick={handleChangePrev}>
                    Prev
                  </button>
                  <button type="button" onClick={handleChangeNext}>
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
