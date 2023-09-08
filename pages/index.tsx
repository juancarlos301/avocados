import React from 'react'
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}
/*export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}*/
const Home = ({ productList }: { productList: TProduct[] }) => {
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
