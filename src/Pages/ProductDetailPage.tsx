import  { useEffect, useState } from 'react'
import { Tproduct } from '../interfaces/product'
import { useParams } from 'react-router-dom'
import instance from '../Apis'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './h.scss'

interface Props {}

const ProductDetailPage = (props: Props) => {
  const { id } = useParams()
  const [detailProduct, setDetailProduct] = useState<Tproduct | null>(null)

  useEffect(() => {
    (async() => {
      const {data} = await instance.get(`/products/${id}`)
      setDetailProduct(data)
    })()
  },[id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
  <>
    <h1>Sản phẩm này có id là: {id}</h1>

    <Slider className='hhihi' {...settings}>
    {detailProduct?.images.map((image,index) => (
      <img className='images'  src={image} key={index + 1} />
    ))}
    </Slider>
    <h1>{detailProduct?.title}</h1>
  </>
  )
}

export default ProductDetailPage
