<template>
    <div class="border-b-4 border-red-500">
        <span class="bg-red-500 px-5 py-2 text-white text-lg">
            {{ text }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>