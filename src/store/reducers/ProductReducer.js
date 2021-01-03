const initState = {
    products: [
        {id: 1, name : 'man t-shirt', image:'1.jpg', price: '30', discount:'2', discountPrice: 30/2*100*30,
        quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
    },

    {id: 2, name : 'woman jacket', image:'2.jpg', price: '40', discount:'3', discountPrice: 40/3*100*40,
    quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},

{id: 3, name : 'man trouser', image:'3.jpg', price: '50', discount:'5', discountPrice: 50/5*100*50,
quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},

{id: 4, name : 'shoe', image:'4.jpg', price: '70', discount:'6', discountPrice: 70/6*100*70,
quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},

{id: 5, name : 'female soot', image:'5.jpg', price: '35', discount:'2', discountPrice: 35/2*100*35,
quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},

{id: 6, name : 'man jeans', image:'6.jpg', price: '90', discount:'7', discountPrice: 90/7*100*90,
quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},

{id: 7, name : 'man jacket', image:'8.jpg', price: '80', discount:'4', discountPrice: 80/4*100*80,
quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},

{id: 8, name : 'man winter jacket', image:'10.jpg', price: '60', discount:'2', discountPrice: 60/2*100*60,
quant: '1', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, massa a congue dignissim, justo augue placerat elit, imperdiet tristique felis est at metus. Duis imperdiet finibus augue, vel semper metus accumsan at. Proin tempor euismod tellus vitae venenatis. Sed elit augue, egestas sed est at, rutrum congue diam. Proin aliquet eros sit amet diam viverra blandit. Nunc pharetra pretium dolor, id bibendum ante pellentesque sed. Nunc rutrum sed felis at malesuada. Vivamus vitae metus diam.'
},


    ],

    product: {}
}


const ProductReducer = (state= initState, action)=>{
    switch(action.type) {
        case 'PRODUCT':
            return {...state, product: state.products.find(product=> product.id=== parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductReducer;
