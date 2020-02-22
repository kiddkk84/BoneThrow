import React from 'react';
import List from './breed_list';
// https://codepen.io/mtclmn/pen/QyPVJp
class FilteredList extends React.Component {
    constructor(props){
        super(props)
        this.setState(
            {
            initialItems: 
                ["Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ]})
    }

    filterList(event){
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
    }

    getInitialState() {
        return {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items: []
        }
    }
    componentWillMount() {
        this.setState({ items: this.state.initialItems })
    }

    render() {
        return (
            <div className="filter-list">
                <form>
                    <fieldset className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
                    </fieldset>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
}
       
   


// React.render(<FilteredList />, document.getElementById('root'));
export default FilteredList