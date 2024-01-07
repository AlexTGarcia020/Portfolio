import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import MediaQuery from 'react-responsive';

import Navbar from './Components/Navbar';
import Scroll from './Components/Scroll';
import Tecnologias from './Components/Tecnologias';
import Proyectos from './Components/Proyectos';
import Footer from './Components/Footer';

import './App.css';
import Scroll2 from './Components/Scroll-1';

function App() {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));

  const handleScroll = () => {
    set({ scroll: window.scrollY });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <MediaQuery minDeviceWidth={768}>
      <Navbar /> 
      <div className="app-content">
        <animated.div
          className="parallax-effect"
          style={{
            transform: scroll.interpolate((s) => `translateY(-${s * 0.5}px)`),
          }}
        >
          <section id='inicio'>
            <div className='text-white content-text-main'>
              <div className='d-flex justify-content-center'>
              <MediaQuery maxWidth={500}>
                {(matches) =>
                  matches ? (
                    <h1 className='text-inicio-sm'>
                         Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                    </h1>
                  ) : (
                    <MediaQuery minWidth={501} maxWidth={1300}>
                      {(matches) =>
                        matches ? (
                          <h1 className='text-inicio-md'>
                               Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                          </h1>
                        ) : (
                          <h1 className='text-inicio'>
                            Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                          </h1>
                        )
                      }
                    </MediaQuery>
                  )
                }
              </MediaQuery>
              </div>
            </div>
            <Scroll />
          </section>
        </animated.div>
        <Tecnologias/>
        <Scroll />
        <section id="proyectos">
          <Proyectos />
        </section>
        <section>
          <Footer />
        </section>
      
      </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
      <Navbar /> 
      <div className="app-content" style={{height:'500vh'}}>
        <animated.div
          className="parallax-effect"
          style={{
            transform: scroll.interpolate((s) => `translateY(-${s * 0.5}px)`),
          }}
        >
          <section id='inicio'>
            <div className='text-white content-text-main'>
              <div className='d-flex justify-content-center'>
              <MediaQuery maxWidth={500}>
                {(matches) =>
                  matches ? (
                    <h1 className='text-inicio-sm'>
                         Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                    </h1>
                  ) : (
                    <MediaQuery minWidth={501} maxWidth={1300}>
                      {(matches) =>
                        matches ? (
                          <h1 className='text-inicio-md'>
                               Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                          </h1>
                        ) : (
                          <h1 className='text-inicio'>
                            Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                          </h1>
                        )
                      }
                    </MediaQuery>
                  )
                }
              </MediaQuery>
              </div>
            </div>
            <Scroll />
          </section>
        </animated.div>
        <Tecnologias/>
        <Scroll2 />
        <section id="proyectos">
          <Proyectos />
        </section>
        <section>
          <Footer />
        </section>
      
      </div>
      </MediaQuery>
    </>
  );
}

export default App;