<template>
    <header class="grid grid-cols-2 text-center">
        <nav class="col-span-2 hidden md:block lg:block">
            <div class="flex justify-center">
                <router-link to="/">
                    <img class="w-40" src="../assets/ClickService.png" alt="ClickService">
                </router-link>
            </div>
        </nav>
        <router-view />
    </header>
</template>

<script>
export default {
    name: 'BasicHeader',
    data() {
        return {

        }

    }
}
</script>