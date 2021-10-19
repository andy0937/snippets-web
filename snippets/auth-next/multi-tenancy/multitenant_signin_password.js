// This snippet file was generated by processing the source file:
// ./auth-next/multi-tenancy.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START multitenant_signin_password_modular]
import { signInWithEmailAndPassword } from "firebase/auth";
auth.tenantId = 'TENANT_ID';

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User is signed in.
    // userCredential.user.tenantId is 'TENANT_ID'.
  }).catch((error) => {
    // Handle / display error.
    // ...
  });
// [END multitenant_signin_password_modular]