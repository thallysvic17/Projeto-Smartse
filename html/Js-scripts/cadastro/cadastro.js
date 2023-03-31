//produto principal
class Produto {

//metodo construtor
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }
//salvar na tabela
    salvar(){
        let produto =this.lerDados();
        
        if(this.editId == null){
            this.adicionar(produto);
        } else{
            this.atualizar(this.editId, produto)
        }
        
        this.listaTabela();
        
        this.cancelar();

    }
    
//lista de veiculos tabela
    listaTabela(){
        let tbody = document.getElementById('tbody');
        
        tbody.innerText ='';
        
        for(let i =0; i < this.arrayProdutos.length; i++){
            
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_marca = tr.insertCell();
            let td_modelo = tr.insertCell();
            let td_ano = tr.insertCell();
            let td_cor = tr.insertCell();
            let td_potencia = tr.insertCell();
            let td_renavan = tr.insertCell();
            let td_placa = tr.insertCell();
            let td_acoes = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_marca.innerText =this.arrayProdutos[i].marca1;
            td_modelo.innerText = this.arrayProdutos[i].modelo1;
            td_ano.innerText = this.arrayProdutos[i].ano1;
            td_cor.innerText = this.arrayProdutos[i].cor1;
            td_potencia.innerText = this.arrayProdutos[i].potencia1;
            td_renavan.innerText = this.arrayProdutos[i].renavan1;
            td_placa.innerText = this.arrayProdutos[i].placa1;
            
// botao editar veiculo na tabela
            let btnEdit = document.createElement('button');
            let editText =document.createTextNode('Editar');           
            btnEdit.setAttribute("onclick","produto.editar("+ JSON.stringify(this.arrayProdutos[i])+")");
            

// botao  excluir veiculo na tabela
            let btnExcluir = document.createElement('button');
            let excluirText = document.createTextNode('Excluir')
            btnExcluir.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id+")");

//add  classes nos botoes
            btnEdit.classList.add('btn-cadastro','btn-green');
            btnExcluir.classList.add('btn-cadastro', 'btn-red');
            
            td_acoes.appendChild(btnEdit);
            td_acoes.appendChild(btnExcluir);
            
            btnEdit.appendChild(editText);
            btnExcluir.appendChild(excluirText);
        }
    }
    

//funcao adicionar veiculo no array
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

//atualizar tabela
    atualizar(id,produto){
        for(let i =0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].marca1 = produto.marca1;
                this.arrayProdutos[i].modelo1 = produto.modelo1;
                this.arrayProdutos[i].ano1 = produto.ano1;
                this.arrayProdutos[i].cor1 = produto.cor1;
                this.arrayProdutos[i].potencia1 = produto.potencia1;
                this.arrayProdutos[i].renavan1 = produto.renavan1;
                this.arrayProdutos[i].placa1 = produto.placa1;
            }
        }
    }

//funcao editar veiculos
    editar(dados){
        this.editId = dados.id;

        document.getElementById('marca1').value = dados.marca1;
        document.getElementById('modelo1').value = dados.modelo1;
        document.getElementById('ano1').value = dados.ano1;
        document.getElementById('cor1').value = dados.cor1;
        document.getElementById('potencia1').value = dados.potencia1;
        document.getElementById('renavam1').value = dados.renavan1;
        document.getElementById('placa1').value = dados.placa1;
//mudando a class do modal
        document.getElementById('salvar').innerText = "Atualizar"
        const openmodal =$('.modal')
        $(openmodal).addClass("active")
    }
    
    lerDados(){
        let produto = {}

        produto.id = this.id;
        produto.marca1 =    document.getElementById('marca1').value;
        produto.modelo1 =   document.getElementById('modelo1').value;
        produto.ano1 =      document.getElementById('ano1').value;
        produto.cor1 =      document.getElementById('cor1').value;
        produto.potencia1 = document.getElementById('potencia1').value;
        produto.renavan1 =  document.getElementById('renavam1').value;
        produto.placa1 =    document.getElementById('placa1').value;

        return produto;
    }

//funçao limpar forumulario modal
    cancelar(){
    document.getElementById('marca1').value ='';
    document.getElementById('modelo1').value ='';
    document.getElementById('ano1').value ='';
    document.getElementById('cor1').value ='';
    document.getElementById('potencia1').value ='';
    document.getElementById('renavam1').value ='';
    document.getElementById('placa1').value ='';

    document.getElementById('salvar').innerText ='Salvar';
    this.editId = null;
    }

//funçao deletar veiculo array
    deletar(id){
        if(confirm('Deseja realmente deletar o veiculo de ID' + id)){
            let tbody = document.getElementById('tbody');
    
            for(let i =0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id== id){
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

}
let produto = new Produto();


//abrir e fechar modal jquey

$(document).ready(function(){
    const openmodal = $('.modal')
    const cadcliente =$('#cadastrarCliente')
    const modalClose =$('#modalclose')
    const btnSalvar =$('#salvar')
    const btnEdit =$('#openmodal1')
    

        cadcliente.on('click', function(){
            $(openmodal).addClass("active")
    });
        modalClose.on('click', function(){
            $(openmodal).removeClass("active")
    });
        btnSalvar.on('click',function(){
            $(openmodal).removeClass("active")
            alert('salvo com sucesso!')
    });
});