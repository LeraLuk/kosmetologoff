import uhodbase from "../uhod.json"

function CAT(){

    const CleansersAndToners = uhodbase.CleansersAndToners

    return <table>
    <thead>
          <tr>
            <th colspan="4">
              Очищающие и тонизирующие средства
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
    {CleansersAndToners.map((CleansersAndToners) => (
        <tbody>
          <tr>
            <td className="1">{CleansersAndToners.id}</td>
            <td className="2">{CleansersAndToners.title}</td>
            <td className="3">{CleansersAndToners.volume}</td>
            <td className="4">{CleansersAndToners.price}р.</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {CAT}