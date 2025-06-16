import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, MapPin, Lock } from 'lucide-react';
import '../styles/Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Register attempt:', formData);
    // Aquí agregarías la lógica de registro
  };

  const handleSwitchToLogin = () => {
    // Navegar a la página de login
    window.location.href = '/login';
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Elementos decorativos */}
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        
        {/* Header */}
        <div className="register-header">
          <div className="register-icon">
            <User className="icon" />
          </div>
          <h1 className="register-title">FRANK FURT</h1>
          <p className="register-subtitle">Crear nueva cuenta</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="register-form">
          <div className="name-row">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={formData.firstName}
                onChange={handleInputChange}
                className="register-input"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleInputChange}
                className="register-input"
                required
              />
            </div>
          </div>

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
              className="register-input"
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <Phone className="icon-small" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleInputChange}
              className="register-input"
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              <MapPin className="icon-small" />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={formData.address}
              onChange={handleInputChange}
              className="register-input"
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
              className="register-input password-input"
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

          <div className="input-group">
            <div className="input-icon">
              <Lock className="icon-small" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="register-input password-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="password-toggle"
            >
              {showConfirmPassword ? <EyeOff className="icon-small" /> : <Eye className="icon-small" />}
            </button>
          </div>

          <div className="terms-checkbox">
            <label className="checkbox-label">
              <input type="checkbox" className="custom-checkbox" required />
              <span className="checkbox-text">
                Acepto los{' '}
                <a href="#" className="terms-link">
                  términos y condiciones
                </a>
              </span>
            </label>
          </div>

          <button type="submit" className="register-button">
            Crear Cuenta
          </button>
        </form>

        {/* Divisor */}
        <div className="register-divider">
          <div className="divider-line"></div>
          <span className="divider-text">o</span>
          <div className="divider-line"></div>
        </div>

        {/* Cambiar a login */}
        <div className="register-switch">
          <p className="switch-text">
            ¿Ya tienes cuenta?{' '}
            <button
              type="button"
              onClick={handleSwitchToLogin}
              className="switch-link"
            >
              Iniciar Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
