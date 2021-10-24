import React from 'react';
import Input from './input';
import Data from '../data.json';

class Inputs extends React.Component {
    
    state = {
        inputs: Data
    };
    
    render() { 

        return (
            <div>
               { this.state.inputs.map(input => (<Input 
                    key={input.id} content={input.content}>
                        <div class="card-header" style={{fontWeight:"bolder"}}>{input.sentence}</div>
                   </Input>    
               ))} 
            </div>

        )
    }
}
 
export default Inputs;