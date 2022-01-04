import './App.css';
import MyFirstComponent from './myFirstComponent';

const myFirstVariableInReact = "This is my first variable in React.";
const appClassName = "App2";
const htmlForApp = <button>Send</button>;

const addAnotherHTML = buttonText => {
  return <button>{buttonText}</button>;
};

const handleClickEvent = event => {
  console.log(event.target);
};

function App2() {
  return (
    <div className={appClassName}>
      <header className="App-header">
        <p>
          {myFirstVariableInReact}
        </p>
        <MyFirstComponent />
        <MyFirstComponent />
        <MyFirstComponent />
        {htmlForApp}
        {addAnotherHTML("Save")}
        <button onClick={handleClickEvent}>Click me</button>
      </header>
    </div>
  );
}

export default App2;
