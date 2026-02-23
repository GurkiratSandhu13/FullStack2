const HeavyComponent1 = () => {
    return (
      <div style={{ padding: '20px', background: '#4CAF50', color: 'white', margin: '10px', borderRadius: '8px' }}>
        <h2>Heavy Component 1 Loaded!</h2>
        <p>This component was lazily loaded only when you clicked the button.</p>
      </div>
    );
  };
  
  export default HeavyComponent1;