import './App.css'
import Header from './components/header/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/collection_card/Punklist'
import Main from './components/main/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?&order_direction=desc&asset_contract_address=0xc545c2097f9D83A74b9805f2BADC833Bf5a33c3F',
      )
      setPunkListData(openseaData.data.assets)
    }

    getMyNfts()
  }, [setSelectedPunk, punkListData])

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App
