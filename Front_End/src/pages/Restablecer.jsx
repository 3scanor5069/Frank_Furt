import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/Restablecer.css';

const RecuperarPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  
  const [step, setStep] = useState(token ? 'reset' : 'request');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar errores al escribir
    if (error) setError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleRequestReset = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Se ha enviado un enlace de recuperación a tu email');
        setStep('sent');
      } else {
        setError(data.message || 'Error al enviar el email de recuperación');
      }
    } catch (error) {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Contraseña actualizada exitosamente');
        setStep('success');
        setTimeout(() => {
          navigate('/Login');
        }, 3000);
      } else {
        setError(data.message || 'Error al restablecer la contraseña');
      }
    } catch (error) {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const renderRequestForm = () => (
    <div className="recovery-container">
      <div className="recovery-card">
        <div className="recovery-header">
          <div className="crown-logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16L3 7L8.5 10L12 4L15.5 10L21 7L19 16H5Z" fill="currentColor"/>
            </svg>
          </div>
          <h1>Recuperar Contraseña</h1>
          <p>Ingresa tu email para recibir un enlace de recuperación</p>
        </div>

        <form onSubmit={handleRequestReset} className="recovery-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="recovery-btn" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                Enviando...
              </>
            ) : (
              'Enviar Enlace de Recuperación'
            )}
          </button>
        </form>

        <div className="recovery-footer">
          <p>¿Recordaste tu contraseña? <a href="/Login">Iniciar Sesión</a></p>
        </div>
      </div>
    </div>
  );

  const renderResetForm = () => (
    <div className="recovery-container">
      <div className="recovery-card">
        <div className="recovery-header">
          <div className="crown-logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16L3 7L8.5 10L12 4L15.5 10L21 7L19 16H5Z" fill="currentColor"/>
            </svg>
          </div>
          <h1>Nueva Contraseña</h1>
          <p>Ingresa tu nueva contraseña</p>
        </div>

        <form onSubmit={handleResetPassword} className="recovery-form">
          <div className="input-group">
            <label htmlFor="password">Nueva Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Mínimo 6 caracteres"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Repite tu contraseña"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="recovery-btn" disabled={loading}>
            {loading ? (
              <>
                <div className="spinner"></div>
                Actualizando...
              </>
            ) : (
              'Actualizar Contraseña'
            )}
          </button>
        </form>
      </div>
    </div>
  );

  const renderSentMessage = () => (
    <div className="recovery-container">
      <div className="recovery-card success-card">
        <div className="success-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Email Enviado</h1>
        <p>Hemos enviado un enlace de recuperación a tu email. Revisa tu bandeja de entrada y spam.</p>
        <div className="recovery-footer">
          <p>¿No recibiste el email? <button onClick={() => setStep('request')} className="link-btn">Intentar nuevamente</button></p>
        </div>
      </div>
    </div>
  );

  const renderSuccessMessage = () => (
    <div className="recovery-container">
      <div className="recovery-card success-card">
        <div className="success-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>¡Contraseña Actualizada!</h1>
        <p>Tu contraseña ha sido actualizada exitosamente. Serás redirigido al login en unos segundos.</p>
        <div className="recovery-footer">
          <p><a href="/Login">Ir al Login ahora</a></p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="recovery-page">
      {step === 'request' && renderRequestForm()}
      {step === 'reset' && renderResetForm()}
      {step === 'sent' && renderSentMessage()}
      {step === 'success' && renderSuccessMessage()}
    </div>
  );
};

export default RecuperarPassword;
