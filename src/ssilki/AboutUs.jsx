import mama from "../img/mama.png"
import one from "../img/about_us/00f40a7e09a64cb0a43b1678d0ef2ea1.jpg-profi_w1500.jpg"
import two from "../img/about_us/04b6e43e4b344cd880a2e1f7d10a4ccb.jpg-profi_w1500.jpg"
import three from "../img/about_us/0aeaf6303953498da3f5075bf8752475.jpg-profi_w1500.jpg"
import seven from "../img/about_us/30fd3a59568d46ecaf602b126d50506d.jpg-profi_w1500.jpg"
import eight from "../img/about_us/348b396ddc2a487f9ecb7ef9adf79e2c.jpg-profi_w1500.jpg"
import ten from "../img/about_us/4890725eae5649c58a14ee766d3835f9.jpg-profi_w1500.jpg"
import eleven from "../img/about_us/51a5278fccc04cdcbf1d53247b2873a2.jpg-profi_w1500.jpg"
import twelve from "../img/about_us/5e4a04567ad64bb7bae617340d34a77d.jpg-profi_w1500.jpg"
import fourteen from "../img/about_us/633c3b6e30e348879859f9a1aaa13b02.jpg-profi_w1500.jpg"
import fifteen from "../img/about_us/69c9c2259f864d3ab913cc15927e28c0.jpg-profi_w1500.jpg"
import sixteen from "../img/about_us/6b4a7a5beff842afa27b9dcc798ad555.jpg-profi_w1500.jpg"
import nineteen from "../img/about_us/a49f78ab926045d1bafb0cc4299b12c9.jpg-profi_w1500.jpg"
import twenty from "../img/about_us/ab1d5c745d1d460984d0288206f37845.jpg-profi_w1500.jpg"
import twentyone from "../img/about_us/ab1d5c745d1d460984d0288206f37845.jpg-profi_w1500.jpg"
import twentytwo from "../img/about_us/afd8243e27094ad18580fc8d014dab89.jpg-profi_w1500.jpg"
import twentythree from "../img/about_us/b4b4faa49934410db8ef1eb6a14258ae.jpg-profi_w1500.jpg"
import twentyfour from "../img/about_us/b9de6e9b44b74decb295da3ad2e3ec01.jpg-profi_w1500.jpg"
import twentyfive from "../img/about_us/bf2fbfd470184f9aaad31e3d8365200c.jpg-profi_w1500.jpg"
import twentysix from "../img/about_us/c387b16dcbbc41eda440271f7e1fb105.jpg-profi_w1500.jpg"
import twentyseven from "../img/about_us/c4cbaef6c6324844b119948daea62a7d.jpg-profi_w1500.jpg"
import twentyeight from "../img/about_us/c8f78050e8f241e6b67b816c9ca15a25.jpg-profi_w1500.jpg"
import twentynine from "../img/about_us/d44631822eed485597340a1b54cabf21.jpg-profi_w1500.jpg"
import thirty from "../img/about_us/dcf1019033fd433faf1b9d0bb9e12671.jpg-profi_w1500.jpg"
import thirtyone from "../img/about_us/df3bdcc39b0643f39df6d325b6310720.jpg-profi_w1500.jpg"
import thirtytwo from "../img/about_us/df701a226c1a496983b49f4de7993cfd.jpg-profi_w1500.jpg"
import thirtyhree from "../img/about_us/e7bd050407c64d2dae716f9c0758e383.jpg-profi_w1500 (1).jpg"
import thirtyfour from "../img/about_us/e8b98eb60d17467d9f50db7364534a03.jpg-profi_w1500.jpg"
import thirtyfive from "../img/about_us/f0fdd338a1d344b0a032ab76a54618e6.jpg-profi_w1500.jpg"
import thirtysix from "../img/about_us/fa1753971b574deebf3ca89255f080b9.jpg-profi_w1500.jpg"
import thirtyseven from "../img/about_us/fa4ed0d1fa9c4a2db2e15a08f527091e.jpg-profi_w1500.jpg"
import thirtyeight from "../img/about_us/fb9e9239204e4655b95f915e0abd1092.jpg-profi_w1500.jpg"

import aboutbase from "../aboutus.json"

function AboutUs(){

    const cources = aboutbase.cources

    return <div>
        <div className="bio">
            <img src={mama} alt="" className="mama"/>
            <div className="bio2">
                    <h3>
                        Лукомская Галина Алексеевна
                    </h3>
                    <p>
                        С 2013 года работаю косметологом. <br/>
                        Прошла порядка 30 курсов по Массажам, Эстетической, Инъекционной и Аппаратной косметологии. <br/>
                        Имеетсся высшее медицинское образование. <br/>
                    </p>
                    <p className="zapis">
                        Телефон для записи на процедуру: +7 (911) 281-68-50
                    </p>
                    <h4>
                        Список оконченых курсов:
                    </h4>
                    <div>
                        <input class="hide" id="hd-1" type="checkbox" />
                        <label for="hd-1">Нажмите, чтобы посмотреть</label>
                        <div>
                            <ul>
                                {cources.map((cources) => (
                                    <li>{cources.cource}</li>
                                ))}
                            </ul>
                        </div>   
                        </div>
            </div>
        </div>
        <article className="image">
                <div className="spisok spisok1"><img src={thirtyseven} alt="" /></div>
                <div className="spisok spisok1"><img src={thirtyeight} alt="" /></div>
                <div className="spisok spisok1"><img src={ten} alt="" /></div>
                <div className="spisok spisok1"><img src={sixteen} alt="" /></div>
                <div className="spisok spisok1"><img src={nineteen} alt="" /></div>
                <div className="spisok spisok1"><img src={twenty} alt="" /></div>
                <div className="spisok spisok1"><img src={twentyone} alt="" /></div>
                <div className="spisok spisok1"><img src={twentyeight} alt="" /></div>
                <div className="spisok spisok1"><img src={thirtyfive} alt="" /></div>
                <div className="spisok spisok1"><img src={thirtytwo} alt="" /></div>
                <div className="spisok spisok1"><img src={thirtyhree} alt="" /></div>

                <div className="spisok"><img src={one} alt="" /></div>
                <div className="spisok"><img src={two} alt="" /></div>
                <div className="spisok"><img src={three} alt="" /></div>
                <div className="spisok"><img src={seven} alt="" /></div>
                <div className="spisok"><img src={eight} alt="" /></div>
                <div className="spisok"><img src={eleven} alt="" /></div>
                <div className="spisok"><img src={twelve} alt="" /></div>
                <div className="spisok"><img src={fourteen} alt="" /></div>
                <div className="spisok"><img src={fifteen} alt="" /></div>
                <div className="spisok"><img src={twentytwo} alt="" /></div>
                <div className="spisok"><img src={twentythree} alt="" /></div>
                <div className="spisok"><img src={twentyfour} alt="" /></div>
                <div className="spisok"><img src={twentyfive} alt="" /></div>
                <div className="spisok"><img src={twentysix} alt="" /></div>
                <div className="spisok"><img src={twentyseven} alt="" /></div>
                <div className="spisok"><img src={twentynine} alt="" /></div>
                <div className="spisok"><img src={thirty} alt="" /></div>
                <div className="spisok"><img src={thirtyone} alt="" /></div>
                <div className="spisok"><img src={thirtyfour} alt="" /></div>
                <div className="spisok"><img src={thirtysix} alt="" /></div>
        </article>
    </div>
}

export {AboutUs}