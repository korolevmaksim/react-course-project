console.log('App.js is running');


// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subTitle: 'This is some info',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option){
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApps();
    }

};

const appRoot = document.getElementById('app');

const removeAll = () => {
    app.options = [];
    renderApps();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApps = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should id do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, key) => <li key={key}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Action</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

};

renderApps();