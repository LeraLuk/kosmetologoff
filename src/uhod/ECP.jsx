import uhodbase from "../uhod.json"


function ECP(){

    const EyeCareProducts = uhodbase.EyeCareProducts

    return <table>
    <thead>
          <tr>
            <th colspan="4">
                Средства для ухода за кожей вокруг глаз
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
    {EyeCareProducts.map((EyeCareProducts) => (
        <tbody>
          <tr>
            <td className="1">{EyeCareProducts.id}</td>
            <td className="2">{EyeCareProducts.title}</td>
            <td className="3">{EyeCareProducts.volume}</td>
            <td className="4">{EyeCareProducts.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {ECP}