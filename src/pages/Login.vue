<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit">
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
            v-model="password"
          />
        </div>
        <button
          class="text-center w-full px-3 py-4 bg-primary mt-6 rounded-lg text-white"
        >
          Sign In
        </button>
      </form>

      <div class="text-left mt-3" v-if="error">
        <span class="text-red">{{ error }}</span>
      </div>

      <!-- Start Direction  -->
      <div class="w-full mt-6 text-center">
        <span>Im a new user.</span>
        <router-link
          :to="{ name: 'Register', param: {} }"
          class="ml-1 text-primary"
          >Sign up</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useLogin } from "@/composables/useLogin";
import { useRouter } from "vue-router";
export default {
  name,
  setup() {
    const { signIn, error, isPending } = useLogin();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const onSubmit = async () => {
      await signIn(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Home", params: {} });
      }
    };
    return { error, isPending, onSubmit, email, password };
  },
};
</script>

<style></style>
