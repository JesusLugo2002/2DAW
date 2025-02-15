## URLs y vistas

A partir de aqui, vayan viendo los archivos del ejercicio como tal, primero porque me da pereza ir copiando y pegando aqui cuando está en los archivos como tal, y segundo, porque a veces ni hará falta.

Como estamos desarrollando una API, practicamente todas las urls empiezan con `api/`, en nuestro caso, solamente hay urls de `api/players/`. Por lo que en [main/urls.py](../main/urls.py) solo incluiremos las urls de players con el `include`. Por eso **recomiendo echar un vistazo para sacar las urls principales** y así armar el fichero principal de urls. Si, por ejemplo, viésemos una vista de "Team List" con url `api/teams/`, sabemos que esa url irá en la app de teams, por lo que la incluiriamos en el `main.urls` con `path('api/teams/', include('teams.urls'))`.

### api/players/ -> players.views.player_list()

Es el listado de los jugadores en el sistema.