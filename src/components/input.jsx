import React from 'react';
import DropdownItem from './DropdownItem'

class Input extends React.Component {
    state = {
        id: this.props.id,
        upvalue: this.props.upvalue,
        downvalue: this.props.downvalue,
        contents: this.props.content
    };
    
    handleIncrementUp = () => {
        this.setState({upvalue : this.state.upvalue + 1})
    }

    handleIncrementDown = () => {
        this.setState({downvalue : this.state.downvalue + 1})
    }

    render () { 
        return (
        <div>
            {this.props.children}

            <button onClick={this.handleIncrementUp} class="btn btn-link">👍</button>
            <span className={this.getBadgeClasses(true)}>{this.formatCount(this.state.upvalue)}</span>
            <button onClick={this.handleIncrementDown} class="btn btn-link">👎</button>
            <span className={this.getBadgeClasses(false)}>{this.formatCount(this.state.downvalue)}</span>
            
            
            <div class="card-title">
                {this.state.contents.map(content => 
                    <DropdownItem title={ content.phrase }>
                        <div class="card-body">
                            Meaning: { content.definition }
                            <p><a href={ content.link }>Search in dictionary</a></p>
                        </div>
                        </DropdownItem>
                    )}

            </div>
        
                    
        </div>
        );
    }
    
    getBadgeClasses (up) {
        let classes = "badge m-2 badge-";
        if (up === true) {classes += this.state.upvalue === 0 ? "light" : "warning"
            } else {
                classes += this.state.downvalue === 0 ? "light" : "primary"
            } ;
        return classes;
    }

    formatCount (value) {
        return value === 0 ? 0 : value;
    }
}
 
export default Input;