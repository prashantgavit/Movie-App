


mainApp1.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
            
   when('/search_movie', {
      templateUrl: 'search_movie.html',
      controller: 'studentController'
   }).
            
   when('/home', {
      templateUrl: 'home.html',
      controller: 'studentController'
   }).

            
   when('/upcoming_movie', {
      templateUrl: 'upcoming_movie.html',
      controller: 'studentController'
   }).
            
   otherwise({
      redirectTo: '/home'
   });

}])

.controller('studentController', function($scope,$http){

   console.log("Step 1");

   var temp;
         //$scope.serach= function(){
              

   var url = "https://api.cinemalytics.com/v1/movie/year/"+"2015"+"/?auth_token=916E1F666912FF1147CC1024F2057D24";

            
               // body...
             
   $http.get(url).success(function(response) {
      $scope.movies1 = response;
      console.log("done")
   }).error(function(f){
      console.log(f)
   });
         //}
   $scope.select_movie={"Id":"f21bb8cc","ImdbId":"tt3840534","OriginalTitle":"Junooniyat","Title":"Junooniyat","Description":"Junooniyat movie story follows love story of a solider, who belongs to Punjabi Family and during his work on site he rescue female army officer. They both fall in love with each other during all their time and when they come back to their Family, somehow they both meet and love becomes more complicated than ever. Not reviled but somehow their first story stays unsuccessful and now she is going to marry another man but true love never dies. He comes back for her to explain everything and it is expected that they both become one at the end.","TrailerLink":"https://www.youtube.com/watch?v=8vicEGLOEdw","TrailerEmbedCode":"<iframe width=\"850\" height=\"450\" src=\"https://www.youtube.com/embed/8vicEGLOEdw\" frameborder=\"0\" allowfullscreen></iframe>","Country":"IN","Region":"BOLLYWOOD","Genre":"Romance","RatingCount":2,"Rating":2.5,"CensorRating":"U","ReleaseDate":"6/24/2016","Runtime":130,"Budget":0,"Revenue":0,"PosterPath":"https://s3-ap-southeast-1.amazonaws.com/cinemalytics/movie/E1ABF451B2712AF052833ACC030B2D1D.jpg"};
   $scope.year=2016; 
   $scope.sort1="expression"   
   $scope.check= function() {
      console.log("check");
      console.log($scope.sort1);
      console.log($scope.year);
      var url1="https://api.cinemalytics.com/v1/movie/year/"+$scope.year+"/?auth_token=916E1F666912FF1147CC1024F2057D24";
      $http.get(url1).success(function(response1) {
         $scope.movies1 = response1;
         console.log("2");
         }).error(function(f){
            console.log(f)
         });
            
   }
   $scope.movie_details=function(movie_temp){
      console.log("success");
      $scope.select_movie=movie_temp.movie;

   }
   var url2="https://api.cinemalytics.com/v1/movie/releasedthisweek?auth_token=916E1F666912FF1147CC1024F2057D24";

            
               // body...
             
   $http.get(url2).success(function(response2) {
      $scope.released_movie = response2;
      console.log("done2")
   }).error(function(f){
      console.log(f)
   });
   var url3="https://api.cinemalytics.com/v1/movie/upcoming?auth_token=916E1F666912FF1147CC1024F2057D24";

            
               // body...
             
   $http.get(url3).success(function(response3) {
      $scope.upcoming_movie = response3;
      console.log("done2")
   }).error(function(f){
      console.log(f)
   });

});

         
// mainApp.controller('AddStudentController', function($scope) {
//    $scope.message = "This page will be used to display add student form";
// });
         
// mainApp.controller('ViewStudentsController', function($scope) {
//    $scope.message = "This page will be used to display all the students";
// });
//////////////////////////////////////////////////////////////////12:37