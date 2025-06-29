import React, { Suspense} from 'react';

const LazyDetails = React.lazy(() => import('./components/Details'))

function App() {

  return (
  
    <>
    <Suspense fallback={<h3>Loading hotels....</h3>}>
      <LazyDetails />
    </Suspense>
    </>
  )
}

export default App
