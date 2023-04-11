const Input = document.querySelector('#slider');
const Button = document.querySelector('#button');
const Span = document.querySelector('#valor'); 
const gerarPass = document.querySelector('#password');
const conteinerPassword = document.querySelector('conteiner-password');
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@"; 
const remover = document.querySelector(".hide");
const novaSenha = "";

Span.innerHTML = Input.value;
slider.oninput = function(){
    Span.innerHTML = this.value;  
}
 /*função para gerar a senha*/
 function Password(){
    let pass = "";
    for(let i = 0, n = charset.length; i < Input.value; i ++){
        /* a variavel pass vai cocatenar, acrescentado valores que serão asenha, e vai acessar nossa variavel charset com o charAt que vai pegar a posição dos valores que dentro tem o Math.floor para gerar numero interiro e o Math.random para gerar numeros aleatorios*/
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    remover.classList.remove("hide");
    gerarPass.innerHTML = pass;
    
    novaSenha = pass;
 }

 function copiar()
 {
  alert("Senha copiada com sucesso!");  
  navigator.clipboard.writeText(novaSenha);
 }