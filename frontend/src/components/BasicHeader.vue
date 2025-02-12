<template>
    <header class="text-center">
        <nav class="hidden md:block lg:block">
            <div class="flex justify-center">
                <router-link to="/">
                    <img class="w-50" src="../assets/ClickService.png" alt="ClickService">
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