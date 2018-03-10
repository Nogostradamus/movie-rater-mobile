"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movieInput_1 = require("../models/movieInput");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var movie_service_1 = require("../services/movie.service");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var ImputMovieComponent = /** @class */ (function () {
    function ImputMovieComponent(movieService, router, route) {
        this.movieService = movieService;
        this.router = router;
        this.route = route;
    }
    ImputMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = +this.route.snapshot.params["id"];
        if (this.id >= 0) {
            this.is_edit = true;
            this.movieService.getMovie(this.id).subscribe(function (movie) {
                _this.input = new movieInput_1.MovieInput(movie['title'], movie['description']);
            }, function (error) {
                console.log('error', error);
            });
        }
        else {
            this.is_edit = false;
            this.input = new movieInput_1.MovieInput('', '');
        }
        this.loading = false;
    };
    ImputMovieComponent.prototype.saveMovie = function () {
        var _this = this;
        if (!this.myMovieFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var movieData = { title: this.input.title, description: this.input.description };
            if (this.is_edit) {
                this.movieService.editMovie(movieData, this.id)
                    .subscribe(function (response) {
                    _this.router.navigate(["/item", _this.id], { clearHistory: true });
                }, function (error) {
                    _this.loading = false;
                    new nativescript_snackbar_1.SnackBar().simple("Incorrect Credentials. Please try again.");
                });
            }
            else {
                this.movieService.addMovie(movieData)
                    .subscribe(function (response) {
                    _this.router.navigate(["/items"], { clearHistory: true });
                }, function (error) {
                    _this.loading = false;
                    new nativescript_snackbar_1.SnackBar().simple("Incorrect Credentials. Please try again.");
                });
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    __decorate([
        core_1.ViewChild('myMovieForm'),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], ImputMovieComponent.prototype, "myMovieFormComp", void 0);
    ImputMovieComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-imput-movie',
            templateUrl: './imput-movie.component.html',
            styleUrls: ['./imput-movie.component.scss'],
            providers: [movie_service_1.MovieService]
        }),
        __metadata("design:paramtypes", [movie_service_1.MovieService, router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], ImputMovieComponent);
    return ImputMovieComponent;
}());
exports.ImputMovieComponent = ImputMovieComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wdXQtbW92aWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1wdXQtbW92aWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELG1EQUFrRDtBQUNsRCxnRUFBNEU7QUFDNUUsK0RBQWlEO0FBQ2pELDJEQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsMENBQWlEO0FBU2pEO0lBU0UsNkJBQW9CLFlBQXlCLEVBQVUsTUFBd0IsRUFDckUsS0FBcUI7UUFEWCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3JFLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUksQ0FBQztJQUVwQyxzQ0FBUSxHQUFSO1FBQUEsaUJBa0JFO1FBakJBLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzNDLFVBQUEsS0FBSztnQkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFdEIsQ0FBQztJQUVGLHVDQUFTLEdBQVQ7UUFBQSxpQkErQkM7UUE5QkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFNLFNBQVMsR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUMsQ0FBQTtZQUNoRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7cUJBQzVDLFNBQVMsQ0FDTixVQUFDLFFBQVE7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUMsRUFDRCxVQUFDLEtBQUs7b0JBQ0YsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksZ0NBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDLENBQ0osQ0FBQztZQUVOLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7cUJBQ2xDLFNBQVMsQ0FDTixVQUFDLFFBQVE7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLEVBQ0QsVUFBQyxLQUFLO29CQUNGLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLGdDQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDdEUsQ0FBQyxDQUNKLENBQUM7WUFDTixDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBekR5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBa0IsOEJBQW9CO2dFQUFDO0lBTnJELG1CQUFtQjtRQVAvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7eUNBVWlDLDRCQUFZLEVBQWtCLHlCQUFnQjtZQUM5RCx1QkFBYztPQVZwQixtQkFBbUIsQ0FpRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb3ZpZUlucHV0IH0gZnJvbSAnLi4vbW9kZWxzL21vdmllSW5wdXQnO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtcHJvLXVpL2RhdGFmb3JtL2FuZ3VsYXInO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tICduYXRpdmVzY3JpcHQtc25hY2tiYXInO1xuaW1wb3J0IHsgTW92aWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW92aWUuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWltcHV0LW1vdmllJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltcHV0LW1vdmllLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1wdXQtbW92aWUuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbTW92aWVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJbXB1dE1vdmllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpbnB1dDogTW92aWVJbnB1dDtcbiAgbG9hZGluZztcbiAgaXNfZWRpdDogYm9vbGVhbjtcbiAgaWQ6IG51bWJlcjtcbiAgQFZpZXdDaGlsZCgnbXlNb3ZpZUZvcm0nKSBteU1vdmllRm9ybUNvbXA6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb3ZpZVNlcnZpY2U6TW92aWVTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgIGlmICh0aGlzLmlkID49IDApIHtcbiAgICAgIHRoaXMuaXNfZWRpdCA9IHRydWU7XG4gICAgICB0aGlzLm1vdmllU2VydmljZS5nZXRNb3ZpZSh0aGlzLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgIG1vdmllID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0ID0gbmV3IE1vdmllSW5wdXQobW92aWVbJ3RpdGxlJ10sIG1vdmllWydkZXNjcmlwdGlvbiddKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzX2VkaXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgTW92aWVJbnB1dCgnJywgJycpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICBcbiAgIH1cblxuICBzYXZlTW92aWUoKXtcbiAgICBpZighdGhpcy5teU1vdmllRm9ybUNvbXAuZGF0YUZvcm0uaGFzVmFsaWRhdGlvbkVycm9ycygpKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgbW92aWVEYXRhID0ge3RpdGxlOiB0aGlzLmlucHV0LnRpdGxlLCBkZXNjcmlwdGlvbjogdGhpcy5pbnB1dC5kZXNjcmlwdGlvbn1cbiAgICAgIGlmICh0aGlzLmlzX2VkaXQpIHtcbiAgICAgICAgdGhpcy5tb3ZpZVNlcnZpY2UuZWRpdE1vdmllKG1vdmllRGF0YSwgdGhpcy5pZClcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaXRlbVwiLCB0aGlzLmlkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBuZXcgU25hY2tCYXIoKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMuIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdmllU2VydmljZS5hZGRNb3ZpZShtb3ZpZURhdGEpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2l0ZW1zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIG5ldyBTbmFja0JhcigpLnNpbXBsZShcIkluY29ycmVjdCBDcmVkZW50aWFscy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=