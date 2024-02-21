import uslugibase from "../uslugi.json"
function Ink(){

  const ink = uslugibase.ink

  return <table>
    <thead>
          <tr>
            <th colspan="2">
              Инъекционная косметология
            </th>
          </tr>
        </thead>
    {ink.map((ink) => (
        <tbody>
          <tr>
            <td className="left">{ink.title}</td>
            <td className="right">{ink.price}</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {Ink}