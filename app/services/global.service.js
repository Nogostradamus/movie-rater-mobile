"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var user_1 = require("../models/user");
var ApplicationSettings = require("application-settings");
var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.userSource = new BehaviorSubject_1.BehaviorSubject(new user_1.User());
        this.user = this.userSource.asObservable();
    }
    Object.defineProperty(GlobalService.prototype, "me", {
        set: function (user) {
            ApplicationSettings.setString('account', JSON.stringify(user));
            this.userSource.next(user);
        },
        enumerable: true,
        configurable: true
    });
    GlobalService = __decorate([
        core_1.Injectable()
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbG9iYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx3REFBdUQ7QUFDdkQsdUNBQXNDO0FBQ3RDLDBEQUE0RDtBQUc1RDtJQURBO1FBR1UsZUFBVSxHQUFHLElBQUksaUNBQWUsQ0FBTyxJQUFJLFdBQUksRUFBRSxDQUFDLENBQUM7UUFDM0QsU0FBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFPeEMsQ0FBQztJQUxDLHNCQUFJLDZCQUFFO2FBQU4sVUFBTyxJQUFVO1lBQ2YsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFSVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2xvYmFsU2VydmljZSB7XG5cbiAgcHJpdmF0ZSB1c2VyU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihuZXcgVXNlcigpKTtcbiAgdXNlciA9IHRoaXMudXNlclNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBzZXQgbWUodXNlcjogVXNlcikge1xuICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKCdhY2NvdW50JywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIHRoaXMudXNlclNvdXJjZS5uZXh0KHVzZXIpO1xuICB9XG5cbn1cbiJdfQ==