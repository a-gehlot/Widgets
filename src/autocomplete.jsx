import React from "react";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    handleInput(e) {
        this.setState({
            inputVal: e.target.value
        })
    }

    filterData() {
        const filteredData = this.props.names.filter((val) => {
            if (this.state.inputVal === '') {
                return val;
            } else {
                return val.toLowerCase().includes(this.state.inputVal);
            }
        })
        return filteredData
    }

    render() {
        return(
        <div className="autocomplete">
            <h1>Autocomplete</h1>
            <div className="autocompleteWidget">
                <input type="text" 
                placeholder="Search..." 
                onInput={this.handleInput}/>
                <ul>
                    {this.filterData().map((name) => {
                        return (<li key={name}>{name}</li>)
                    })}
                </ul>
            </div>
       </div>
        )
    }


}

export default Autocomplete