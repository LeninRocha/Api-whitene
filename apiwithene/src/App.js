import api from './api'
import { useEffect, useState } from 'react'

function App() {

  const [material, setMaterial] = useState([])

  useEffect(() => {

    async function carregarMaterial() {
      const response = await api.get('produtos');
      console.log(response.data.DB)
      setMaterial(response.data.DB)
    }
    carregarMaterial();
  }, [])
  return (
    <div >
      {material.sort((a, b) => a.preco - b.preco).filter((element, index) => element.preco > 700).map((material) => {
        return (
          <div key={material.id}>
            <h1>{material.nome}</h1><br />
            <h2> {material.preco}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
