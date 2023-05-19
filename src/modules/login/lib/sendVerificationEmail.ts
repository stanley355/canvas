import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import initFirebaseApp from "@/common/lib/firebase/initFirebaseApp";

export const sendVerificationEmail = (email: string) => {
  const app = initFirebaseApp();
  const auth = getAuth(app);
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://www.example.com/verification/",
    // This must be true.
    handleCodeInApp: true,
  };
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      console.log("success");
      window.localStorage.setItem("emailForSignIn", email);
      // ...
    })
    .catch((error) => {
      console.log("error: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};
