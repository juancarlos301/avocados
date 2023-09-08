import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fetch from 'isomorphic-unfetch'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/avo')

  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => {
    return { params: { id } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`http://localhost:3000/api/avo/${id}`)
  const { data: product }: TAPIAvoResponse = await response.json()
  return {
    props: {
      product,
    },
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <p>ProductItem {product.id}</p>
      <p>name {product?.name}</p>
    </div>
  )
}

export default ProductItem
