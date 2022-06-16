import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from './services/api';

interface ITransaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// type ITransactionInput = Pick<ITransaction, 'title' | 'amount' | 'type' | 'category'>;
type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionsProviderProps {
    children: ReactNode;
}

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transactions: ITransactionInput) => void;
}

export const TransactionsContext = createContext<ITransactionsContextData>({} as ITransactionsContextData);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            // .then((response) => console.log("response.data", response.data))
            .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: ITransactionInput) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                createTransaction
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}