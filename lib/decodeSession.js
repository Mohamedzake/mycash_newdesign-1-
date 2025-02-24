// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   }
  
  // Function to Base64 decode
  function base64Decode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
  
  // Function to decrypt (Assuming a simple encryption for demonstration; adjust accordingly)
  function decrypt(data) {
    // Implement your decryption logic here
    // This is a placeholder and should be replaced with actual decryption code
    return data; // Return the decrypted data
  }
//   const sessionCookieName = 'your_session_cookie_name';
  const decryptionKey = process.env.DECODEKEY; // Replace with your actual decryption key
  try {
    console.log('Decoded session:', session);
  } catch (error) {
    console.error('Error decoding session:', error);
  }
  export function decodeSession(cookieName) {
    // Step 1: Retrieve the session cookie
    const encodedSession =  cookieName
    if (!encodedSession) {
      throw new Error('Session cookie not found');
    }
  
    // Step 2: Base64 decode the session data
    const base64DecodedSession = base64Decode(encodedSession);
  
    // Step 3: Decrypt the session data (if applicable)
    const decryptedSession = decrypt(base64DecodedSession, decryptionKey);
  
    // Step 4: Parse the JSON string to get the session object
    const sessionData = JSON.parse(decryptedSession);
  
    return sessionData;
  }