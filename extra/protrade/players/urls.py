from django.urls import path

from . import views

app_name = 'players'

urlpatterns = [
    path('', views.player_list, name='player-list'),
    path('add/', views.add_player, name='add-player'),
    path('transfer/', views.transfer_player, name='transfer-player'),
    path('<slug:player_slug>/', views.player_detail, name='player-detail'),
]
