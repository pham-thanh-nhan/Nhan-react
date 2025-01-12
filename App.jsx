import React, { useState } from 'react';
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import AnhTet from '../src/assets/images/Anh-Tet.jpg';
import styles from './Styles.module.css'
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState([]);

  const CapNhatTang = () => {
    setCount(count + 1);
    const newTimes = [...times];
    newTimes.push(new Date().getTime());
    setTimes(newTimes);
   
  }
  const CapNhatGiam = () => {
      if(count > 0){
      setCount(count - 1);
      const newTimes = [...times];
      newTimes.pop();
      setTimes(newTimes);
    }
  }
 
  const ThemVaoGio = () => {
    if( count > 0 ){
      alert("Thêm vào giỏ hàng thành công");
      setCount(0);
    }
    else{
      alert("Vui lòng chọn sản phẩm!")
    }
  }
const DuaRaDanhSachSanPham = () => {
  return times.map((item) => {
    return <li key = {item}> thoi gian la: {item} </li>
  })
}

  return (

    <div className='container'>
      <Header></Header>
      <div className='row mt-5'>
        <div className='col-4'>
          <div className={styles['khung-bao']}  >
            <img src={AnhTet} class={styles['anh-tet']} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Phong Bao</h5>
              <div className='d-flex gap-2' >
                <span className='fw-bold' >Giá:</span>
                <span className='text-danger fst-italic' >5.000$</span>
                <span className='text-decoration-line-through' >10.000$</span>
              </div>
              <p class="card-text">Giá rẻ xập sàn mua ngay kẻo hết, mại dô, mại dô;</p>
              <button class="btn btn-primary" onClick={ThemVaoGio} >Thêm vào giỏ hàng</button>
              <div className='d-flex gap-2 mt-3' >
                <button className='btn-success btn' onClick={CapNhatTang} >+</button>
                <div className={styles['so-luong']} > {count} </div>
                <button className=' btn-danger btn' onClick={CapNhatGiam} >-</button>
              </div>
            </div>
            <div className={styles['khung-sale']}>
              <p className={styles['sale']} >SALE</p>
            </div>

          </div>

        </div>
        <div className='col-4'>
          <div className={styles['khung-bao']}  >
            <img src={AnhTet} class={styles['anh-tet']} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Phong Bao</h5>
              <div className='d-flex gap-2' >
                <span className='fw-bold' >Giá:</span>
                <span className='text-danger fst-italic' >5.000$</span>
                <span className='text-decoration-line-through' >10.000$</span>
              </div>
              <p class="card-text">Giá rẻ xập sàn mua ngay kẻo hết, mại dô, mại dô;</p>
              <button class="btn btn-primary" onClick={ThemVaoGio} >Thêm vào giỏ hàng</button>
              <div className='d-flex gap-2 mt-3' >
                <button className='btn-success btn' onClick={CapNhatTang} >+</button>
                <div className={styles['so-luong']} > {count} </div>
                <button className=' btn-danger btn' onClick={CapNhatGiam} >-</button>
              </div>
            </div>
            <div className={styles['khung-sale']}>
              <p className={styles['sale']} >SALE</p>
            </div>

          </div>

        </div>
        <div className='col-4'>
          <div className={styles['khung-bao']}  >
            <img src={AnhTet} class={styles['anh-tet']} alt="..." />
            <div class="card-body">
              <h5 class="card-title">Phong Bao</h5>
              <div className='d-flex gap-2' >
                <span className='fw-bold' >Giá:</span>
                <span className='text-danger fst-italic' >5.000$</span>
                <span className='text-decoration-line-through' >10.000$</span>
              </div>
              <p class="card-text">Giá rẻ xập sàn mua ngay kẻo hết, mại dô, mại dô;</p>
              <button class="btn btn-primary" onClick={ThemVaoGio} >Thêm vào giỏ hàng</button>
              <div className='d-flex gap-2 mt-3' >
                <button className='btn-success btn' onClick={CapNhatTang} >+</button>
                <div className={styles['so-luong']} > {count} </div>
                <button className=' btn-danger btn' onClick={CapNhatGiam} >-</button>
              </div>
            </div>
            <div className={styles['khung-sale']}>
              <p className={styles['sale']} >SALE</p>
            </div>

          </div>

        </div>
        

      </div>
    </div>
  )
}
export default App;