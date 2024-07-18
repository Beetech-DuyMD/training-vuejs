import { ref } from "vue";
import { projectAuth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
async function signIn(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    if (!response) throw new Error("Error");
    console.log(response);
  } catch (err) {
    if (err) {
      error.value = "The email or password dose not matched";
    }
  } finally {
    isPending.value = false;
  }
}
export function useLogin() {
  return { signIn, isPending, error };
}
