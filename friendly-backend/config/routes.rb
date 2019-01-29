Rails.application.routes.draw do
  resources :pictures
  post '/login' => "sessions#create"
  delete'logout'=> "sessions#destory"
  resources :users
  resources :messages, only: [:create]
  resources :conversations, only: [:create]
  get '/profile'=> "users#profile"
end
