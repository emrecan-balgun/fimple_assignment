import React, { useRef } from "react";
import { MdLanguage } from "react-icons/md";
import i18n from "../../i18n";

import "./language.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Language() {
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.classList.toggle("show");
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>
      <button className="dropdownButton" onClick={() => showMenu()}>
        <MdLanguage size={24} />
      </button>
      <div id="myDropdown" className="dropdown-content" ref={menuRef}>
        <span className="fi fi-tr" onClick={() => changeLanguage("tr")}></span>
        <span className="fi fi-us" onClick={() => changeLanguage("en")}></span>
      </div>
    </>
  );
}

export default Language;
