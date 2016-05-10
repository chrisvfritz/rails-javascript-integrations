Rails.application.routes.draw do
  scope :api do
    resources :todos, only: [:index, :create, :update, :destroy]
  end
end
