export const OrderStatus = ({ order }) => {
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'SUCCEEDED':
                return 'order__status--completed';
            case 'PENDING':
                return 'order__status--pending';
            default:
                return 'order__status--cancelled ';
        }
    };

    const formatStatus = (status: string) => {
        switch (status) {
            case 'SUCCEEDED':
                return 'Выполнен';
            case 'PENDING':
                return 'В обработке';
            default:
                return 'Отменен';
        }
    };
    return (
        <>
            <div className='order__header'>
                <h2 className='order__id'>Заказ #{order.id}</h2>
                <div className={`order__status ${getStatusClass(order.status)}`}>
                    {formatStatus(order.status)}
                </div>
            </div>
        </>
    );
};
