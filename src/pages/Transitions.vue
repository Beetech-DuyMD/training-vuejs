<template>
  <h1>Transition Is The Heare</h1>
  <div class="item">
    <!-- <router-link
      :to="`transitions/${transition.id}`"
      v-for="(transition, index) in transitions"
      :key="index"
    >
      {{ transition.name }}
    </router-link> -->
    <input type="text" v-model="searchText" />
    <div v-for="(car, index) in transitions" :key="index">{{ car.name }}</div>
    {{ firstName }}
    <button @click="onChangeSomething">Click Me !</button>
  </div>
</template>

<script>
// import { ref, reactive, watch, watchEffect } from "vue";
import useTransition from "../uses/fetchDataTransition";
export default {
  name,
  data() {
    return {
      // transitions: [],
    };
  },
  // created() {
  //   fetch("http://localhost:3000/transitions")
  //     .then((response) => response.json())
  //     .then((data) => (this.transitions = data));
  // },
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  setup() {
    // console.log(props);
    // console.log(context);
    // const searchText = ref("");
    // let cars = reactive(["SomeThing", "Mạc", "Đức", "Duy"]);
    // let firstName = ref("Mạc Đức Duy");
    // function onChangeSomething() {
    //   console.log(" running here");
    //   firstName.value = "Duy Đức Mạc";
    // }
    // watch(searchText, () => {
    //   console.log(`Running Search Text watch ${searchText.value}`);
    // });

    // watchEffect(() => {
    //   if (searchText.value) {
    //     console.log(`Running Search Text watchEffect ${searchText.value}`);
    //   }
    // });

    const { transitions, fetchData } = useTransition();
    fetchData();
    return { transitions };
  },
};
</script>

<style></style>
