# Rotas da aplicação:

## Doador

<b>[GET] </b> /donor/info - A rota deve exibir as informações do doador logado<br>

<b>[POST] </b> /donor/login - A rota deve logar um doador.<br>

```javascript
{
  "email": "teste@email.com",
  "senha": "123456789"
}
```

<b>[POST] </b> /donor/create - A rota deve cadastrar um doador com as informações passadas no body da requisição.<br>

```javascript
{
  "name": "Teste",
  "cnpj": "12345678",
  "cep": "12345667",
  "email": "teste@outlook.com",
  "password": "123456789",
  "confirmpassword": "123456789"
}
```

## Donatário

<b>[GET] </b> /donee/info - A rota deve exibir as informações do donatário logado<br>

<b>[POST] </b> /donee/login - A rota deve logar um donatário.<br>

```javascript
{
  "email": "teste@email.com",
  "senha": "123456789"
}
```

<b>[POST] </b> /donee/create - A rota deve cadastrar um donatário com as informações passadas no body da requisição.<br>

```javascript
{
  "name": "Teste",
  "cnpj": "12345678",
  "responsible": "teste"
  "cep": "12345667",
  "email": "teste@outlook.com",
  "password": "123456789",
  "confirmpassword": "123456789"
}
```
## Produto

<b>[GET] </b> /product/ - A rota deve exibir as informações dos produtos<br>


<b>[POST] </b> /product/create - A rota deve cadastrar um doador com as informações passadas no body da requisição.<br>

```javascript
{
  "name": "Batata",
  "qnt": 20,
  "unity": "kg",
  "expiration": "2020-10-10",
	"obs": "obs teste"
}
```
