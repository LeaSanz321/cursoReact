const products = [
    {
      "id": 1,
      "name": "Remera básica blanca",
      "price": 15.99,
      "category": "remeras",
      "stock":"10",
      "img": "https://http2.mlstatic.com/D_NQ_NP_995984-MLA45254266710_032021-O.webpremera_blanca.jpg"
    },
    {
      "id": 2,
      "name": "Remera estampada floral",
      "price": 19.99,
      "category": "remeras",
      "stock":"10",
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/628746e0531a460dbf88ad480115762b_9366/Remera_Floral_Holgada_Multicolor_H15788_01_laydown.jpg"
    },
    {
      "id": 3,
      "name": "Remera de algodón negro",
      "price": 17.50,
      "category": "remeras",
      "stock":"10",
      "img": "https://acdn.mitiendanube.com/stores/614/713/products/remera-frente1-1f1e0683f854ff488316794946967451-1024-1024.jpg"
    },
    {
      "id": 4,
      "name": "Remera manga larga a rayas",
      "price": 22.99,
      "category": "remeras",
      "stock":"10",
      "img": "https://static.lefties.com/9/photos2/2022/I/0/2/p/5032/505/710/5032505710_1_1_3.jpg?t=1661327734563"
    },
    {
      "id": 5,
      "name": "Buzo con capucha gris",
      "price": 29.99,
      "category": "buzos",
      "stock":"10",
      "img": "https://falabella.scene7.com/is/image/FalabellaCO/gsc_126339490_4531722_1?wid=800&hei=800&qlt=70"
    },
    {
      "id": 6,
      "name": "Buzo deportivo azul",
      "price": 34.50,
      "category": "buzos",
      "stock":"10",
      "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/cf0b9b06-dd58-42ed-8487-222af270755a1-51ffc82ca725c856d816807941758976-640-0.webp"
    },
    {
      "id": 7,
      "name": "Buzo canguro negro",
      "price": 27.99,
      "category": "buzos",
      "stock":"10",
      "img": "https://acdn.mitiendanube.com/stores/002/292/081/products/3-901-e3cf717aa78e5299a116681790544725-1024-1024.jpg"
    },
    {
      "id": 8,
      "name": "Buzo canguro rojo",
      "price": 31.99,
      "category": "buzos",
      "stock":"10",
      "img": "https://http2.mlstatic.com/D_NQ_NP_751206-MLA53887749578_022023-O.webp"
    },
    {
      "id": 9,
      "name": "Zapatillas deportivas blancas",
      "price": 49.99,
      "category": "zapatillas",
      "stock":"10",
      "img": "https://m.media-amazon.com/images/I/71BpPO3nYkL._AC_UY395_.jpg"
    },
    {
      "id": 10,
      "name": "Zapatillas urbanas negras",
      "price": 54.50,
      "category": "zapatillas",
      "stock":"10",
      "img": "https://http2.mlstatic.com/D_NQ_NP_604054-MLA50221494182_062022-O.webp"
    },
    {
      "id": 11,
      "name": "Zapatillas de running azules",
      "price": 47.99,
      "category": "zapatillas",
      "stock":"10",
      "img": "https://www.deportesliverpool.es/blog/wp-content/uploads/2018/02/nike-run-swift-liverpool.jpg"
    },
    {
      "id": 12,
      "name": "Zapatillas de skate rojas",
      "price": 52.99,
      "category": "zapatillas",
      "stock":"10",
      "img": "https://www.lakaiargentina.com/images/large/lakaiargentina/Zapatillas%20Skate%20LaKai%20Newport%20Rojas%20144_ZOOM.jpg"
    }
  ];

export const getProducts = () => {
    return new Promise((resolve)=>{
         setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(products.find(prod => prod.id === parseInt(productId)))
    }, 500)
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        resolve(products.filter(prod => prod.category === productCategory))
    }, 500)
}
