import { Uslugi } from "../ssilki/Uslugi";
import { Uhod } from "../ssilki/Uhod"
import { AboutUs } from "../ssilki/AboutUs";
import { Pole } from "../ssilki/Pole";



function Main({ currentContent }){

  
    let content = <Uslugi />;
    
    if (currentContent === 'uslugi') {
        content = <Uslugi />;
    } else if (currentContent === 'uhod') {
      content = <Uhod />;
    } else if (currentContent === 'about_us') {
      content = <AboutUs />;
    } else if(currentContent === 'pole') {
      content = <Pole />
    }
    return <main >
      {content}
      </main>;
  };
  
  export {Main};