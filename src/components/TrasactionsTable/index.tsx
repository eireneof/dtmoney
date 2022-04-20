import { Container } from "./styles";

export function TrasactionsTable() {

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>

                    <tr>
                        <td>Passagens para UFAL</td>
                        <td className="withdraw">- R$ 500,00</td>
                        <td>Transporte</td>
                        <td>20/04/2022</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );
}