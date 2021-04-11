export const CreateOrderDetailsBody = (orderId, productId, quantity) => {
    return {
        "orderId": orderId,
        "productId": productId,
        "quantity": quantity,
    }
}