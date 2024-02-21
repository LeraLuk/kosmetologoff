import uhodbase from "../uhod.json"

function SC(){

    const SpecialCreams = uhodbase.SpecialCreams

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Специальные кремы
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
    {SpecialCreams.map((SpecialCreams) => (
        <tbody>
          <tr>
            <td className="1">{SpecialCreams.id}</td>
            <td className="2">{SpecialCreams.title}</td>
            <td className="3">{SpecialCreams.volume}</td>
            <td className="4">{SpecialCreams.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {SC}