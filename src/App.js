import './App.css';
import Counter from './components/Counter';
import Faq from './components/Faq';
import data from "./data/data"

function App() {
  return (
    <main>
       {data.map((singleFaq, index) => <Faq
          question={singleFaq.question}
          answer={singleFaq.answer}
          answerLong={singleFaq.answerLong}
          key={index}
        />)}
      <Counter />
    </main>
  );
}

export default App;
