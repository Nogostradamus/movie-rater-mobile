"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../environments/environment");
var http_1 = require("@angular/common/http");
var ApplicationSettings = require("application-settings");
var RatingService = /** @class */ (function () {
    function RatingService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_1.environment.apiUrl;
    }
    RatingService.prototype.addRating = function (user_id, movie_id, rating) {
        var body = {
            user: user_id,
            movie: movie_id,
            stars: rating,
        };
        return this.http.post(this.baseUrl + 'ratings/rate_movie/', body, this.getAuthHeaders());
    };
    RatingService.prototype.getAuthHeaders = function () {
        var token = ApplicationSettings.getString('token');
        var httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Token ' + token });
        return { headers: httpHeaders };
    };
    RatingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RatingService);
    return RatingService;
}());
exports.RatingService = RatingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQywyREFBMEQ7QUFDMUQsNkNBQStEO0FBQy9ELDBEQUE0RDtBQUc1RDtJQUtFLHVCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSHBDLGdCQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGlDQUFpQyxFQUFDLENBQUMsQ0FBQztRQUNuRixZQUFPLEdBQVcseUJBQVcsQ0FBQyxNQUFNLENBQUM7SUFFRyxDQUFDO0lBRXpDLGlDQUFTLEdBQVQsVUFBVSxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3pELElBQU0sSUFBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRU8sc0NBQWMsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUNqQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUM7WUFDbEQsZUFBZSxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQztJQUNqQyxDQUFDO0lBdEJVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FNZSxpQkFBVTtPQUx6QixhQUFhLENBd0J6QjtJQUFELG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJhdGluZ1NlcnZpY2Uge1xuXG4gIGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnfSk7XG4gIGJhc2VVcmw6IHN0cmluZyA9IGVudmlyb25tZW50LmFwaVVybDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGFkZFJhdGluZyh1c2VyX2lkOiBudW1iZXIsIG1vdmllX2lkOiBudW1iZXIsIHJhdGluZzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXNlcjogdXNlcl9pZCxcbiAgICAgIG1vdmllOiBtb3ZpZV9pZCxcbiAgICAgIHN0YXJzOiByYXRpbmcsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ3JhdGluZ3MvcmF0ZV9tb3ZpZS8nLCBib2R5LCB0aGlzLmdldEF1dGhIZWFkZXJzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdXRoSGVhZGVycygpIHtcbiAgICBjb25zdCB0b2tlbiA9IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpO1xuICAgIGNvbnN0IGh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKFxuICAgICAgeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAnQXV0aG9yaXphdGlvbic6ICdUb2tlbiAnICsgdG9rZW59KTtcbiAgICByZXR1cm4geyBoZWFkZXJzOiBodHRwSGVhZGVyc307XG4gIH1cblxufVxuIl19