import * as React from 'react';

interface IProps {
    text: string;
    age: number;
}

interface IState {
    email: string;
    name: string;
}

export default class Form extends React.Component<IProps, IState> {

   state: IState = {
        name: "",
        email: "",
    };

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value }: any = e.target;
        this.setState({

        });
    };

    public render(){
        const {text} = this.props;
        const {name} = this.state;
        return(
            <div>
                <div>{text}</div>
                <div>{name}</div>
                <input name="name" value={name} onChange={this.handleChange}/>
            </div>
        );
    } 
}