// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import './LoginSignup.css'; // Ensure the path is correct

// const LoginSignupPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({
//     passwordLength: '',
//     passwordMatch: '',
//     form: ''
//   });
//   const navigate = useNavigate(); // Initialize useNavigate

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setErrors({
//       passwordLength: '',
//       passwordMatch: '',
//       form: ''
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setErrors({
//       passwordLength: '',
//       passwordMatch: '',
//       form: ''
//     });

//     // Basic validation for signup
//     if (!isLogin) {
//       if (password.length < 6) {
//         setErrors((prev) => ({ ...prev, passwordLength: 'Password must be at least 6 characters long' }));
//         return;
//       }
//       if (password !== confirmPassword) {
//         setErrors((prev) => ({ ...prev, passwordMatch: 'Passwords do not match' }));
//         return;
//       }
//       if (!email || !password || !confirmPassword || !username) {
//         setErrors((prev) => ({ ...prev, form: 'Please fill in all fields.' }));
//         return;
//       }
//       // Successful signup, navigate to product page
//       alert('Successfully signed up!');
//       navigate('/product'); // Navigate to Product Page after signup
//     } else {
//       // Handle login logic here
//       alert('Successfully logged in!');
//       navigate('/product'); // Navigate to Product Page after login (if needed)
//     }
//   };

//   return (
//     <div className="login-signup-container">
//       <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//       <form className="form-container" onSubmit={handleFormSubmit}>
//         {isLogin ? (
//           <div className="form-group">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.passwordLength && <p className="error-message">{errors.passwordLength}</p>}
//           </div>
//         ) : (
//           <div className="form-group">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errors.passwordLength && <p className="error-message">{errors.passwordLength}</p>}
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               required
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             {errors.passwordMatch && <p className="error-message">{errors.passwordMatch}</p>}
//           </div>
//         )}
//         {errors.form && <p className="error-message">{errors.form}</p>}
//         <button type="submit" className="submit-button">
//           {isLogin ? "Login" : "Sign Up"}
//         </button>
//       </form>
//       <button onClick={toggleForm} className="toggle-button">
//         Switch to {isLogin ? "Sign Up" : "Login"}
//       </button>
//     </div>
//   );
// };

// export default LoginSignupPage;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './LoginSignup.css'; // Ensure the path is correct

const LoginSignupPage = () => {
  // Define the state variables and hooks
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    passwordLength: '',
    passwordMatch: '',
    form: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({
      passwordLength: '',
      passwordMatch: '',
      form: ''
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors({
      passwordLength: '',
      passwordMatch: '',
      form: ''
    });

    // Basic validation for signup
    if (!isLogin) {
      if (password.length < 6) {
        setErrors((prev) => ({ ...prev, passwordLength: 'Password must be at least 6 characters long' }));
        return;
      }
      if (password !== confirmPassword) {
        setErrors((prev) => ({ ...prev, passwordMatch: 'Passwords do not match' }));
        return;
      }
      if (!email || !password || !confirmPassword || !username) {
        setErrors((prev) => ({ ...prev, form: 'Please fill in all fields.' }));
        return;
      }

      // Proceed with making the API request for signup
      fetch('http://localhost:3003/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to sign up');
          }
          return response.json();
        })
        .then((data) => {
          alert('Successfully signed up!');
          navigate('/product'); // Navigate to Product Page after signup
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error during signup');
        });
    } else {
      // Handle login logic here (using username instead of email)
      if (!username || !password) {
        setErrors((prev) => ({ ...prev, form: 'Please fill in both fields.' }));
        return;
      }

      // Send login request with username and password
      fetch('http://localhost:3003/users/login', {  // Ensure the correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then((data) => {
          alert('Successfully logged in!');
          navigate('/product'); // Navigate to Product Page after login
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error during login');
        });
    }
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form className="form-container" onSubmit={handleFormSubmit}>
        {isLogin ? (
          <div className="form-group">
            <input
              type="text"  // Use text input for username during login
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.passwordLength && <p className="error-message">{errors.passwordLength}</p>}
          </div>
        ) : (
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.passwordLength && <p className="error-message">{errors.passwordLength}</p>}
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.passwordMatch && <p className="error-message">{errors.passwordMatch}</p>}
          </div>
        )}
        {errors.form && <p className="error-message">{errors.form}</p>}
        <button type="submit" className="submit-button">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button onClick={toggleForm} className="toggle-button">
        Switch to {isLogin ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};

export default LoginSignupPage;