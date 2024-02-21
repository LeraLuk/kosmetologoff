import uhodbase from "../uhod.json"

function SACM(){

    const ScrubsAndCleansingMasks = uhodbase.ScrubsAndCleansingMasks

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Скрабы и очищающие маски
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
    {ScrubsAndCleansingMasks.map((ScrubsAndCleansingMasks) => (
        <tbody>
          <tr>
            <td className="1">{ScrubsAndCleansingMasks.id}</td>
            <td className="2">{ScrubsAndCleansingMasks.title}</td>
            <td className="3">{ScrubsAndCleansingMasks.volume}</td>
            <td className="4">{ScrubsAndCleansingMasks.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {SACM}