import React, { Suspense} from 'react';
import Details from './components/Details';
import { ErrorBoundary } from 'react-error-boundary';

const LazyDetails = React.lazy(() => import('./components/Details'))

function App() {

  return (
  
    <>
    {/* <Suspense fallback={<h3>Loading hotels....</h3>}>
      <LazyDetails />
    </Suspense> */}
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
    </>
  )
}

export default App
