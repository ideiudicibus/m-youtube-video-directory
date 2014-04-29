angular.module('youtubeVideoDirectory.controllers', [])

.controller('IndexCtrl', function($scope) {

})
.controller('VideoCategoriesCtrl', function($scope, VideoCategoryService) {
	
	var findAllCategories = function(){

	VideoCategoryService.findAll().then(function (videoCategories) {
                $scope.videoCategories = videoCategories;
            });
	};
	console.log('VideoCategoriesCtrl');
	findAllCategories();

})
.controller('VideosByCategoryCtrl', function ($scope, $stateParams, YoutubeVideoService) {
        YoutubeVideoService.findByCategoryId($stateParams.categoryId).then(function(videos) {

            $scope.videos = videos;
        
        });

 })
 .controller('VideoDetailCtrl', function ($scope, $stateParams, YoutubeVideoService, $sce) {
        YoutubeVideoService.findById($stateParams.videoId).then(function(video) {
            //direttiva angular per consentire l'accesso a risorse esterne da localhost
          $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
            }   
            $scope.video = video;
        });

    });