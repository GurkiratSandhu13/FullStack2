const HeavyComponent2 = () => {
    return (
      <div style={{ padding: '20px', background: '#2196F3', color: 'white', margin: '10px', borderRadius: '8px' }}>
        <h2>Heavy Component 2 Loaded!</h2>
        <p>This is another lazily loaded component. It only loads when needed!</p>
      </div>
    );
  };
  
  export default HeavyComponent2;