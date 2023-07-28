import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='container bg-body-secondary'>
        <div className='row flex-md-row-reverse flex-column'>
          <div className='col-md-6'>
            <img
              src='https://i.imgur.com/Iq9FYSM.jpg'
              className='img-fluid rounded'
              alt='大頭照'
            />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3'>
            <h2 className='fw-bold'>林澤廷</h2>
            <h5 className='font-weight-normal text-muted mt-2'>前端工程師</h5>
            <p>
              從代書助理轉換跑道進入前端工程師行列，透過Udemy、六角學院、hahow等線上課程的學習與前輩的教導，掌握了前端工程師應具備的技能，而且過程中使用notion和whimsical為工具記錄下自己的學習歷程。
            </p>
            <div className='input-group mb-0 mt-4'></div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <div className='card-body p-0 bg-body-secondary'>
                <h4 className='mb-0 mt-4'>聯絡資訊</h4>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text mb-0 w-75 p-3'>電話：0923882297</p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text  mb-0 w-75 p-3'>
                    Github：
                    <a href='https://github.com/SwampyLin'>
                      https://github.com/SwampyLin
                    </a>
                  </p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text  mb-0 w-75 p-3'>
                    Email：
                    <a href='mailto:redze801201＠hotmail.com.tw'>
                      redze801201＠hotmail.com.tw
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative'>
              <div className='card-body p-0 bg-body-secondary'>
                <h4 className='mb-0 mt-4'>學歷</h4>
                <h5 className='mb-0 mt-4 fw-bold'>東吳大學</h5>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text  mb-0 w-75 p-3'>中文系學士</p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text mb-0 w-75 p-3'>法律系學士</p>
                </div>
              </div>
              <div className='card-body p-0 bg-body-secondary'>
                <h4 className='mb-0 mt-4'>經歷</h4>
                <h5 className='mb-0 mt-4 fw-bold'>信義房屋代書助理</h5>
                <div className='d-flex justify-content-between mt-3'>
                  <p className='card-text  mb-0 w-75 p-3'>2019/1～2020/9</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative bg-body-secondary'>
              <div className='card-body p-0 '>
                <h4 className='mb-0 mt-4'>技能</h4>
                <div className='d-flex justify-content-between mt-3'></div>
              </div>
              <div className='card-body p-0'>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    React
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    JavaScript
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    html/pug
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    css/sass/scss
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    Bootstrap
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    Jquery
                  </div>
                </div>
                <div className='d-flex justify-content-between '>
                  <div className='badge bg-secondary text-wrap mt-2 fs-3 text-primary'>
                    Git
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-md-4'>
            <div className='card border-0 mb-4 position-relative position-relative bg-body-secondary'>
              <div className='card-body p-0'>
                <h4 className='mb-0 mt-4'>專案與作品集</h4>
                <div className='d-flex justify-content-between mt-3 p-3'>
                  <Link
                    className='btn btn-primary rounded-3 p-3 w-25 text-secondary'
                    to='/products'
                  >
                    作品列表
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
