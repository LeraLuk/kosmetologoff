import { Header } from "./osnova/Header";
import { Main } from "./osnova/Main";
import { Footer } from "./osnova/Footer";
import React, { useState } from 'react';

function App() {

  const [currentContent, setCurrentContent] = useState('home');

  const changeContent = (content) => {
    setCurrentContent(content);
  };

  return (
    <>
    <Header handleClick={changeContent} />
    <Main currentContent={currentContent} />
    <Footer />
    </>
  );
}

export default App;
