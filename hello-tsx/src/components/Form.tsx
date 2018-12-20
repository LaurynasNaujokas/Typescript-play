import * as React from 'react';

interface IProps {
    text: string;
    age: number;
}


export default class Form extends React.Component<IProps> {

    state = {
        name: ""
    }
    public render(){
        const {text} = this.props;
        return(
            <div>
                <div>{text}</div>
            </div>
        );
    } 
}