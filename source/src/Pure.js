import React, { PureComponent } from 'react';

class Pure extends PureComponent {
    constructor(){
        super();
        this.state = {
            val: 0
        }
    }
  render() {
      console.log(this.state);
    return (
        <button 
            title="PureComponent" 
            type="button" 
            onClick={() => { this.setState({ val: this.state.val + 1 })}}
             >
            Update value
        </button>
    );
  }
}

export default Pure;