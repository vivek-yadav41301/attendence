// Firebase initialization
import { getMessaging } from "firebase/messaging";

const messaging = getMessaging();
messaging
  .getToken({ vapidKey: "YOUR_PUBLIC_VAPID_KEY" })
  .then((currentToken) => {
      if (currentToken) {
          console.log("Notification Token:", currentToken);
          // Use the token to send targeted notifications
      } else {
          console.error("No registration token available.");
      }
  })
  .catch((err) => {
      console.error("Error getting token:", err);
  });