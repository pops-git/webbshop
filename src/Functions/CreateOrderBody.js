export const CreateOrderBody = (user, totalPrice) => {
    return {
        "orderId": 0,
        "email": user.email,
        "orderDate": new Date(Date.now()),
        "totalPrice": totalPrice,
    }
}