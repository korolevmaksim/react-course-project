
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }



    componentDidMount(){
        const countString = localStorage.getItem('count');
        const count = parseInt(countString);
        if(!isNaN(count)){
            this.setState(() => ({count: count}));
        }
    }


    componentDidUpdate(prevProps, prevState){
        localStorage.setItem('count', this.state.count);
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }


    handleReset(){
        this.setState((prevState) => {
            return {
                count: 0
            };
        });

    }

}




ReactDOM.render(<Counter />, document.getElementById('app'));


// console.log('App.js is running');
//
//
// // JSX - JavaScript XML
//
// const app = {
//     title: 'Indecision App',
//     subTitle: 'This is some info',
//     options: ['One', 'Two']
// };
//
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subTitle && <p>{app.subTitle}</p>}
//         {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
//         <ol>
//             <li>item one</li>
//             <li>item two</li>
//         </ol>
//     </div>
// );
//
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
//
//
// };
//
// renderCounterApp();