import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <Container>
            <div>
                <header>
                    <p>entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}