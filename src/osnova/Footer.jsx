import profi from "../img/profi.svg"
import phone from "../img/phone.png"
function Footer(){
    return <footer>
        <ul>
            <li><img src={profi} alt="profi" className="profi footer_img"/><a href="https://spb.profi.ru/profile/LukomskayaGA/?fbclid=PAAabocmkOrNQs7JrMumeHW0QyWygtyrF9lwq-MvSArN6kWfMQ4MPPB_UTEk">profi.ru</a></li>
            <li><img src={phone} alt="number" className="phone footer_img"/><p>+7 (911) 281-68-50</p></li>
        </ul>
        <h3>
        © {new Date().getFullYear()} LeraDeen
        </h3>
        <div className="adress">
            <p>г.Санкт-Петербург<br/>
                Муринская дорога 84<br/>
                Салон lu&mila
            </p>
            <p>г.Санкт-Петербург<br/>
                Киришская улица 4<br/>
                Салон красоты Наталья
            </p>
        </div>
    </footer>
}

export {Footer}