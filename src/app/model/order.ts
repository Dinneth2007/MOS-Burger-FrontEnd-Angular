export enum OrderStatus{
    PREARING="PREPARING",PAID="PAID"
}
export enum PaymentMethod{
    CASH="CASH",CREDITCARD="CREDITCARD",VOUCHER="VOUCHER"
}
export class Order {
    id?: number ;
    orderDate: String;
    totalAmount: number;

    status:OrderStatus;

    paymentMethod:PaymentMethod;

    customer: any;


    orderItems: any[];
    constructor(
        id: number,
        orderDate: String,
        totalAmount: number,
        status: OrderStatus,
        paymentMethod: PaymentMethod,
        customer: any,
        orderItems: any[]
    ) {
        this.id = id
        this.orderDate = orderDate
        this.totalAmount = totalAmount
        this.status = status
        this.paymentMethod = paymentMethod
        this.customer = customer
        this.orderItems = orderItems
    }
}