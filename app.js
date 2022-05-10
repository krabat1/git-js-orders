const orders = [
    {
        id: 1,
        pizza: "Hawaii",
        extra: "Eper",
        ital: "Pepsi Max",
        ar: 1500,

    },
    {
        id: 2,
        pizza: "Trainspotting",
        extra: "Kukorica",
        ital: "Tibeti tea",
        ar: 1500,

    },
    {
        id: 3,
        pizza: "Vörös Október",
        extra: "Ketchup",
        ital: "Hosszúlépés",
        ar: 1500,

    },
    {
        id: 4,
        pizza: "Godzilla",
        extra: "Olivabogyó",
        ital: "Paradicsomlé",
        ar: 1500,

    },
    {
        id: 5,
        pizza: "Pikachu",
        extra: "Pepperoni",
        ital: "Narancslé",
        ar: 1500,

    },
    {
        id: 6,
        pizza: "Éden",
        extra: "Sajt",
        ital: "Tonic",
        ar: 1500,

    }
]

orders.map(order=>{
    document.body.innerHTML += `<div>id: ${order.id}<br/>pizza: ${order.pizza}<br/>extra: ${order.extra}<br/>ital: ${order.ital}<br/>ár: ${order.ar}</div>`;
})