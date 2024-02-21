import uhodbase from "../uhod.json"

function PM(){

    const PeptideMasks = uhodbase.PeptideMasks

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Пептидные маски
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
    {PeptideMasks.map((PeptideMasks) => (
        <tbody>
          <tr>
            <td className="1">{PeptideMasks.id}</td>
            <td className="2">{PeptideMasks.title}</td>
            <td className="3">{PeptideMasks.volume}</td>
            <td className="4">{PeptideMasks.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {PM}