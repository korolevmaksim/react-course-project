import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount(){

        try{
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(JSON.parse(localStorage.getItem('options')))
                };
            });
        }catch (e){
            console.log(JSON.stringify(e));
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }


    componentWillUnmount() {
        localStorage.setItem('options', this.state.options);
        console.log('componentWillUnmount');
    }


    handleDeleteSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        });
    };


    handleDeleteOptions = () => {
        this.setState((prevState) => ({options: []}));

    };



    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleAddOption = (item) => {
        if (!item){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(item) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat([item])}));

    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState((prevState) => {
            return {
                selectedOption: option
            };
        });
    };


    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options}
                                 handleDeleteOptions={this.handleDeleteOptions}
                                 handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleDeleteSelectedOption={this.handleDeleteSelectedOption}/>
            </div>
        );
    }
}

