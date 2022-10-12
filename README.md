![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![PyCharm](https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
[![CodeQL](https://github.com/Marrowsed/Financial_Control_React/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/Marrowsed/Financial_Control_React/actions/workflows/codeql-analysis.yml)
# Financial Control API using React
| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | Financial Control React
| :label: Tecnologias | python, django rest, postgresql, react

Domestic Financial Control using Django REST and React

Never lose your Financial Control again !

<img src="https://www.django-rest-framework.org/img/logo.png#vitrinedev" alt="Django Rest Framework">
<img src="https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-react_2127.png#vitrinedev">

<h1> Install </h1>
<a href="https://www.python.org/downloads/" target="_blank">Python</a> latest

<a href="https://nodejs.org/en/">Node.js</a> latest

# How to use It ?

### Bank [GET/POST/PUT/DELETE]
* /banks/ [GET/POST]
* /banks/:id/ [GET/PUT/DELETE]

To return/create/update and delete the Banks you use 

### Accounts [GET/POST/PUT/DELETE]
* /:bank_id/accounts/ [GET/POST]
* /:bank_id/accounts/:id [GET/PUT/DELETE]

To return/create/update and delete the Accounts you use

### Movements [GET/POST/PUT]
* /:account_id/movements/ [GET/POST/PUT]
* /:account_id/movements/:year/:month [GET]

To return/create and delete the Movements you make in the account

# Where is React ?

React is going to bee your frontend ! Just enter <a href="localhost:8000">localhost:8000</a> or <a href="127.0.0.1:8000">127.0.0.1:8000</a>

And see the magic happens !

Enjoy your Financial Control !