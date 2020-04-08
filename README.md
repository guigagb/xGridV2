# xGrid v2.0

<p>O xGrid é um grid robusto, possui inúmeras funcionalidades, com uma alta performance. É um componente desenvolvido apenas com javascript sem uso de bibliotecas externas.</p>

<h4>Principais Funcionalidades</h4>
<ul>
    <li>Carregar os dados através de um objeto JSON.</li>
    <li>Pesquisar com mecanismo de paginação.</li>
    <li>Redimensionar tamanho das colunas.</li>
    <li>Vincular campos do formulário com os dados do grid.</li>
    <li>Ordenação dos dados.</li>
    <li>Diversas possibilidade de filtragem dos dados.</li>
    <li>Totalizar valores de uma coluna.</li>
    <li>É possível vincular botões (inserir,alterar,deletar,salvar, cancelar, entre outros).</li>
    <li>Fácil inserção, alteração e remoção de dados</li>
    <li>Dentre outras funcionalidades...
</ul>

## Instalação

Clone o repositório em um diretório local.

```sh
    git clone git@github.com:dffrancisco/xGridV2.git
```
## Importando

Em seu html declare o css:
```html
    <link rel="stylesheet" href="./xGridV2.css">
```

Para usar o xGrid você deve chamá-lo em seu arquivo .js através de import.
```javascript
    import xGrid from './xGridV2';
```
## Modo de Uso

É necessário um elemento no seu html com um id ou classe para usar na instância do xGrid.

```html
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <title>xGrid v2.0</title>
        <link rel="stylesheet" href="./xGridV2.css">
    </head>
    <body>
        <div id="pnGrid"></div>
        <script src="./xGridV2.js"></script>
        <script src="example.js" type="module"></script>
    </body>
    </html>
```
No javascript iremos instanciar o objeto da seguinte forma:

<h3>Create</h3>

```javascript
    const grid = new xGrid.create({
        el: '#pnGrid',
        
    })
```
