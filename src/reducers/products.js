var initialState = [
    {
        id: 1,
        name: "cachu",
        price: 200000,
        status: true
    },
    {
        id: 2,
        name: "cachu",
        price: 200000,
        status: false
    }, {
        id: 3,
        name: "cachu",
        price: 200000,
        status: true
    }
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
};
export default products;