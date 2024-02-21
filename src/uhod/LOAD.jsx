import uhodbase from "../uhod.json"

function LOAD(){

    const LineOfActiveDrugs = uhodbase.LineOfActiveDrugs

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Линия активных препаратов
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
    {LineOfActiveDrugs.map((LineOfActiveDrugs) => (
        <tbody>
          <tr>
            <td className="1">{LineOfActiveDrugs.id}</td>
            <td className="2">{LineOfActiveDrugs.title}</td>
            <td className="3">{LineOfActiveDrugs.volume}</td>
            <td className="4">{LineOfActiveDrugs.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {LOAD}