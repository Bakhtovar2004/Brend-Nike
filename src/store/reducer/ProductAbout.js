import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
        id: 1,
        src: "/Pulse.webp",
        just: "Top Seller",
        brend: "Nike Air Max Pulse",
        forMen: "Men`s shoes",
        color: "1 color",
        price: 150,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'
      },
      {
        id: 2,
        src: "/91.webp",
        just: "New",
        brend: "Nike Air Max 90",
        forMen: "Men`s shoes",
        color: "2 color",
        price: 172.54,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 3,
        src: "/Plus.webp",
        just: "Sale",
        brend: "Nike Air Max SC",
        forMen: "Men`s shoes",
        color: "9 color",
        price: 83.5,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 4,
        src: "/29.webp",
        just: "Top Seller",
        brend: "Nike Air Max 270",
        forMen: "Men`s shoes",
        color: "8 color",
        price: 160,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'
      },
      {
        id: 5,
        src: "/SYSTM.webp",
        just: "New",
        brend: "Nike Air Max SYSTM",
        forMen: "Men`s shoes",
        color: "4 color",
        price: 100,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 6,
        src: "/Seller.webp",
        just: "Top Seller",
        brend: "Nike Air Max Seller",
        forMen: "Men`s shoes",
        color: "2 color",
        price: 164,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 7,
        src: "/Penny.webp",
        just: "Sale",
        brend: "Nike Air Max Penny",
        forMen: "Men`s shoes",
        color: "7 color",
        price: 135,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 8,
        src: "/gtx.webp",
        just: "New",
        brend: "Nike Air Max GTX",
        forMen: "Men`s shoes",
        color: "5 color",
        price: 186,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 9,
        src: "/se.webp",
        just: "New",
        brend: "Nike Air Max SC",
        forMen: "Men`s shoes",
        color: "8 color",
        price: 98,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 10,
        src: "/max.webp",
        just: "Kids",
        brend: "Nike Air Max 91",
        forMen: "Men`s shoes",
        color: "3 color",
        price: 170,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 11,
        src: "/se1.webp",
        just: "Top Seller",
        brend: "Nike Air Max SE",
        forMen: "Men`s shoes",
        color: "5 color",
        price: 125.8,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      
      {
        id: 12,
        src: "/2090.webp",
        just: "Sale",
        brend: "Nike Air Max 2090",
        forMen: "Men`s shoes",
        color: "3 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 13,
        src: "/kids1.webp",
        just: "Kids",
        brend: "Nike Air Max 2091",
        forMen: "Kids shoes",
        color: "2 color",
        price: 90,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 14,
        src: "/kids2.webp",
        just: "Kids",
        brend: "Nike Air Max 2092",
        forMen: "Kids shoes",
        color: "7 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 15,
        src: "/kids3.webp",
        just: "Top Seller",
        brend: "Nike Air Max 093",
        forMen: "Kids shoes",
        color: "2 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 16,
        src: "/kids4.webp",
        just: "Sale",
        brend: "Nike Air Max 153",
        forMen: "Kids shoes",
        color: "6 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 17,
        src: "/kids5.webp",
        just: "New",
        brend: "Nike Air Max 209",
        forMen: "Kids shoes",
        color: "1 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 18,
        src: "/kids6.webp",
        just: "Kids",
        brend: "Nike Air Max 278",
        forMen: "Kids shoes",
        color: "8 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 19,
        src: "/kids7.webp",
        just: "Sale",
        brend: "Nike Air Max 50",
        forMen: "Kids shoes",
        color: "5 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
      {
        id: 20,
        src: "/kids8.webp",
        just: "Kids",
        brend: "Nike Air Max 48",
        forMen: "Kids shoes",
        color: "3 color",
        price: 110,
        quantity: 1,
        about:'A mashup of Pegasus sneakers past, the Nike P-6000 takes early 2000s running to modern heights. Featuring breathable mesh, sporty lines and mixed-material overlays, its the perfect combination of head-turning looks and comfort. Plus, foam in the midsole adds a lifted, track-inspired stance and unbelievable cushioning.'

      },
  ],
};

export const ProductAbout = createSlice({
  name: "productAbout",
  initialState,
 
   

});


export default ProductAbout.reducer;
