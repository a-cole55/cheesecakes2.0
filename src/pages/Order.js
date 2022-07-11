import {Link} from "react-router-dom";

export default function Order(props){
    let totalQty = props.totalQty[0];
    let setTotal = props.totalQty[1];
    let cart = props.cartTotal[0];
    let setCart = props.cartTotal[1]


    function emptyCart(){
        return (
            <h2><Link to="/menu">Visit Here</Link> To Add Items to Your Shopping Bag</h2>
        )
    }

    function fullCart(){
        return (
            <div className="cartContent">
                <div className="cart">
                    <h3>View Cart</h3>
                    <div className="cartItems">

                    </div>
                </div>
                <div className="billing">
                    <form>
                        <label>First Name:</label>
                        <input type="text"></input>
                        <label>Last Name:</label>
                        <input type="text"></input>
                        <label>Email:</label>
                        <input type="email"></input>
                        <label>Phone Number:</label>
                        <input type="tel"></input>
                        <label>Mailing Address:</label>
                        <input type="text"></input>
                        <label>City:</label>
                        <input type="text"></input>
                        <label>State:</label>
                        <input type="text"></input>
                        <label>Zipcode:</label>
                        <input type="number"></input>
                        {/* <label>Email:</label>
                        <input type="email"></input> */}

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return(
        <div>
            <h1>Chelsea's Cheesecakes</h1>
            {totalQty > 0 ? fullCart() : emptyCart()}

        </div>

    )
}