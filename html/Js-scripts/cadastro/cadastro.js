
class Produto {

    constructor() {
        this.arrayProdutos = [];
        
    }

    salvar(){
        let produto =this.lerDados();

        this.adicionar(produto);


        this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText ='';

        for(let i =0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_marca = tr.insertCell();
            let td_modelo = tr.insertCell();
            let td_ano = tr.insertCell();
            let td_cor = tr.insertCell();
            let td_potencia = tr.insertCell();
            let td_renavan = tr.insertCell();
            let td_placa = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_marca.innerText =this.arrayProdutos[i].marca1
            td_modelo.innerText = this.arrayProdutos[i].modelo1;
            td_ano.innerText = this.arrayProdutos[i].ano1;
            td_cor.innerText = this.arrayProdutos[i].cor1;
            td_potencia.innerText = this.arrayProdutos[i].potencia1;
            td_renavan.innerText = this.arrayProdutos[i].renavan1;
            td_placa.innerText = this.arrayProdutos[i].placa1;
            

            
            
        }
    }


    adicionar(produto){
        this.arrayProdutos.push(produto);
        
    }

    lerDados(){
        let produto = {}
        

        produto.marca1 = document.getElementById('marca1').value;
        produto.modelo1 = document.getElementById('modelo1').value;
        produto.ano1 = document.getElementById('ano1').value;
        produto.cor1 = document.getElementById('cor1').value;
        produto.potencia1 = document.getElementById('potencia1').value;
        produto.renavan1 = document.getElementById('renavam1').value;
        produto.placa1 = document.getElementById('placa1').value;
        

        return produto;
    }


    deletar(){
        
    }
}

let produto = new Produto();