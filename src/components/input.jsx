import React from 'react';
import DropdownItem from './DropdownItem'

class Input extends React.Component {
    state = {
        id: this.props.id,
        contents: this.props.content
    };

    render () { 
        return (
        <div>
            {this.props.children}            
            
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

}
 
export default Input;