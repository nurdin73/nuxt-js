<template>
  <router-link :to="`/${type}/${data.category}/${data.slug}`">
    <div class="relative h-40">
      <div class="h-full relative overflow-hidden">
        <div class="h-full relative p-0 m-0">
          <div class="absolute top-0 bottom-0 left-0 right-0 w-full">
            <div class="relative overflow-hidden">
              <img
                v-bind:src="data.thumbnail"
                :alt="data.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div v-if="data.info" class="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-green-800 to-green-600 px-4 py-2 grid grid-cols-3 gap-4">
              <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-white text-xs whitespace-nowrap truncate">{{ data.info.times }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="concierge-bell" class="svg-inline--fa fa-concierge-bell text-white h-4 w-4 fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path>
                </svg>
                <span class="text-white text-xs whitespace-nowrap truncate">{{ data.info.servings }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="text-white text-xs whitespace-nowrap truncate">{{ data.info.difficulty }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 class="line-clamp-2 text-lg font-bold leading-5 text-gray-700 text-justify">{{ data.title }}</h6>
  </router-link>
</template>

<script>
export default {
    props: {
        data: Object,
        type: String
    }
}
</script>