import uhodbase from "../uhod.json"

function BCP(){

    const BodyCareProducts = uhodbase.BodyCareProducts

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Средства для ухода за телом
            </th>
          </tr>
          <tr>
            <th>
              код
            </th>
            <th>
              наименования
            </th>
            <th>
              объём
            </th>
            <th>
              цена
            </th>
          </tr>
        </thead>
    {BodyCareProducts.map((BodyCareProducts) => (
        <tbody>
          <tr>
            <td className="1">{BodyCareProducts.id}</td>
            <td className="2">{BodyCareProducts.title}</td>
            <td className="3">{BodyCareProducts.volume}</td>
            <td className="4">{BodyCareProducts.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {BCP}