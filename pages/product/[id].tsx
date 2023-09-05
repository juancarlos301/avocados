import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    window
      .fetch('api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProduct(data))
  }, [])

  const {
    query: { id },
  } = useRouter()

  return (
    <div>
      <p>ProductItem {id}</p>
      <p>name {product?.name}</p>
    </div>
  )
}

export default ProductItem
