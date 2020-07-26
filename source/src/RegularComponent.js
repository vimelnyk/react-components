import React, {Component}  from 'react';

class RegularComponent extends Component {
    constructor(){
        super();
        this.state = {date: new Date()};
    }
    render() {
        const time = this.state.date.toLocaleTimeString()
        return (
            <div>
                Opened in {time}
            </div>
        );
    }
}

export default RegularComponent;