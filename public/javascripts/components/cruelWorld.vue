<template>
    <div class="cruel">
        Cruel
        <span>{{ who }}</span>
    </div>
</template>

<script>
export default { // This is important, I got errors when using `export default`
    data () {
        return {
            who: "World"
        }
    },
    mounted () {
        setTimeout(() => {
            console.log('We can use ES6 too!')
        }, 1000)
    }
}
</script>

<style scoped>
.cruel {
    color: green;
}
</style>