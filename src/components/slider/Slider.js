import { Carousel } from 'antd';
import foot from '../../assets/naruto.jpg'
import './Slider.scss'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Slider = ({product}) => (
  <Carousel autoplay>
    <div>
    <img src={foot} alt="" />
      <h3 style={contentStyle}>1</h3>
    </div>
   
  </Carousel>
);
export default Slider;