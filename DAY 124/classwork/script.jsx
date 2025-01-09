// JSX გამოყენებით კომპონენტის შექმნა
function App() {
    // ინლაინ სტილები
    const inlineStyles = {
      textAlign: 'center',
      margin: '20px 0',
    };
  
    return (
      <div>
        <h1>React-ით შექმნილი გვერდი</h1>
        <p style={inlineStyles}>
          ეს არის React-ის პირველი კომპონენტი, შექმნილი JSX-ის გამოყენებით.
        </p>
        <p>
          React საშუალებას გვაძლევს შევქმნათ თანამედროვე, დინამიკური ვებ-აპლიკაციები.
        </p>
        <button onClick={() => alert('პირველი ღილაკი დაჭერილია!')}>პირველი ღილაკი</button>
        <button onClick={() => alert('მეორე ღილაკი დაჭერილია!')}>მეორე ღილაკი</button>
      </div>
    );
  }
  
  // ReactDOM.render ფუნქცია კომპონენტის DOM-ში დასარენდერებლად
  const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement).render(<App />);
  