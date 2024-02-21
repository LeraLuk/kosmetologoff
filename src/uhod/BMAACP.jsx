import uhodbase from "../uhod.json"

function BMAACP({ handleClicks }){

    const BodyMassageAndAntiCelluliteProducts = uhodbase.BodyMassageAndAntiCelluliteProducts

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Средства для массажа тела и антицеллюлитные средства
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
    {BodyMassageAndAntiCelluliteProducts.map((BodyMassageAndAntiCelluliteProducts) => (
        <tbody>
          <tr>
            <td className="1">{BodyMassageAndAntiCelluliteProducts.id}</td>
            <td className="2">{BodyMassageAndAntiCelluliteProducts.title}</td>
            <td className="3">{BodyMassageAndAntiCelluliteProducts.volume}</td>
            <td className="4">{BodyMassageAndAntiCelluliteProducts.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {BMAACP}