import { useState } from "react";
import { Messages } from "./app/Constants";
import "./app/styles.css";

interface IQuote {
  id: number;
  message: string;
  description: string;
}

function App() {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quote, setQuote] = useState<IQuote>({} as IQuote);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * Messages.length);
      const randomQuote = Messages[randomIndex];
      setQuote(randomQuote);
      setShowMessage(true);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="content-header">
          <h1 className="title">Gerador de frases de chefe</h1>
          <span className="subtitle">
            Descubra sua frase motivacional, e se torne chefe de qualquer
            empresa. Principalmente dessa que voce esta pensando agora mesmo.
          </span>
        </div>
        <button onClick={handleClick} className="button">
          Gerar frase
        </button>
        {showMessage && (
          <div className="quote-container">
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              <>
                <p className="quote">{quote.message}</p>
                <p className="quote-description">{quote.description}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
