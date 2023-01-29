import React from "react";

import Form from "../components/Form/Form";

function Home() {
  if (!localStorage.getItem("currency")) {
    localStorage.setItem("currency", "$");
  }

  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en");
  }

  return (
    <>
      <Form />
    </>
  );
}

export default Home;
