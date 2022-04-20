import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="seta para cima indicando entradas"/>
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="seta para baixo indicando saídas"/>
                </header>
                <strong>-R$ 500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="ícone de cifrão representando dinheiro"/>
                </header>
                <strong>+R$ 500,00</strong>
            </div>
        </Container>
    );
}