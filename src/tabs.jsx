import React from "react";

class Headers extends React.Component {
    render() {
        const selected = this.props.tabIdx;
        const headers = this.props.tabs.map((pane, idx) => {
            const title = pane.title;
            const isSelected = selected === idx ? 'active' : '';
            return (
                <li
                key={idx}
                className={isSelected}
                onClick={() => this.props.changeTab(idx)}>
                    {title}
                </li>
            )
        })
        return (
            <ul className="headers">
                {headers}
            </ul>
        )
    }
}

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIdx: 0,
        }
    this.changeTab = this.changeTab.bind(this)
    }

    changeTab(val) {
        this.setState({
            tabIdx: val
        })
    }

    render() {
        const selectedPane = this.props.tabs[this.state.tabIdx];

        return(
            <div className="tabs">
                <h1>Tabs</h1>
                <Headers
                tabs={this.props.tabs}
                tabIdx={this.state.tabIdx}
                changeTab={this.changeTab}
                />
                <div className="content">
                    {selectedPane.content}
                </div>
            </div>
        )
    }
}

export default Tabs;