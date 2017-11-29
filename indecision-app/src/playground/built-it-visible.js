class Toggle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                show: !prevState.show
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visible toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.show ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.show ? <p>Hey. These are some details you can now see!</p> : ''
                }
            </div>
        );
    }

}

ReactDOM.render(<Toggle/>, document.getElementById('app'));

// const root = document.querySelector('#app');
//
// let showed = false;
//
// const toggleDetails = () => {
//     showed = !showed;
//     render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visible toggle</h1>
//
//             <button onClick={toggleDetails}>{showed ? 'Hide details' : 'Show details'}</button>
//             {
//                 showed ? <p>Hey. These are some details you can now see!</p> : ''
//             }
//         </div>
//     );
//
//     ReactDOM.render(template, root);
// };
//
// render();

