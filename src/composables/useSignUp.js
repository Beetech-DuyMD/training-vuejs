import { ref } from "vue";
import { projectAuth } from "@/config/firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";


const error = ref(null);
const isPending = ref(false);
async function signUp(fullName, email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await createUserWithEmailAndPassword(projectAuth, email, password);
    await updateProfile(response.user, {
        displayName: fullName
      });
    console.log(response);
    if (!response) throw new Error("Error");
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      error.value = "The email address is already in use by another account.";
    } else {
      error.value = "Could not create a new user.";
    }
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return { signUp, isPending, error };
}
