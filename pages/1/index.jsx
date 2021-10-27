import React from "react";

function index(props) {
  const _handle_click = () => {
    const button = document.querySelector(".btn");
    const ink = document.querySelector(".ink");
    const menu = document.querySelector(".menu");
    const exit = document.querySelector(".exit");

    ink.classList.toggle("active");
    button.classList.toggle("disable");
    menu.classList.toggle("display");
  };

  const _handel_exit = () => {
    const button = document.querySelector(".btn");
    const ink = document.querySelector(".ink");
    const menu = document.querySelector(".menu");
    const exit = document.querySelector(".exit");

    ink.classList.toggle("active");
    menu.classList.toggle("display");
    setTimeout(function () {
      button.classList.toggle("disable");
    }, 800);
  };

  return (
    <>
      <div className="containerone">
        
        <div className="menu">
          <ul>
            <li>
              <a className="link" href="#">
                About
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="link" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="link exit" href="#" onClick={() => _handel_exit()}>
                Exit
              </a>
            </li>
          </ul>
        </div>

        <div className="squid">
          <img className="person" src="https://svgshare.com/i/b6U.svg" />
          <button className="btn" onClick={() => _handle_click()}>
            شروع
          </button>

          <div className="ink-menu">
            <img
              className="ink"
              src="https://svgshare.com/i/b41.svg"
              alt="menu"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
