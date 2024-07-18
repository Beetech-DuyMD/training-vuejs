import { ref } from "vue";
import { fireStoreCore } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function () {
  const transitions = ref([]);
  const err = ref([]);
  const fetchData = async () => {
    const data = await getDocs(collection(fireStoreCore, "transactions"));
    data.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };
  return { transitions, err, fetchData };
}
