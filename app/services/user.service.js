"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../environments/environment");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        this.baseUrl = environment_1.environment.apiUrl;
    }
    UserService.prototype.loginUser = function (userData) {
        return this.http.post(this.baseUrl + 'authenticate/', userData);
    };
    UserService.prototype.registerUser = function (userData) {
        return this.http.post(this.baseUrl + 'users/', userData);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCwyREFBMEQ7QUFHMUQ7SUFLRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxnQkFBVyxHQUFHLElBQUksa0JBQVcsQ0FBQyxFQUFDLGNBQWMsRUFBRSxpQ0FBaUMsRUFBQyxDQUFDLENBQUM7UUFDbkYsWUFBTyxHQUFXLHlCQUFXLENBQUMsTUFBTSxDQUFDO0lBRUcsQ0FBQztJQUV6QywrQkFBUyxHQUFULFVBQVUsUUFBYTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxRQUFhO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBYlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU1lLGlCQUFVO09BTHpCLFdBQVcsQ0FldkI7SUFBRCxrQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICBodHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J30pO1xuICBiYXNlVXJsOiBzdHJpbmcgPSBlbnZpcm9ubWVudC5hcGlVcmw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBsb2dpblVzZXIodXNlckRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICdhdXRoZW50aWNhdGUvJywgdXNlckRhdGEpO1xuICB9XG5cbiAgcmVnaXN0ZXJVc2VyKHVzZXJEYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAndXNlcnMvJywgdXNlckRhdGEpO1xuICB9XG5cbn1cbiJdfQ==