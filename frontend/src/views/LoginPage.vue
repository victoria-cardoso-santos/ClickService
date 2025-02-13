<template>
    <div class="min-h-screen flex items-center justify-center">
        <main class="px-8 border-1 border-[#00000029] rounded-xl shadow-xl max-w-7xl">
            <div class="py-5">
                <h2 class="mb-20 text-[#3395cb] font-bold text-2xl">Acesse sua conta</h2>

                <div class="flex flex-col items-start pb-3">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="email">E-mail</label>
                    <input v-model="form.email"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="email" placeholder="Escreva seu e-mail">
                </div>

                <div class="flex flex-col items-start">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="password">Senha</label>
                    <input v-model="form.password"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="password" placeholder="Escreva sua senha">

                </div>

                <div>
                    <input type="submit" value="Entrar" @click.prevent="login"
                        class="my-8 text-[#fff] bg-[#3395cb] rounded-lg p-3 w-100 font-bold">
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>


import api from "@/api.js";
const form = {
    email: '',
    password: '',
};
async function login() {
    api.post('http://localhost:5000/users/login', form)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            alert("Login efetuado com sucesso");
            window.location.reload();

        })
        .catch(() => {
        });
}

</script>