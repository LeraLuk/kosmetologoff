import uhodbase from "../uhod.json"

function AM(){

  const AlginateMasks = uhodbase.AlginateMasks

    return <table>
    <thead>
          <tr>
            <th colspan="5">
            Альгинатные маски
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
        {AlginateMasks.map((AlginateMasks) => (
        <tbody>
          <tr>
            <td className="1">{AlginateMasks.id}</td>
            <td className="2">{AlginateMasks.title}</td>
            <td className="3">{AlginateMasks.volume}</td>
            <td className="4">{AlginateMasks.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {AM}