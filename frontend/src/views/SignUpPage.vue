<template>
    <div class="min-h-screen flex items-center justify-center">
        <main class="px-8 border-1 border-[#00000029] rounded-xl shadow-xl max-w-7xl">
            <div class="py-5">
                <h2 class="mb-20 text-[#3395cb] font-bold text-2xl">Cadastre-se</h2>

                <div class="flex flex-col items-start pb-3">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="name">Nome</label>
                    <input v-model="form.name"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="text" placeholder="Digite seu nome">
                </div>

                <div class="flex flex-col items-start pb-3">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="phone">Telefone</label>
                    <input v-model="form.phone"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="tel" placeholder="(99)99999-9999" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                </div>

                <div class="flex flex-col items-start pb-3">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="email">E-mail</label>
                    <input v-model="form.email"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="email" placeholder="example@mail.com">
                </div>

                <div class="flex flex-col items-start pb-3">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="password">Senha</label>
                    <input v-model="form.password"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="password" placeholder="Digite sua senha">
                </div>

                <div class="flex flex-col items-start">
                    <label class="py-2 px-2 font-bold text-[#444444]" for="confirm-password">Confirme a senha</label>
                    <input v-model="form.confirmPassword"
                        class="border border-[#3395cb] rounded-lg px-3 py-4 focus:ring-2 focus:ring-blue-100 outline-none w-100 "
                        type="password" placeholder="Digite sua senha">

                </div>

                <div>
                    <input type="submit" value="Cadastrar" @click.prevent="signUp"
                        class="my-8 text-[#fff] bg-[#3395cb] rounded-lg p-3 w-100 font-bold">
                </div>
            </div>
        </main>
    </div>

</template>

<script setup>
import api from "@/api.js";

const form = {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
};

async function signUp() {
    api.post("http://localhost:5000/users/register", form)
        .then((res) => {
            if (res.status === 200) {
                alert("Cadastro efetuado com sucesso");
                window.location.reload();
            }

        })
}
</script>