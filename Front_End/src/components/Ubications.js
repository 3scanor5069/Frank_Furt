import React from 'react';
import '../styles/Ubications';

const Ubicaciones = () => {
  return (
    <div className="ubicaciones-container">
      <div className="ubicaciones-content">
        <div className="ubicaciones-info">
          <h3 className="ubicaciones-title">Nuestra Ubicación</h3>
          <div className="ubicacion-item">
            <div className="ubicacion-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="ubicacion-details">
              <h4>Frank Furt Domicilios</h4>
              <p>Calle 123 #45-67</p>
              <p>Bogotá, Colombia</p>
              <p>Teléfono: +57 301 234 5678</p>
            </div>
          </div>
          <div className="horarios">
            <h4>Horarios de Atención</h4>
            <p>Lunes a Domingo: 11:00 AM - 10:00 PM</p>
            <p>Domicilios hasta las 9:30 PM</p>
          </div>
        </div>
        
        <div className="mapa-container">
          <div className="mapa-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9068!2d-74.0817!3d4.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bd3e7b8e89b%3A0x1234567890abcdef!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Frank Furt"
            ></iframe>
          </div>
          <div className="mapa-overlay">
            <div className="frank-furt-marker">
              <div className="crown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16L3 7L8.5 10L12 4L15.5 10L21 7L19 16H5Z" fill="currentColor"/>
                </svg>
              </div>
              <span>Frank Furt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicaciones;
