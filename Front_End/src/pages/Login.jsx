import React, { useState } from 'react';
import { Eye, EyeOff, Crown, Mail, Lock } from 'lucide-react';
import '../styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Aquí agregarías la lógica de autenticación
  };

  const handleSwitchToRegister = () => {
    // Navegar a la página de registro
    window.location.href = '/register';
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Elementos decorativos */}
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        
        {/* Header */}
        <div className="login-header">
          <div className="login-icon">
            <Crown className="icon" />
          </div>
          <h1 className="login-title">FRANK FURT</h1>
          <p className="login-subtitle">Bienvenido de vuelta</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <div className="input-icon">
              <Mail className="icon-small" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              className="login-input"
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Lock className="icon-small" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
              className="login-input password-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff className="icon-small" /> : <Eye className="icon-small" />}
            </button>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="custom-checkbox" />
              <span className="checkbox-text">Recordarme</span>
            </label>
            <a href="#" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        {/* Divisor */}
        <div className="login-divider">
          <div className="divider-line"></div>
          <span className="divider-text">o</span>
          <div className="divider-line"></div>
        </div>

        {/* Cambiar a registro */}
        <div className="login-switch">
          <p className="switch-text">
            ¿No tienes cuenta?{' '}
            <button
              type="button"
              onClick={handleSwitchToRegister}
              className="switch-link"
            >
              Registrarse
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
