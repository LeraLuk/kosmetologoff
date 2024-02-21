import uslugibase from "../uslugi.json"
function Appk(){

  const appk = uslugibase.appk

  return <table>
    <thead>
          <tr>
            <th colspan="2">
              Аппаратная косметология
            </th>
          </tr>
        </thead>
    {appk.map((appk) => (
        <tbody>
          <tr>
            <td className="left">{appk.title}</td>
            <td className="right">{appk.price}</td>
          </tr>
        </tbody>
    ))}
  </table>
}

export {Appk}