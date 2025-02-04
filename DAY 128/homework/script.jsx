import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Content />
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button label="Click Me!" onClick={handleClick} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
