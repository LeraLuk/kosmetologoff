import uslugibase from "../uslugi.json"
function Esk(){

  const esk = uslugibase.esk

  return <table>
    <thead>
          <tr>
            <th colspan="2">
              Эстетическая косметология
            </th>
          </tr>
        </thead>
    {esk.map((esk) => (
        <tbody>
          <tr>
            <td className="left">{esk.title}</td>
            <td className="right">{esk.price}</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {Esk}