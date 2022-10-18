//import video from '../../images/Video/video.mp4';

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-container">
        {/*<video src={video} className="video" loop autoPlay muted></video>*/}
      </div>
      <div className="content">
        <h3>Пригода варта того </h3>
        <p>Відкривайте нові місця разом з нами, пригоди чекають</p>
        <button className="btn" type="button" data-modal-open>
          Замовити послугу
        </button>
      </div>
    </section>
  );
};

export default Hero;
