import uhodbase from "../uhod.json"

function SCWUVF(){

    const SpecialCreamsWithUVFilters = uhodbase.SpecialCreamsWithUVFilters

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Специальные кремы с УФ-фильтрами
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
    {SpecialCreamsWithUVFilters.map((SpecialCreamsWithUVFilters) => (
        <tbody>
          <tr>
            <td className="1">{SpecialCreamsWithUVFilters.id}</td>
            <td className="2">{SpecialCreamsWithUVFilters.title}</td>
            <td className="3">{SpecialCreamsWithUVFilters.volume}</td>
            <td className="4">{SpecialCreamsWithUVFilters.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {SCWUVF}