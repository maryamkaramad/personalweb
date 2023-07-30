import React from 'react'

import MainLayout from './components/layouts/MainLayout'
import Sidebar from './components/Sidebar'
import ConrantContainer from './components/ui/ConrantContainer'

function App() {

  // برای تغییر tabها نیاز به یک state valueنیاز داریم

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <MainLayout>
    <Sidebar handleChange={handleChange} value={value} />
    <ConrantContainer />
  </MainLayout>
}

export default App
