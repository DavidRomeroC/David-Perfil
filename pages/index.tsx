import type { NextPage } from 'next'
import Image from 'next/image'
import { Description, Layout, Skills } from '../components'

const HomePage: NextPage = () => {

  return (
    <>
      <Layout title="David's Home Page" foot={true}>
        <div className="main__page-content">
          <div className="exp__content">
            <div className="photo__content">
              <Image placeholder='blur' blurDataURL="/profile-photo.jpeg" src="/profile-photo.jpeg" alt='profile picture' width="250" height="350"/>
              <div className='name__content'>
                <h4>David Romero Candelario</h4>
                <p>FrontEnd ReactJs Developer</p>
              </div>
            </div>
            <div className="description__content">
              <div>
              <hr />
              </div>
            <h1><b>Experiencia</b></h1>
              <Description />
            </div>
          </div>
          <div className="skill__content" >
            <h2><b>Habilidades</b></h2>
            <Skills />
          </div>
        </div >
      </Layout>
    </>
  )
}

export default HomePage
