<template>
   <div>
        <main class="flex justify-center">
            <h2>Acesse sua conta</h2>
            
            <div>
                <label for="email">E-mail</label>
                <input type="text" placeholder="Escreva seu e-mail">
            </div>

            <div>
                <label for="password">Senha</label>
                <input type="password" placeholder="Escreva sua senha">
                
            </div>

            <div>
                <input type="submit" value="Entrar">
            </div>
        </main>
   </div>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>