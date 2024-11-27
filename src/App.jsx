import React, { useState } from 'react';
import SplitAnimation from './components/SplitAnimation';
import ProfileHeader from './components/ProfileHeader';
import MainContent from './components/MainContent';

function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <SplitAnimation onAnimationComplete={() => setIsAnimationComplete(true)} />
      {isAnimationComplete && (
        <>
          <ProfileHeader />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default App;