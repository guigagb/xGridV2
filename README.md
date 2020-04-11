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

<h4>Create</h4>

```javascript
    const grid = new xGrid.create({
        el: '#pnGrid'
    })

    grid.source(json);
```
## Temas

<p>O xGrid vem com 4 estilos de temas que podem ser informado dentro do create, os temas são: </p>

<table>
    <tr>
        <th>Gray</th>
        <th>Dark</th>
    </tr>
    <tr>
        <td><img src="images/x-grayV2.png"></td>
        <td><img src="images/x-darkV2.png"></td>
    </tr>
    <tr>
        <td style="font-size: 10px; text-align:center; padding: 0px">x-grayV2</td>
        <td style="font-size: 10px; text-align:center; padding: 0px">x-darkV2</td>
    </tr>
     <tr>
        <th>Opacity</th>
        <th>White</th>
    </tr>
    <tr>
        <td><img src="images/x-opaciteV2.png"></td>
        <td><img src="images/x-whiteV2.png"></td>
    </tr>
    <tr>
        <td style="font-size: 10px; text-align:center; padding: 0px">x-opaciteV2</td>
        <td style="font-size: 10px; text-align:center; padding: 0px">x-whiteV2</td>
    </tr>
</table>

## Parâmetro Create

Create é responsável por instanciar o xGrid. Recebe um objeto como parâmetro que pode ter as seguintes propriedades passadas:

<table>
    <tr>
        <th align="center" width="20%">Propriedade</th>
        <th align="center" width="50%">Descrição</th>
        <th align="center" width="15%">Tipo</th>
        <th align="center" width="15%">Default</th>
    </tr>
    <tr>
        <td>el</td>
        <td>Id ou classe do elemento onde será instanciado o xGrid. <strong>(Obrigatório)</strong></td>
        <td align="center">String</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>source</td>
        <td>Dados que irão popular o grid.</td>
        <td align="center">Array of Object (JSON)</td>
        <td align="center">[empty]</td>
    </tr>
    <tr>
        <td>width</td>
        <td>Largura do grid.</td>
        <td align="center">Numeric</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>height</td>
        <td>Altura do grid.</td>
        <td align="center">Numeric</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>heightLine</td>
        <td>Altura da linha do grid.</td>
        <td align="center">Numeric</td>
        <td align="center">30</td>
    </tr>
    <tr>
        <td>setFocus</td>
        <td>Inicia o grid focado na linha informada.</td>
        <td align="center">Numeric</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>theme</td>
        <td>Informe a classe do tema que deseja utilizar. Lista de temas disponíves <a href=#temas>acima</a>.</td>
        <td align="center">String</td>
        <td align="center">x-grayV2</td>
    </tr>
    <tr>
        <td>title</td>
        <td>Visibilidade da barra de título</td>
        <td align="center">Boolean</td>
        <td align="center">true</td>
    </tr>
    <tr>
        <td>count</td>
        <td>Visibilidade do contador/índice na primeira coluna.</td>
        <td align="center">Boolean</td>
        <td align="center">false</td>
    </tr>
    <tr>
        <td>multiSelect</td>
        <td>Possibilita a seleção de múltiplas colunas ao segurar a tecla CTRL.</td>
        <td align="center">Boolean</td>
        <td align="center">false</td>
    </tr>
    <tr>
        <td>onSelectLine</td>
        <td>Define uma função que será executada ao selecionar alguma linha.<br>
        Callback retorna os dados da linha selecionada.
        </td>
        <td align="center">Function<br>(Callback)</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>click</td>
        <td>Define uma função que será executada ao clicar em alguma linha.<br>
        Callback retorna os dados da linha selecionada.
        </td>
        <td align="center">Function<br>(Callback)</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>dblClick</td>
        <td>Define uma função que será executada ao dar um duplo clique em alguma linha.<br>
        Callback retorna os dados da linha selecionada.
        </td>
        <td align="center">Function<br>(Callback)</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td>enter</td>
        <td>Define uma função que será executada ao pressionar enter em alguma linha.<br>
        Callback retorna os dados da linha selecionada.
        </td>
        <td align="center">Function<br>(Callback)</td>
        <td align="center"></td>
    </tr>
</table>
<br>
<table>
    <td width="20%"><strong>Columns</strong></td>
        <td  width="50%">Define as colunas que serão apresentadas no grid e como será personalizado os dados daquela coluna.<br>
        Caso não seja informado o componente irá considerar todas as colunas que vierem nos dados que serão adicionados ao grid.</td>
        <td align="center" width="15%">Object</td>
        <td align="center" width="15%"></td>
    </tr>
    <tr>
        <td colspan=4>
            <pre>           const grid = new xGridV2.create({
                columns: {
                    'First Name': { propriedades },
                    'Last Name': { propriedades }
                }
            })
            &nbsp;
            columns: {Name: {dataField: 'NAME', width: '100%'},}</pre>
            <blockquote>A chave das columns serão usadas como título das colunas no grid.</blockquote>
            <table>
                <tr>
                    <th>Propriedade</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Default</th>
                </tr>
                <tr>
                    <td>dataField</td>
                    <td>Nome da chave que representa aquela coluna no objeto de dados.</td>
                    <td align="center">String</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>Tamanho da coluna em porcentagem. ex.: '15%'</td>
                    <td align="center">String</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>Adiciona a(s) classe(s) na coluna. ex.: 'classA classB'</td>
                    <td align="center">String</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>Adiciona um estilo na coluna. ex.: '{color: red; font-size: "16px"}'</td>
                    <td align="center">String</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td>center</td>
                    <td>Centraliza o texto da coluna.</td>
                    <td align="center">Boolean</td>
                    <td align="center">False</td>
                </tr>
                <tr>
                    <td>right</td>
                    <td>Alinha o texto da coluna à direita.</td>
                    <td align="center">Boolean</td>
                    <td align="center">False</td>
                </tr>
                <tr>
                    <td>render</td>
                    <td>Recebe uma função com um parâmetro callback (valor da coluna), processa o valor e o return da função é mostrado.<br><pre>
columns: {
    'Data': {dataField: 'DATA', render: formatDateBR},
        }</pre>
                    </td>
                    <td align="center">Function<br>(Callback)</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td>compare</td>
                    <td>Informa o nome da função fornecida em <a href="#compare">compare</a> do create que deseja aplicar a esta coluna.
<pre>grid = new xGrid.create({
    columns: {'Name': {dataField: 'NAME', compare: 'reverse'},},
    compare: {'reverse': (r)=>{
        return r.value.split('').reverse().join('');
    }}
})</pre>
                    </td>
                    <td align="center">String</td>
                    <td align="center"></td>
                </tr>
            </table>
        </td>
    </tr>
</table>
