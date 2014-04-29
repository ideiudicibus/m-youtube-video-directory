    angular.module('youtubeVideoDirectory.services', [])

    .factory('YoutubeVideoService', function($q) {
        //database locale in-memory i video url sono caricati in video-detail.html
        var videos = [
            {"id": 1, "title": "Test Video One", "categoryId": 1,"author":"test author","videoUrl":"http://www.youtube.com/v/PeLuQ6X2ixI?version=3&amp;hl=uk_UA&amp;rel=0&showinfo=0&iv_load_policy=3&controls=0","thumbImgageUrl":"v1-thumb.jpg"},
            {"id": 2, "title": "Test Video Two", "categoryId": 2 ,"author":"test author","videoUrl":"http://www.youtube.com/v/mUT3KoxVzQg?version=3&amp;hl=uk_UA&amp;rel=0","thumbImgageUrl":"v2-thumb.jpg"},
            {"id": 3, "title": "Test Video Three", "categoryId": 3 ,"author":"test author","videoUrl":"http://www.youtube.com/v/mUT3KoxVzQg?version=3&amp;hl=uk_UA&amp;rel=0","thumbImgageUrl":"v1-thumb.jpg"},
            {"id": 4, "title": "Test Video Four", "categoryId": 4 ,"author":"test author","videoUrl":"http://www.youtube.com/v/mUT3KoxVzQg?version=3&amp;hl=uk_UA&amp;rel=0","thumbImgageUrl":"v2-thumb.jpg"},
            {"id": 5, "title": "Test Video Five", "categoryId": 5 ,"author":"test author","videoUrl":"http://www.youtube.com/v/mUT3KoxVzQg?version=3&amp;hl=uk_UA&amp;rel=0","thumbImgageUrl":"v1-thumb.jpg"},
            {"id": 5, "title": "Test Video Six", "categoryId": 1 ,"author":"test author","videoUrl":"http://www.youtube.com/v/mUT3KoxVzQg?version=3&amp;hl=uk_UA&amp;rel=0","thumbImgageUrl":"v2-thumb.jpg"}
        ];

        //questa API è asynch  il deferred  è usato per la promise (servizi esterni asynch)
        //@Todo vedere  https://docs.angularjs.org/api/ng/service/$q
        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(videos);
                return deferred.promise;
            },

            findById: function(videoId) {
                var deferred = $q.defer();
                var video = videos[videoId - 1];
                deferred.resolve(video);
                return deferred.promise;
            },

            findByTitleOrCategory: function(searchKey) {
                var deferred = $q.defer();
                var results = videos.filter(function(element) {
                var title = element.title + " " + element.category;
                return title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                    
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByCategoryId: function(categoryId){
                var deferred = $q.defer();
                var results = videos.filter(function(element) {
                return element.categoryId == categoryId;    
                });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    })
    .factory('VideoCategoryService', function($q) {
      //database locale in-memory le categories sono caricate in video-categories.html
        var videoCategories = [
            {"id": 1, 'description':'www, lorem ipsum dolor sit amet, consectetuer adipiscing elit,','image':'www-mono.png','title':'www' },
            {"id": 2, 'description':'tv, ut laoreet dolore magna aliquam erat volutpat','image':'tv-mono.png','title':'tv' },
            {"id": 3, 'description':'libri,quis nostrud exerci tation ullamcorpert ','image':'libri-mono.png','title':'libri' },
            {"id": 4, 'description':'leggi,aliquip ex ea commodo consequat ','image':'leggi-mono.png','title':'leggi' },
            {"id": 5, 'description':'business,Duis autem vel eum iriure dolor','image':'business-mono.png','title':'business' }
        ];
        return {

          findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(videoCategories);
                return deferred.promise;
            }
        };

    });