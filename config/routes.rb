TechDemo::Application.routes.draw do
  get 'angular/todo', to: 'angular#todo', as: 'angular_todo'
  get 'angular/movies', to: 'angular#movies', as: 'angular_movies'
end
