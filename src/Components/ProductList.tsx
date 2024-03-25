import React, { useEffect, useState } from 'react'
import { Tproduct } from '../interfaces/product'
import instance from '../Apis'
import { Link } from 'react-router-dom'

interface Props {
  
}

const ProductList = (props: Props) => {
  const [products, setProduct] = useState<Tproduct[]>([])
  useEffect(() => {
    (async() => {
      const {data} = await instance.get<Tproduct[]>('/products')
      setProduct(data)
    })()
  },[])
  return (
    <>
      <table className='table table-bordered'>
          <thead>
            <tr>
              <th>stt</th>
              <th>tên</th>
              <th>giá</th>
              <th>mô tả</th>
              <th>ảnh</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><Link to={`/shop/${product.id}`}>{product.title}</Link></td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.images.map((image,index) => (
                  <Link to={`/shop/${product.id}`}><img width={50} key={index + 1} src={image}  /></Link>
                ))}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </>
  )
}

export default ProductList
