"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_service_1 = require("../services/movie.service");
var user_1 = require("../models/user");
var ApplicationSettings = require("tns-core-modules/application-settings");
var global_service_1 = require("../services/global.service");
var router_1 = require("nativescript-angular/router");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(movieService, global, router) {
        this.movieService = movieService;
        this.global = global;
        this.router = router;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies().subscribe(function (movies) {
            _this.items = movies;
        }, function (error) {
            console.log('error', error);
        });
    };
    ItemsComponent.prototype.logoutClicked = function () {
        this.global.me = new user_1.User();
        ApplicationSettings.remove('token');
        ApplicationSettings.remove('account');
        this.router.navigate(['/login'], { clearHistory: true });
    };
    ItemsComponent.prototype.addClicked = function () {
        this.router.navigate(['/input', -1]);
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            providers: [movie_service_1.MovieService]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, global_service_1.GlobalService,
            router_1.RouterExtensions])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJEQUF5RDtBQUN6RCx1Q0FBc0M7QUFDdEMsMkVBQTZFO0FBQzdFLDZEQUEyRDtBQUMzRCxzREFBK0Q7QUFRL0Q7SUFHSSx3QkFBb0IsWUFBMEIsRUFBVSxNQUFxQixFQUNqRSxNQUF3QjtRQURoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDakUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRXpDLGlDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUNuQyxVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDNUIsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELG1DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7eUNBSW9DLDRCQUFZLEVBQWtCLDhCQUFhO1lBQ3pELHlCQUFnQjtPQUozQixjQUFjLENBeUIxQjtJQUFELHFCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb3ZpZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbW92aWUuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgeyBHbG9iYWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dsb2JhbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW01vdmllU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3ZpZVNlcnZpY2U6IE1vdmllU2VydmljZSwgcHJpdmF0ZSBnbG9iYWw6IEdsb2JhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmllU2VydmljZS5nZXRNb3ZpZXMoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBtb3ZpZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBtb3ZpZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgbG9nb3V0Q2xpY2tlZCgpe1xuICAgICAgICB0aGlzLmdsb2JhbC5tZSA9IG5ldyBVc2VyKCk7XG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZSgnYWNjb3VudCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgYWRkQ2xpY2tlZCgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pbnB1dCcsIC0xXSk7XG4gICAgfVxufSJdfQ==