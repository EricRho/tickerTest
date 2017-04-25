Rails.application.routes.draw do
  devise_for :users
  get 'derivatives/index'

  get 'stocks/index'

  get 'welcome/index'

  # root to: 'welcome#index'
  root to: 'watch_list#index'

  scope :api do
    resources :stocks, only: [:index], defaults: {
      format: :json
    }
  end
end
