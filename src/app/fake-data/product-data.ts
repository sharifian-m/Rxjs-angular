import { Product } from '../products/models/product';

export class ProductData {

  static products: Product[] = [
    {
      id: 1,
      productName: 'آموزش ASP.NET',
      productCode: 'GDN-0011',
      description: 'این نسخه از محصول به صورت دانلودی بوده و پس از خرید، لینک دانلود آموزش و سریال فعال سازی به ایمیل شما ارسال می‌شود.',
      price:75.000,
      categoryId: 1,
      quantityInStock: 15,
      supplierIds: [1, 2]
    },
    {
      id: 2,
      productName: 'آموزش HTML, CSS',
      productCode: 'GDN-0023',
      description: 'این محصول مجازی می باشد و شما پس از خرید بلافاصله اطلاعات مربوط به محصول را در صفحه بعد از پرداخت و ایمیل دریافت خواهید نمود. ',
      price: 32.000,
      categoryId: 1,
      quantityInStock: 2,
      supplierIds: [3, 4]
    },
    {
      id: 5,
      productName: 'KING 57 به همراه Windows 11 Version 21H2',
      productCode: 'TBX-0048',
      description: 'مجموعه ای جامع شامل بیش از ۱۱۰۰ نرم افزار کاربردی و تخصصی عرضه شده برای سال ۲۰۲۲',
      price: 89.000,
      categoryId: 3,
      quantityInStock: 8,
      supplierIds: [5, 6]
    },
    {
      id: 8,
      productName: 'Windows 11 Version 21H2',
      productCode: 'TBX-0022',
      description: 'با معرفی Windows 11، شرکت مایکروسافت تمرکز خود را بر روی ساخت یک سیستم عامل مدرن و قدرتمند برای کامپیوترهای دسکتاپ گذاشته است.',
      price:64.000,
      categoryId: 1,
      quantityInStock: 6,
      supplierIds: [7, 8]
    },
    {
      id: 10,
      productName: 'بسته آموزشی JavaScript',
      productCode: 'GMG-0042',
      description: 'زبان برنامه نویسی JavaScript، یک زبان تحت وب و Client-Side بوده که به کاربران امکان می دهد تا صفحات وب را مطابق با نیاز خود کنترل کرده و توسعه و بهبود دهند. ',
      price: 78.000,
      categoryId: 5,
      quantityInStock: 12,
      supplierIds: [9, 10]
    },
    {
      id: 13,
      productName: 'بسته آموزشی SQL Server',
      productCode: 'GMG-0042',
      description: 'این بسته شامل ۲ عدد DVD ٩ گیگابایتی حاوی نرم افزار Microsoft SQL Server 2019، دوره های مقدماتی، متوسط و پیشرفته آموزش SQL Server  می باشد.',
      price: 84.500,
      categoryId: 5,
      quantityInStock: 12,
      supplierIds: [9, 10]
    }
  ];
}
