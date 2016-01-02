angular.module('movie.edit').controller('editMovieController', function($scope, Movie, $routeParams, $location){
    var vm = this;

    var movieId = $routeParams.id;

    Movie.fetchOne(movieId).success(function(movie){
        vm.movie = movie;
    });

    vm.updateMovie = function(movie){
        Movie.update(movie)
            .success(function(){
                $location.path('/movies');
            })
            .error(function(resp){
                console.log(resp);
            });
    };
});