TechDemo::Application.routes.draw do
  get 'angular/todo', to: 'angular#todo', as: 'angular_todo'
end
