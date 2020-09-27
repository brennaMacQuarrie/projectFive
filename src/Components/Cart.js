import React from 'react';
import firebase from './firebase';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            // this is the array we're building objects inside of,
            //i want each to have price, name, and imageRef
            items: [],
            totalCost: 0,
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref("Cart");
        dbRef.on('value', (response) => {

            // building a new array for the items (cart???) in my app state
            const cartItems = [];
            const data = response.val();
            console.log(data);
            // data.forEach((item) => {
            //   console.log(item);
            //   cartItems.push(item); // this works
            // })

            this.setState({
                items: cartItems,
            });
        });
    }

    // so now, push into empty cart data, when you click on button 
    // but the button is in 
    render() {
        return (
            <div className="fakeItem">
                <img src={this.props.imgRef} alt="green mala." />
                <div>
                    <h4>ItemName</h4>
                    <p>price</p>
                </div>
                <button>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

export default Cart;

