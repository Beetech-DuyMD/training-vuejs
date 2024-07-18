import { projectAuth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

// Tạo một ref để lưu trữ thông tin người dùng hiện tại
const user = ref(null);

onAuthStateChanged(projectAuth, (_user) => {
  if (_user) {
    return (user.value = _user);
  }
});
function getUser() {
  return { user };
}
export function useUser() {
  return { getUser };
}
