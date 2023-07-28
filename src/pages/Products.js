function Products() {
  return (
    <>
      <section id='section-works'>
        <div className='container' id='app'>
          <div className='row' v-if='works.length &gt; 0'>
            <div className='col-sm-12 text-secondary'>
              <h1>Works</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/internetmall/'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>
                      拉拉熊主題購物網站
                    </button>
                    <img
                      src='https://i.imgur.com/RlW4fjV.jpg'
                      alt='internetmall'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      react
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      api
                    </div>
                  </p>
                </div>
              </div>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/printHistory/'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>印刷術的故事</button>
                    <img
                      src='https://i.imgur.com/2TnVyCM.jpg'
                      alt='printHistory'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      bootstrap
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      skrollr插件
                    </div>
                  </p>
                </div>
              </div>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/weatherbox/'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>天氣盒子</button>
                    <img
                      src='https://i.imgur.com/JeeATZ9.jpg'
                      alt='weatherbox'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      svg
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      css animation
                    </div>
                  </p>
                </div>
              </div>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/BMIcalculator/BMI.html'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>BMI計算機</button>
                    <img
                      src='https://i.imgur.com/Goi3OyY.jpg'
                      alt='BMI'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      JavaScript
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/yellowstudio/'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>yellowstudio</button>
                    <img
                      src='https://i.imgur.com/lek0kSf.jpg'
                      alt='yellowstudio'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      版面規劃
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      網站動畫
                    </div>
                  </p>
                </div>
              </div>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/shoplist/'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>購物清單</button>
                    <img
                      src='https://i.imgur.com/HLgnu5c.jpg'
                      alt='shoplist'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      jquery
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      ajax
                    </div>
                  </p>
                </div>
              </div>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/7-11styleguildline/'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>品牌視覺導覽</button>
                    <img
                      src='https://i.imgur.com/jX0pwZc.jpg'
                      alt='styleguildline'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      pug/scss
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      OOCSS
                    </div>
                  </p>
                </div>
              </div>
              <div className='border border-4 border-primary mb-3 p-3 rounded-4 products'>
                <div className='work mb-3 p-3'>
                  <a
                    href='https://swampylin.github.io/KaohsiungTravel/index.html'
                    target='_blank'
                    className='link-secondary link-underline-opacity-50'
                  >
                    <button className='btn btn-primary'>高雄旅遊資訊</button>
                    <img
                      src='https://i.imgur.com/qmhvA1i.jpg'
                      alt='KaohsiungTravel'
                      className='img-fluid'
                    />
                    <div className='text'></div>
                  </a>
                </div>
                <div className='skill'>
                  <p className='content'>
                    Key skill:
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      ajax
                    </div>
                    <div className='badge bg-primary text-wrap fs-6 mx-1'>
                      Template literals
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
