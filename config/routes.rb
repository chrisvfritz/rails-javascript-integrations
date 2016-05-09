Rails.application.routes.draw do
  root 'todos#index'
  resources :todos, only: [:index, :create, :update, :destroy]
end
