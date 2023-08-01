import React from 'react';


class Car extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {id, brand, price, year} = this.props.car;
        return (
            <div>
                <p>id: {id}</p>
                <p>brand: {brand}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>

                <hr/>
            </div>
        );

    }

}


// const Car = ({car}) => {
//     const {id, brand, price, year} = car;
//     return (
//         <div>
//             <p>id: {id}</p>
//             <p>brand: {brand}</p>
//             <p>price: {price}</p>
//             <p>year: {year}</p>
//             <hr/>
//         </div>
//     );
// };

export {Car};