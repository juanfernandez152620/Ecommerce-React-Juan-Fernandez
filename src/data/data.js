const products = [
    {
        id: "MH-1",
        title: "iPhone 14",
        description: "El mejor celular de la actualidad",
        price: 1200,
        category: "Celulares",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-2",
        title: "iPhone 13",
        description: "El mejor celular de la actualidad",
        price: 1000,
        category: "Celulares",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-3",
        title: "iPhone 12",
        description: "El mejor celular de la actualidad",
        price: 800,
        category: "Celulares",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-4",
        title: "Mac Pro",
        description: "El mejor celular de la actualidad",
        price: 4000,
        category: "Laptops",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-5",
        title: "Mac Air",
        description: "El mejor celular de la actualidad",
        price: 3000,
        category: "Laptops",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-6",
        title: "Mac Mini",
        description: "El mejor celular de la actualidad",
        price: 2000,
        category: "Laptops",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-7",
        title: "Fundas para celular Negra",
        description: "El mejor celular de la actualidad",
        price: 500,
        category: "Fundas",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-8",
        title: "Fundas para celular Marron",
        description: "El mejor celular de la actualidad",
        price: 500,
        category: "Fundas",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-9",
        title: "Fundas para celular Azul",
        description: "El mejor celular de la actualidad",
        price: 500,
        category: "Fundas",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-10",
        title: "Cargador para celular",
        description: "El mejor celular de la actualidad",
        price: 500,
        category: "Accesorios",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    },
    {
        id: "MH-11",
        title: "Tripode para celular",
        description: "El mejor celular de la actualidad",
        price: 500,
        category: "Accesorios",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_654001-MLA52556725538_082022-O.webp",
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }