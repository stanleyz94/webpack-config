
import "../styles/index.scss";
import Recipies from './Recipies';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
        </section>
      </main>

      <Recipies />
    </>
  );
};

export default App;