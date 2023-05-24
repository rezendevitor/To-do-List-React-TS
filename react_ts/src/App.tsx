//imports
import React, {createContext} from 'react'; 
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

//type
type textOrNull = string | null;

//context
interface IAppContext {
  language: string,
  framework: string,
  projects: number;
}

export const AppContext = createContext<IAppContext | null> (null);


function App() {
  //var
  const name: string = "Vitor";
  const age: number = 24;
  const isWorking: boolean = false;

  //functions
  const userGreeting = (name: string): string => {
    return "Olá " + name;
  }

  const myText: textOrNull = "Texto qualquer";
  let secondText: textOrNull = null;
  //secondText = "teste2";

  //context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {!isWorking && (
        <div>
          Não está trabalhando!
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro Post"
        content="Conteúdo aqui" 
        commentsQty={10} 
        tags={["ts", "js"]}
        category={Category.JS}/>
        <State/>
        {myText && <p>Tem texto na variável</p>}
        {secondText && <p>Tem texto na variável</p>}
        <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
