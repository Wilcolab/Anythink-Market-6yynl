import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const changeTitle = (ev) => {
    ev.preventDefault();
    const title = ev.target.value;
    if (title.length < 3) {
      props.onTypeSearch(
        title,
        (page) => agent.Items.all(page),
        agent.Items.all()
      );
      return;
    }
    props.onTypeSearch(
      title,
      (page) => agent.Items.byTitle(title, page),
      agent.Items.byTitle(title)
    );
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <div className="input-group mb-3" style={{ display: "initial" }}>
            <input
              id="search-box"
              className="search-box"
              type="text"
              placeholder="Item Title"
              onChange={changeTitle}
            />
            <div
              className="input-group-append"
              style={{ display: "inline-block" }}
            >
              <span
                className="input-group-text"
                style={{ background: null, display: "inline-block" }}
              >
                <i className="bi bi-search text-secondary"></i>
              </span>
            </div>
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
