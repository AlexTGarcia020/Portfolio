import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Navbar from './Components/Navbar';
import Typewriter from './Components/textAnimation';
import Scroll from './Components/Scroll';
import MediaQuery from 'react-responsive';

import './App.css';

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
      <Navbar />
      <div className="app-content">
        <animated.div
          className="parallax-effect"
          style={{
            transform: scroll.interpolate((s) => `translateY(-${s * 0.5}px)`),
          }}
        >
          <section id='inicio'>
            <div className='d-flex text-start text-white content-text-main p-0'>
            <MediaQuery minWidth={768}>
                  {(matches) =>
                    matches ? (
                      <h1 className='text-inicio-md  fs-5 ps-5 w-50'>
                        Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                      </h1>
                    ) : (
                      <h1 style={{fontSize:"20px", margin:"0", padding:"50px"}}>
                        Este es uno de mis proyectos: mi Portfolio Personal. Aquí podrás ver mis proyectos, siempre actualizados, junto con mi experiencia en tecnologías, metodologías, bibliotecas, frameworks y bases de datos aprendidas. Además, podrás descargar mi CV más abajo. No dudes en contactarme a través de mis redes. Si estás leyendo esto, es probable que seas un reclutador o un colega de profesión. ¡Espero que te guste!<strong> Alex Garcia ©2024</strong>
                      </h1>
                    )
                  }
                </MediaQuery>
            </div>
            <div className='text-white content-text-secondary'>
              <Typewriter/>
            </div>
            <Scroll />
          </section>
        </animated.div>
      </div>
    </>
  );
}

export default App;