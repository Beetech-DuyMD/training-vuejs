<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit">
        <div class="row flex flex-col">
          <label for="fullName"
            ><span class="font-semibold text-base">Full Name</span></label
          >
          <input
            id="fullName"
            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            type="text"
            placeholder="iMoney...."
            v-model="fullName"
          />
        </div>
        <div class="row flex flex-col mt-6">
          <label for="email"
            ><span class="font-semibold text-base">Email Address</span></label
          >
          <input
            id="email"
            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            type="email"
            placeholder="Email Address...."
            v-model="email"
          />
        </div>
        <div class="row flex flex-col mt-6">
          <label for="password"
            ><span class="font-semibold text-base">Password</span></label
          >
          <input
            id="password"
            class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
            type="password"
            placeholder="Example...."
            v-model="passWord"
          />
        </div>
        <button
          :disabled="isPending"
          class="text-center w-full px-3 py-4 bg-primary mt-6 rounded-lg text-white"
        >
          {{ isPending ? " Waiting for you....." : "Sign In" }}
        </button>
      </form>
      <div class="text-left mt-3" v-if="error">
        <span class="text-red">{{ error }}</span>
      </div>
      <!-- Start Direction  -->
      <div class="w-full mt-6 text-center">
        <span>Im ready a member.</span>
        <router-link
          :to="{ name: 'Login', param: {} }"
          class="ml-1 text-primary disabled"
          >Sign In</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useSignUp } from "@/composables/useSignUp";
import { ref } from "vue";
useSignUp;
export default {
  name,
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const fullName = ref("");
    const passWord = ref("");
    const email = ref("");

    const onSubmit = async () => {
      await signUp(fullName.value, email.value, passWord.value);
    };
    return {
      error,
      isPending,
      fullName,
      email,
      passWord,
      onSubmit,
    };
  },
};
</script>

<style></style>
