import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';

class CoachCancellationList extends Component {
    render() {
        return (
            <div>Hello World</div>
        )
    }
}

CoachCancellationList.contextType = AppContext;

export default CoachCancellationList;