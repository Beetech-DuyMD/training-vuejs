<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 mx-auto">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUCAQMH/8QAMhABAAICAAMGBAUDBQAAAAAAAAECAxEEMVEFEiEyQWEicYGhM1KRsdETQ8EVNEJicv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9RAAAAAAAAAAB5sHoAAAAAAAAAAAAAAAAAAAAIuK4zu7ph1M+tgU5c2PFHx2iPb1R5e0Lf2q697c/0RTMzO58ZnnsB3fNkyefJafr4ONz1n9QA3PWf1dVy3r5b2j6uQFNOOzVmNzFo6Sv4fiK567ruJjnEsd9MGa2G82rETuNeINkZ3+oZd+Smvqq4biYzxMTEVtHOAfcAAAAAAAAAAAAAE3HZpx4+7XzW+zLUcfbv8TeN+FfCE4AAAAAAAADvDknFkrevOJ+zgBuVtFqxaOUxt6l7Pv38EVn/jOlQAAAAAAAAAABHMI5gxc07zZJ62lw6yfiX/8AU/u5AAAAAAAAAABf2Zb8SvylczuzPxbx1jbRAAAAAAAAAAAA9AYuWNZckf8Aaf3cPtxdJpxF46zt8QAAAAAAAAAAVdm/7iferTZ3Zld5bW6RpogAAAAAAAAAAA8nlPyBB2l3LRW1LRNonU6REfu9B4AAAAAAAAeP8D0GpwOKcWHcx8VvGVCbs/Je+KYvMzqVIAAAAAAAAAABvXiGvAGJkp/TyWp0nTlV2hj7ubv+lo2lgAAAAAAAAAD5cwafZ1dcPM9bbVOMdIx0rSvKIh2AAAAAAAAAAAACfjcNstI7kbtE8ts3Jjtht3LxqdbbSDtLHvu5I+VgQj14AAAAAAAo4fhr5O5bXwTO97T+MzqG1gr3MNKz6QDsAAAAAAAAAAAAABzlpGXHakxzdHyBhzE1tNZ5w8U9oU7uebfmhMAAAAAACjgsX9TNu3lr4z82rPNL2dWIwTb80qgAAAAAAAAAAAAAAAAQdqa3i+Vt/ZCq7RtvNFeldJQAAAAAAavAxrhq+6hNwFu9w8a9JmJUgAAAAAAAAAAAAA+eXNjxR8dvpHMH0cZctMVd3nXSOqHLx+S/hiiKR1nmlta153a0zPWQe5bzkyWvPrLgAAAAAAAU8FxEYLzF/JPP2aVbRMbrPeiWI7x5b45+C0wDaGfj7Qn+7j371/hVj4nDk8t4j2nwkH2AAAAAABza9aVm1p1EeoOufJ88ufHi89o3+X1RcTxtrTNcPhHX1lJvc7nxnqCrNx97fDjju1+6Xe53MzM+7wAAAAAAAAAAAAAAB9cXEZcXlt8PSfFbh46lvDJ8M9fRmkg3ImLRuJiYn3esbFmyYp3S2vbqvwcbTJqMkdy32BUH+QH/2Q=="
            alt=""
            class="w-full h-full rounded-full overflow-hidden object-cover"
          />
        </div>
        <div class="font-bold text-2xl text-primary">Mạc Đức Duy</div>
        <p class="font-semibold text-gray-400 mt-1">macducduy1@gmail.com</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <h3 class="col-span-1 font-bold text-xl text-primary mb-2">Genereal</h3>
        <ul>
          <li
            class="col-span-1"
            v-for="(profileOption, index) in profileOptions"
            :key="index"
          >
            <router-link
              :to="profileOption.route"
              class="flex items-center py-3 justify-between"
            >
              <div class="flex gap-4">
                <div :class="profileOption.icon"></div>
                <h5 class="name font-semibold">{{ profileOption.name }}</h5>
              </div>
              <i class="fa-solid fa-chevron-right"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <slot />
</template>

<script>
import { reactive } from "vue";

export default {
  name,
  setup() {
    const profileOptions = reactive([
      {
        icon: "t2ico t2ico-wallet",
        name: "My Walet",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        icon: "t2ico t2ico-wallet",
        name: "Tool",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        icon: "t2ico t2ico-wallet",
        name: "Privacy",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        icon: "t2ico t2ico-wallet",
        name: "About",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        icon: "t2ico t2ico-wallet",
        name: "Logout",
        route: {
          name: "Home",
          params: {},
        },
      },
    ]);
    return { profileOptions };
  },
};
</script>
