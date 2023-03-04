import classes from './App.module.css';

interface Props {
  [key: string]: unknown;
}

function App(props: Props): JSX.Element {
  return (
    <div>
      <h1 className={classes.red}>React 테스팅 라이브러리</h1>
    </div>
  );
}

export default App;

