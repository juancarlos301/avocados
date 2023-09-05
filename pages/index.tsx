import React, { useEffect, useState } from 'react'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProductList(data))
  }, [])
  return (
    <div>
      <h1>hola soy next</h1>
      {productList.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  )
}
export default Home
