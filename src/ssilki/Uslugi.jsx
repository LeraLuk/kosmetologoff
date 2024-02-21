import {Esk} from "../uslugi/Esk"
import {Ink} from "../uslugi/Ink"
import {Massage} from "../uslugi/Massage"
import {Appk} from "../uslugi/Appk"

function Uslugi(){

  let esk = <Esk />;
  let ink = <Ink />;
  let massage = <Massage />;
  let appk = <Appk />;

  return <div id="strelka">
    <div className="center" >
      <a href="#esk" className="a">Эстетическая косметология</a>
      <a href="#ink" className="a">Инъекционная косметология</a>
      <a href="#massage" className="a">Массажи</a>
      <a href="#appk" className="a">Аппаратная косметология</a>
    </div>
    
    
    <div id="esk" className="uslugi">
      {esk}
    </div>
    <div id="ink" className="uslugi">
      {ink}
    </div>
    <div id="massage" className="uslugi">
    {massage}
    </div>
    <div id="appk" className="uslugi">
    {appk}
    </div>
    <a href="#strelka" className="strelka">
      ▲
    </a>
  </div>
}

export {Uslugi}