import React, { Suspense, lazy, useState } from 'react';

// Lazy load the components
const HeavyComponent1 = lazy(() => import('./components/heavyComponent1'));
const HeavyComponent2 = lazy(() => import('./components/heavyComponent2'));

function App() {
  const [showComp1, setShowComp1] = useState(false);
  const [showComp2, setShowComp2] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial', padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>⚡ Lazy Loading Demo</h1>
      <p>Open the <strong>Network tab</strong> in DevTools and watch new JS chunks load when you click the buttons!</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setShowComp1(true)}
          style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Load Component 1
        </button>

        <button
          onClick={() => setShowComp2(true)}
          style={{ padding: '10px 20px', background: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Load Component 2
        </button>
      </div>

      {/* Suspense shows fallback while component is loading */}
      <Suspense fallback={<div style={{ color: 'gray' }}>⏳ Loading component...</div>}>
        {showComp1 && <HeavyComponent1 />}
        {showComp2 && <HeavyComponent2 />}
      </Suspense>
    </div>
  );
}

export default App;