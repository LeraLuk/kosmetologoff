import uhodbase from "../uhod.json"

function FMP(){

    const FacialMassageProducts = uhodbase.FacialMassageProducts

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Средства для массажа лица
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
    {FacialMassageProducts.map((FacialMassageProducts) => (
        <tbody>
          <tr>
            <td className="1">{FacialMassageProducts.id}</td>
            <td className="2">{FacialMassageProducts.title}</td>
            <td className="3">{FacialMassageProducts.volume}</td>
            <td className="4">{FacialMassageProducts.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {FMP}