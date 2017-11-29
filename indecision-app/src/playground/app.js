class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

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

    handleDeleteOptions(){
        this.setState((prevState) => ({options: []}));

    }



    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleAddOption(item){
        if (!item){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(item) > -1){
            return 'This option already exists'
        }

        this.setState((prevState) => ({options: prevState.options.concat([item])}));

    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options}
                         handleDeleteOptions={this.handleDeleteOptions}
                         handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}


const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        )
};

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of computer'
};



const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                    disabled={!props.hasOption}>What should I do?</button>
        </div>
    );
};


const Options = (props) => {
    return (
        <div>

            <button onClick={props.handleDeleteOptions}>Delete all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
            <Option/>
        </div>
    );
};


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            {props.optionText &&
            <button
                onClick={(e)=> {
                    props.handleDeleteOption(props.optionText)
                }}
            >remove</button>}
        </div>
    );
};


class AddOption extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }


    handleAddOption(event){
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        if(option){
            event.target.elements.option.value = '';
        }
        this.setState(() => ({error: error}));
    }



    render() {
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Options</button>
                </form>
            </div>
        );
    }
}


// const User = (props) => {
//     return (
//             <div>
//                 <p>Name: {props.name}</p>
//                 <p>Age: {props.age}</p>
//             </div>
//     );
// };



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));