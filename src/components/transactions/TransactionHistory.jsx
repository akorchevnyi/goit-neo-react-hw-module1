import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.head}>
                <tr>
                    <th className={css.headCell}>Type</th>
                    <th className={css.headCell}>Amount</th>
                    <th className={css.headCell}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(({ id, type, amount, currency }) => {
                        return (
                            <tr className={css.row} key={id}>
                                <td className={css.cell}>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                                <td className={css.cell}>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        );
                    })
                }
            </tbody>

        </table>
    );
}
