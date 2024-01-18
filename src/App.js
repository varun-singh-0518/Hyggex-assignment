import React from "react";
import Header from "./components/Header";
import BreadcrumbsComponent from "./components/BreadcrumbsComponent";
import Studypage from "./components/Studypage";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <>
      <Header />
      <BreadcrumbsComponent />
      <Studypage />
      <FAQ />
    </>
  );
};

export default App;
