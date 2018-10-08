import React,{Component} from 'react';

export default class LifeCycleDemoComponent extends Component {
    constructor(props){
        super(props);
       console.log("constructor called--------------");
    }

    componentWillMount() {
        console.log("componentWillMount called--------------");
    }

    componentDidMount() {
        console.log("componentDidMount called-----------------");
    }

    render() {
        console.log("Render called------------");
        return (
            <div>
                content
            </div>
        );
    }
}