"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movie_service_1 = require("../services/movie.service");
var router_2 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var rating_service_1 = require("../services/rating.service");
var global_service_1 = require("../services/global.service");
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(movieService, route, router, fonticon, ratingService, global) {
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.fonticon = fonticon;
        this.ratingService = ratingService;
        this.global = global;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.global.user.subscribe(function (me) { return _this.account = me; });
        this.yourRate = 0;
        var id = +this.route.snapshot.params["id"];
        this.movieService.getMovie(id).subscribe(function (movie) {
            _this.item = movie;
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemDetailComponent.prototype.editClicked = function () {
        this.router.navigate(['/input', this.item.id]);
    };
    ItemDetailComponent.prototype.deleteClicked = function () {
        var _this = this;
        this.movieService.deleteMovie(this.item.id).subscribe(function (movie) {
            _this.router.navigate(['/items'], { clearHistory: true });
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemDetailComponent.prototype.rateClicked = function (rate) {
        var _this = this;
        this.yourRate = rate;
        this.ratingService.addRating(this.account.id, this.item.id, this.yourRate).subscribe(function (data) {
            _this.item = data['result'];
        }, function (error) {
            console.log(error);
        });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
            providers: [movie_service_1.MovieService, rating_service_1.RatingService]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            nativescript_ngx_fonticon_1.TNSFontIconService,
            rating_service_1.RatingService,
            global_service_1.GlobalService])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCwyREFBeUQ7QUFDekQsc0RBQStEO0FBQy9ELHVFQUErRDtBQUMvRCw2REFBMkQ7QUFHM0QsNkRBQTJEO0FBUTNEO0lBTUksNkJBQ1ksWUFBMEIsRUFDMUIsS0FBcUIsRUFDckIsTUFBd0IsRUFDeEIsUUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsTUFBcUI7UUFMckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUM3QixDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ3JDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQWpCLENBQWlCLENBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3BDLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCx5Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCwyQ0FBYSxHQUFiO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDakQsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCx5Q0FBVyxHQUFYLFVBQVksSUFBSTtRQUFoQixpQkFXQztRQVZHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2hGLFVBQUEsSUFBSTtZQUNBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FFSixDQUFBO0lBQ0wsQ0FBQztJQXREUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsOEJBQWEsQ0FBQztTQUMzQyxDQUFDO3lDQVE0Qiw0QkFBWTtZQUNuQix1QkFBYztZQUNiLHlCQUFnQjtZQUNkLDhDQUFrQjtZQUNiLDhCQUFhO1lBQ3BCLDhCQUFhO09BWnhCLG1CQUFtQixDQXVEL0I7SUFBRCwwQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTW92aWVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL21vdmllLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5neC1mb250aWNvblwiO1xuaW1wb3J0IHsgUmF0aW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9yYXRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtNb3ZpZVNlcnZpY2UsIFJhdGluZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW07XG4gICAgeW91clJhdGU6IG51bWJlcjtcbiAgICBhY2NvdW50OiBVc2VyO1xuICAgIHVzZXJTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vdmllU2VydmljZTogTW92aWVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByYXRpbmdTZXJ2aWNlOiBSYXRpbmdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGdsb2JhbDogR2xvYmFsU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyU3ViID0gdGhpcy5nbG9iYWwudXNlci5zdWJzY3JpYmUoXG4gICAgICAgICAgICBtZSA9PiB0aGlzLmFjY291bnQgPSBtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnlvdXJSYXRlID0gMDtcbiAgICAgICAgY29uc3QgaWQgPSArdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2UuZ2V0TW92aWUoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1vdmllID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0gPSBtb3ZpZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBlZGl0Q2xpY2tlZCgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pbnB1dCcsIHRoaXMuaXRlbS5pZF0pO1xuICAgIH1cbiAgICBkZWxldGVDbGlja2VkKCl7XG4gICAgICAgIHRoaXMubW92aWVTZXJ2aWNlLmRlbGV0ZU1vdmllKHRoaXMuaXRlbS5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbW92aWUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJhdGVDbGlja2VkKHJhdGUpe1xuICAgICAgICB0aGlzLnlvdXJSYXRlID0gcmF0ZTtcbiAgICAgICAgdGhpcy5yYXRpbmdTZXJ2aWNlLmFkZFJhdGluZyh0aGlzLmFjY291bnQuaWQsIHRoaXMuaXRlbS5pZCwgdGhpcy55b3VyUmF0ZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YVsncmVzdWx0J107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfVxufVxuIl19