// import React from 'react';

// const Preloader = () => {
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundColor: '#020305', // Adjust background color as needed
//     }}>
//       <div className="spinner"></div>
//       <style>
//         {`
//           .spinner {
//             width: 50px;
//             height: 50px;
//             border: 5px solid #ccc;
//             border-top: 5px solid #febd69;
//             border-radius: 50%;
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Preloader;


// import React from 'react';

// const Preloader = () => {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column', // Stack spinner and text vertically
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       backgroundColor: '#020305', // Background color
//       color: '#febd69', // Text color
//       fontFamily: 'Arial, sans-serif',
//     }}>
//       <h1 style={{
//         fontSize: '1.5rem',
//         marginBottom: '20px',
//         textAlign: 'center',
//       }}>
//         Welcome to RichRoyals
//       </h1>
//       <p style={{
//         fontSize: '1rem',
//         marginBottom: '30px',
//         textAlign: 'center',
//       }}>
//         Wait a second, you are redirecting...
//       </p>
//       <div className="spinner"></div>
//       <style>
//         {`
//           .spinner {
//             width: 50px;
//             height: 50px;
//             border: 5px solid #ccc;
//             border-top: 5px solid #febd69;
//             border-radius: 50%;
//             animation: spin 1s linear infinite;
//           }
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Preloader;


import React from 'react';
import { therichroyal } from '.';

const Preloader = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // Stack items vertically
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#020305', // Background color
      color: '#febd69', // Text color
      fontFamily: 'var(--font-barriecito)',
    //   fontFamily: 'Arial, sans-serif',
    }}>
      {/* Add Image */}
      <img
        src={therichroyal} // Replace with your actual image path
        alt="The RichRoyal Logo"
        style={{
          width: '150px',
          height: 'auto',
          marginBottom: '20px',
        }}
      />
      <h1 style={{
        fontSize: '1.5rem',
        marginBottom: '20px',
        textAlign: 'center',
      }}>
        Welcome to RichRoyals
      </h1>
      <p style={{
        fontSize: '1rem',
        marginBottom: '30px',
        textAlign: 'center',
      }}>
        Wait a second, you are redirecting...
      </p>
      <div className="spinner"></div>
      <style>
        {`
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #ccc;
            border-top: 5px solid #febd69;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
