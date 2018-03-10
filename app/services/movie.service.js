"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../environments/environment");
var ApplicationSettings = require("application-settings");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_1.environment.apiUrl;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.baseUrl + 'movies/', this.getAuthHeaders());
    };
    MovieService.prototype.getMovie = function (id) {
        return this.http.get(this.baseUrl + 'movies/' + id + '/', this.getAuthHeaders());
    };
    MovieService.prototype.addMovie = function (movie) {
        return this.http.post(this.baseUrl + 'movies/', movie, this.getAuthHeaders());
    };
    MovieService.prototype.editMovie = function (movie, id) {
        return this.http.put(this.baseUrl + 'movies/' + id + '/', movie, this.getAuthHeaders());
    };
    MovieService.prototype.deleteMovie = function (id) {
        return this.http.delete(this.baseUrl + 'movies/' + id + '/', this.getAuthHeaders());
    };
    MovieService.prototype.getAuthHeaders = function () {
        var token = ApplicationSettings.getString('token');
        var httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    MovieService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92aWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQStEO0FBQy9ELDJEQUEwRDtBQUUxRCwwREFBNEQ7QUFHNUQ7SUFLRSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxnQkFBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsWUFBTyxHQUFXLHlCQUFXLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUV6QyxnQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCwrQkFBUSxHQUFSLFVBQVMsRUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLEVBQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCxrQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU8scUNBQWMsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUNqQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUM7WUFDbEQsZUFBZSxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUNqQyxDQUFDO0lBL0JVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FNZSxpQkFBVTtPQUx6QixZQUFZLENBaUN4QjtJQUFELG1CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcuLi9tb2RlbHMvbW92aWUnO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vdmllU2VydmljZSB7XG5cbiAgaHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCd9KTtcbiAgYmFzZVVybDogc3RyaW5nID0gZW52aXJvbm1lbnQuYXBpVXJsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0TW92aWVzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ21vdmllcy8nLCB0aGlzLmdldEF1dGhIZWFkZXJzKCkpO1xuICB9XG4gIGdldE1vdmllKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICdtb3ZpZXMvJytpZCsnLycsIHRoaXMuZ2V0QXV0aEhlYWRlcnMoKSk7XG4gIH1cblxuICBhZGRNb3ZpZShtb3ZpZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdtb3ZpZXMvJywgbW92aWUsIHRoaXMuZ2V0QXV0aEhlYWRlcnMoKSk7XG4gIH1cblxuICBlZGl0TW92aWUobW92aWUsIGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuYmFzZVVybCArICdtb3ZpZXMvJyArIGlkICsgJy8nLCBtb3ZpZSwgdGhpcy5nZXRBdXRoSGVhZGVycygpKTtcbiAgfVxuICBkZWxldGVNb3ZpZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmJhc2VVcmwgKyAnbW92aWVzLycgKyBpZCArICcvJywgdGhpcy5nZXRBdXRoSGVhZGVycygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXV0aEhlYWRlcnMoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKTtcbiAgICBjb25zdCBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyhcbiAgICAgIHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJyArIHRva2VufSk7XG4gICAgcmV0dXJuIHsgaGVhZGVyczogaHR0cEhlYWRlcnN9O1xuICB9XG5cbn1cbiJdfQ==