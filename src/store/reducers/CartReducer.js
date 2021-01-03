const initState ={
    products: [],
    totalPrice : 0,
    totalQuantity : 0
}


const CartReducer =(state= initState, action)=>{
    let findProduct;
    let index;
    switch(action.type) {
        case 'ADD_TO_CART' :
            const {product, quantity} = action.payload;
            
            console.log(product, quantity)
            const check = state.products.find(pr=> pr.id=== product.id);
            if(check){
                return state;
            }else{
                
                const tprice = state.totalPrice + product.discountPrice * quantity;
                // console.log(tprice);
                const tQuantity = state.totalQuantity + quantity;
                // console.log(tQuantity)
                product.quant = quantity;
                return {
                    ...state, products :[...state.products, product], totalPrice: tprice, totalQuantity: tQuantity
                }

            }
            case 'INCREMENT':
                findProduct = state.products.find(product=>product.id===action.payload);
                index = state.products.findIndex(product=>product.id===action.payload);
                findProduct.quant += 1; 
                state.products[index] = findProduct;
                return {
                    ...state,
                    totalPrice: state.totalPrice + findProduct.discountPrice, totalQuantity: state.totalQuantity+1 
                }

            case  'DECREMENT':
                findProduct = state.products.find(product=>product.id===action.payload);
                index = state.products.findIndex(product=>product.id===action.payload);
                if(findProduct.quant > 1){
                    findProduct.quant -= 1;
                    state.products[index] = findProduct;
                    return{
                        ...state,
                        totalPrice: state.totalPrice + findProduct.discountPrice, totalQuantity: state.totalQuantity-1 
                    }
                }else{
                    return state;
                }

                case 'REMOVE':
                    findProduct = state.products.find(product=>product.id===action.payload);
                    const filtered = state.products.filter(product=> product.id!==action.payload);
                    return{
                        ...state, 
                        products : filtered,
                        totalPrice : state.totalPrice - findProduct.discountPrice * findProduct.quant,
                        totalQuantity: state.totalQuantity - findProduct.quant
                    }
        default:
            return state;
    }
}

export default CartReducer; 