<template>
    <header class="grid grid-cols-2 text-center font-bold">
        <nav class="col-span-2 hidden md:block lg:block">
            <div class="flex items-center justify-between">
                <router-link to="/">
                    <img class="w-40" src="@/assets/ClickService.png" alt="Logo">
                </router-link>
                <div class="flex">
                    
                    <router-link to="/login" class="ml-4 text-[#3395cb] rounded-sm border border-[#3395cb] p-2 w-30">
                        Entrar
                    </router-link>
                    <router-link to="/sign-up" class="ml-4 text-[#fff] bg-[#3395cb] rounded-sm p-2 w-30 mr-4 ">
                        Cadastre-se
                    </router-link>
                </div>

            </div>
        </nav>
        <router-view />
    </header>
</template>


<script>
export default {
    name: 'MainHeader',
    data() {
        return {

        }
    },

    methods: {

    }
}

</script>