import React, { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard/ImageCard";

export default function Landing(props) {
  const { history } = props;
  const [active, setActive] = useState("");

  const setActiveLink = () =>
    setActive(history.location.pathname.split("/").pop());

  useEffect(() => {
    setActiveLink();
  }, [history.location]);

  const navigateTo = (item) => {
    console.log(item);
    history.push(item);
  };

  return (
    <div className="at-content-container">
      <div className="at-inner-content">
        <div style={{ textAlign: "center" }}>
          <h1 className="title">Tithonus</h1>
          <p className="description">The Code Review Quality Checker</p>
          <div className="row" style={{ padding: "0 10%", marginRight: 0 }}>
            <div className=" col col-landing-card">
              <div className="hover-card at-card">
                <div className="hover-card-title">Developers</div>
                <p className="hover-card-value ">Javid Baghirov</p>
                <p className="hover-card-value ">Mannan Abdul</p>
                <p className="hover-card-value ">Mokhlaroyim Raupova</p>
                <p className="hover-card-value ">Osama Tanveer</p>
                <p className="hover-card-value ">Ziya Mukhtarov</p>
              </div>
            </div>

            <div className=" col col-landing-card">
              <div className="hover-card at-card">
                <div className="hover-card-title">Supervisor</div>
                <p className="hover-card-value ">Eray Tüzün</p>
              </div>
            </div>

            <div className=" col col-landing-card">
              <div className="hover-card at-card">
                <div className="hover-card-title">Innovation Expert</div>
                <p className="hover-card-value ">TBD</p>
              </div>
            </div>
          </div>
          <div className="description-container">
            <h3 className="description" style={{ marginBottom: "3%" }}>
              Description
            </h3>
            <p style={{ textAlign: "justify" }}>
              Our application, Tithonus, named after the Greek god of Insects,
              aims to get bugs under control and minimize the chance of them
              making them into a codebase by making code reviews more effective.
              Tithonus is centered on an algorithm that uses Machine Learning to
              inject semantically aware bugs into code, ones that are better
              able to mimic real bugs that appear in codebases. Choosing a
              semantically aware bug seeding algorithm gives us an advantage in
              terms of bug seeding. Semantically unaware bugs use randomness to
              target unbound tokens. This approach misses 62% of all bug seeding
              patterns. <br />
              <br />
              Tithonus is a practical application built around the bug seeding
              algorithm. We plan on injecting these bugs into code reviews to
              test the attention of the code reviewer, and ultimately the
              quality of the review. Using this application, people can benefit
              from the utility the algorithm provides in a novel way. Users will
              be able to ensure that their codebases are as robust as possible.
              Administrators will be able to review the performance of their
              code reviewers and make appropriate decisions using this
              information. They can choose to make a developer review code
              again, or if the performance falls enough, not have the developer
              review code anymore. The possibilities are endless and exciting.
            </p>
          </div>
          <h3 className="col description" style={{ marginBottom: "3%" }}>
            Team
          </h3>
          <div
            className="row"
            style={{ padding: "0 10%", margin: "0px 0px 6% 0" }}
          >
            <ImageCard
              name="Javid Baghirov"
              src="/images/javid.jpeg"
              alt="Javid"
            ></ImageCard>
            <ImageCard
              name="Mannan Abdul"
              src="/images/sunny.jpeg"
              alt="Mannan"
            ></ImageCard>
            <ImageCard
              name="Mokhlaroyim Raupova"
              src="/images/mohi.jpg"
              alt="Mohi"
            ></ImageCard>
            <ImageCard
              name="Osama Tanveer"
              src="/images/osama.jpeg"
              alt="Osama"
            ></ImageCard>
            <ImageCard
              name="Ziya Muktharov"
              src="/images/ziya.jpg"
              alt="Ziya"
            ></ImageCard>
          </div>
        </div>
      </div>
    </div>
  );
}
