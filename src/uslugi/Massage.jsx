import uslugibase from "../uslugi.json"
function Massage(){

  const massage = uslugibase.massage

  return <table>
    <thead>
          <tr>
            <th colspan="2">
              Массажи
            </th>
          </tr>
        </thead>
    {massage.map((massage) => (
        <tbody>
          <tr>
            <td className="left">{massage.title}</td>
            <td className="right">{massage.price}</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {Massage}