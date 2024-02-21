import uhodbase from "../uhod.json"

function Masks(){

    const Masks = uhodbase.Masks

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Маски
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
    {Masks.map((Masks) => (
        <tbody>
          <tr>
            <td className="1">{Masks.id}</td>
            <td className="2">{Masks.title}</td>
            <td className="3">{Masks.volume}</td>
            <td className="4">{Masks.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {Masks}