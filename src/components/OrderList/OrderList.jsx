import styles from "./OrderList.module.css"
import OrderListItem from "../OrderListItem/OrderListItem"


export default function OrderList({orders, activeOrder, handleSelectOrder }) {

    const orderItems = orders.map((order) => {
        return (
            <OrderListItem key={order._id} isSelected={order === activeOrder} order={order} activeOrder={activeOrder} handleSelectOrder={handleSelectOrder} />
        )
    })

    return(
        <main className={styles.OrderList} >
            {
                orderItems.length ? (
                    orderItems
                ) : (
                    <span className={styles.noOrders} > No Previous Orders </span>
                )
            }
        </main>
    )
}