import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../Services/api";
export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((data) => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de webSite</td>
            <td className="deposit">R$12.000</td>
            <td>Desemvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> -R$1.100</td>
            <td>Desemvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
