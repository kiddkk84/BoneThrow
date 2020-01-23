import React from 'react';
//https://codepen.io/mtclmn/pen/QyPVJp
class List extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map(function (item) {
                        return <li className="list-group-item" data-category={item} key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
};

export default List