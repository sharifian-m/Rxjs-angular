import { Supplier } from '../products/models/Supplier';

export class SupplierData {

    static suppliers: Supplier[] = [
        {
            id: 1,
            name: 'هلو',
            cost: 16.95,
            minQuantity: 12
        },
        {
            id: 2,
            name: 'پرنیان',
            cost: 15.95,
            minQuantity: 24
        },

        {
            id: 3,
            name: 'نشر اورکام',
            cost: 12,
            minQuantity: 6
        },
        {
            id: 4,
            name: 'ارتباط گستر پرشیا',
            cost: 25,
            minQuantity: 2
        },
        {
            id: 5,
            name: 'سینا پردازش',
            cost: 2,
            minQuantity: 24
        },
        {
            id: 6,
            name: 'Acme Tool Supply',
            cost: 4,
            minQuantity: 12
        },
        {
            id: 7,
            name: 'نوین پندار',
            cost: 8,
            minQuantity: 8
        },
        {
            id: 8,
            name: 'گردو',
            cost: 4,
            minQuantity: 12
        },
        {
            id: 9,
            name: 'جی بی تیم',
            cost: 20,
            minQuantity: 6
        },
        {
            id: 10,
            name: 'پرند',
            cost: 12,
            minQuantity: 12
        }
    ];
}
