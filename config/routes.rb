Rails.application.routes.draw do
  get 'derivatives/index'

  get 'stocks/index'

  get 'welcome/index'

  root to: 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
