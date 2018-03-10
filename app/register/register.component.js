"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var registerInput_1 = require("../models/registerInput");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.input = new registerInput_1.RegisterInput("", "", "");
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (!this.myRegisterDataFormComp.dataForm.hasValidationErrors()) {
            this.loading = true;
            var userData = { username: this.input.username, password: this.input.password,
                email: this.input.email };
            this.userService.registerUser(userData).subscribe(function (data) {
                _this.loading = false;
                console.log('data', data);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.loading = false;
                console.log('error', error);
            });
        }
    };
    __decorate([
        core_1.ViewChild('myRegisterDataForm'),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], RegisterComponent.prototype, "myRegisterDataFormComp", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            moduleId: module.id,
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBQ3JFLHlEQUF1RDtBQUN2RCwwQ0FBeUM7QUFDekMsZ0VBQTRFO0FBQzVFLHlEQUF3RDtBQVN4RDtJQU1FLDJCQUFvQixXQUF3QixFQUFVLE1BQWM7UUFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV4RSxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDZCQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUMsc0NBQVUsR0FBVjtRQUFBLGlCQWlCQztRQWhCQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBTSxRQUFRLEdBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUE7WUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUM3QyxVQUFDLElBQUk7Z0JBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUNELFVBQUMsS0FBSztnQkFDRixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUNKLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQTFCZ0M7UUFBaEMsZ0JBQVMsQ0FBQyxvQkFBb0IsQ0FBQztrQ0FBeUIsOEJBQW9CO3FFQUFDO0lBSm5FLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDO3lDQU9pQywwQkFBVyxFQUFrQixlQUFNO09BTnpELGlCQUFpQixDQWdDN0I7SUFBRCx3QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhZERhdGFGb3JtQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyJztcbmltcG9ydCB7IFJlZ2lzdGVySW5wdXQgfSBmcm9tICcuLi9tb2RlbHMvcmVnaXN0ZXJJbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3RlcicsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGlucHV0OiBSZWdpc3RlcklucHV0O1xuICBwcml2YXRlIGxvYWRpbmc6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ215UmVnaXN0ZXJEYXRhRm9ybScpIG15UmVnaXN0ZXJEYXRhRm9ybUNvbXA6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXQgPSBuZXcgUmVnaXN0ZXJJbnB1dChcIlwiLCBcIlwiLCBcIlwiKTtcbn1cblxuICBvblJlZ2lzdGVyICgpIHtcbiAgICBpZighdGhpcy5teVJlZ2lzdGVyRGF0YUZvcm1Db21wLmRhdGFGb3JtLmhhc1ZhbGlkYXRpb25FcnJvcnMoKSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0ge3VzZXJuYW1lOiB0aGlzLmlucHV0LnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5pbnB1dC5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuaW5wdXQuZW1haWx9XG4gICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyVXNlcih1c2VyRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=