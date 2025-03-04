import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <section className={styles.loginSection}>
      <h1 className={styles.loginTitle}>LOGIN</h1>
      <div className={styles.userTypeToggle}>
         <Link to="/" className={styles.userTypeButton}>USER</Link>
        <button className={`${styles.userTypeButton} ${styles.active}`}>ADMIN</button>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>Email</label>
          <input type="email" id="email" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>Password</label>
          <input type="password" id="password" className={styles.inputField} required />
        </div>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" className={styles.checkbox} />
          <label htmlFor="rememberMe" className={styles.checkboxLabel}>REMEMBER ME</label>
        </div>
        <button type="submit" className={styles.signInButton}>SIGN IN</button>
      </form>
      <div className={styles.divider}>OR</div>
      <button className={styles.googleSignIn}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/75bc117934ee10e4251a8ba588a96b83ffac9d77a9154914708d62f2ac460581?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.googleIcon} />
        Sign in with Google
      </button>
      <button className={styles.facebookButton}>
          Sign in with Facebook
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/674f5d35b3043af178e606faa8b615daa973094ff3140f6756934f6682d8e5c9?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="Facebook logo" className={styles.facebookLogo} />
        </button>
      <a href="#" className={styles.forgotPassword}>
        
        Lost password? Recovery password
      </a>
    </section>
  );
}

export default LoginForm;