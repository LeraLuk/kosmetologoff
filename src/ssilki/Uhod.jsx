import {AM} from "../uhod/AM"
import { BCP } from "../uhod/BCP"
import { BMAACP } from "../uhod/BMAACP"
import { CAT } from "../uhod/CAT"
import { ECP } from "../uhod/ECP"
import { FMP } from "../uhod/FMP"
import { LOAD } from "../uhod/LOAD"
import { Masks} from "../uhod/Masks"
import { PM } from "../uhod/PM"
import { SACM } from "../uhod/SACM"
import { SC } from "../uhod/SC"
import { SCWUVF } from "../uhod/SCWUVF"

function Uhod(){

    return <div id="strelka">
          <div className="center2" >
          <a href="#am" className="a2">Альгинатные маски</a>
          <a href="#bcp" className="a2">Средства для ухода за телом</a>
          <a href="#bmaacp" className="a2">Средства для массажа тела и антицеллюлитные средства</a>
          <a href="#cat" className="a2">Очищающие и тонизирующие средства</a>
          <a href="#ecp" className="a2">Средства для ухода за кожей вокруг глаз</a>
          <a href="#fmp" className="a2">Средства для массажа лица</a>
          <a href="#load" className="a2">Линия активных препаратов</a>
          <a href="#masks" className="a2">Маски</a>
          <a href="#pm" className="a2">Пептидные маски</a>
          <a href="#sacm" className="a2">Скрабы и очищающие маски</a>
          <a href="#sc" className="a2">Специальные кремы</a>
          <a href="#scwuvf" className="a2">Специальные кремы с УФ-фильтрами</a>
        </div>
        
        <div id="am" className="uhod">
        <AM />
        <BCP />
        <BMAACP />
        <CAT />
        <ECP />
        <FMP />
        <LOAD />
        <Masks />
        <PM />
        <SACM />
        <SC />
        <SCWUVF />
        </div>
        
        <a href="#strelka" className="strelka">
          ▲
        </a>
  </div>   
}

export {Uhod}