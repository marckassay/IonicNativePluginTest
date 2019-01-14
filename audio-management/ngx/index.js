var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AudioManagement = /** @class */ (function (_super) {
    __extends(AudioManagement, _super);
    function AudioManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagement.prototype.setAudioMode = function (mode) { return cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getAudioMode = function () { return cordova(this, "getAudioMode", {}, arguments); };
    AudioManagement.prototype.setVolume = function (type, volume) { return cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagement.prototype.getVolume = function (type) { return cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.prototype.getMaxVolume = function (type) { return cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagement.pluginName = "AudioManagement";
    AudioManagement.plugin = "clovelced-plugin-audiomanagement";
    AudioManagement.pluginRef = "AudioManagement";
    AudioManagement.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagement.platforms = ["Android"];
    AudioManagement = __decorate([
        Injectable()
    ], AudioManagement);
    return AudioManagement;
}(IonicNativePlugin));
export { AudioManagement };
(function (AudioManagement) {
    var AudioMode;
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioMode = AudioManagement.AudioMode || (AudioManagement.AudioMode = {}));
    var VolumeType;
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(VolumeType = AudioManagement.VolumeType || (AudioManagement.VolumeType = {}));
})(AudioManagement || (AudioManagement = {}));
export default AudioManagement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1ZGlvLW1hbmFnZW1lbnQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkNuQyxtQ0FBaUI7Ozs7SUFZcEQsc0NBQVksYUFBQyxJQUErQjtJQVc1QyxzQ0FBWTtJQWVaLG1DQUFTLGFBQUMsSUFBZ0MsRUFBRSxNQUFjO0lBZTFELG1DQUFTLGFBQUMsSUFBZ0M7SUFlMUMsc0NBQVksYUFBQyxJQUFnQzs7Ozs7O0lBcEVsQyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWU7MEJBOUM1QjtFQThDcUMsaUJBQWlCO1NBQXpDLGVBQWU7QUF5RTVCLFdBQWlCLGVBQWU7SUFDOUIsSUFBWSxTQUlYO0lBSkQsV0FBWSxTQUFTO1FBQ25CLDZDQUFVLENBQUE7UUFDViwrQ0FBTyxDQUFBO1FBQ1AsNkNBQU0sQ0FBQTtJQUNSLENBQUMsRUFKVyxTQUFTLEdBQVQseUJBQVMsS0FBVCx5QkFBUyxRQUlwQjtJQUVELElBQVksVUFLWDtJQUxELFdBQVksVUFBVTtRQUNwQiwyQ0FBUSxDQUFBO1FBQ1IsNkNBQUssQ0FBQTtRQUNMLDJEQUFZLENBQUE7UUFDWiwrQ0FBTSxDQUFBO0lBQ1IsQ0FBQyxFQUxXLFVBQVUsR0FBViwwQkFBVSxLQUFWLDBCQUFVLFFBS3JCO0FBTUgsQ0FBQyxFQWxCZ0IsZUFBZSxLQUFmLGVBQWUsUUFrQi9CO0FBRUQsZUFBZSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBdWRpb01hbmFnZW1lbnRcbiAqIEBkZXNjcmlwdGlvblxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0byBtYW5hZ2UgYXVkaW8gbW9kZSBhbmQgdm9sdW1lIHR5cGVcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCBBdWRpb01hbmFnZW1lbnQgZnJvbSAnQGlvbmljLW5hdGl2ZS9hdWRpby1tYW5hZ2VtZW50L25neCc7XG4gKlxuICogIGNvbnN0cnVjdG9yKHB1YmxpYyBhdWRpb21hbjogQXVkaW9NYW5hZ2VtZW50KSB7XG4gKlxuICogIH1cbiAqXG4gKiBzZXRBdWRpb01vZGUoKSB7XG4gKiAgdGhpcy5hdWRpb21hbi5zZXRBdWRpb01vZGUoQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZS5OT1JNQUwpXG4gKiAgICAudGhlbigoKSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ0RldmljZSBhdWRpbyBtb2RlIGlzIG5vdyBOT1JNQUwnKTtcbiAqICAgIH0pXG4gKiAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICogICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xuICogICAgfSk7XG4gKiB9XG4gKlxuICogZ2V0QXVkaW9Nb2RlKCkge1xuICogIHRoaXMuYXVkaW9tYW4uZ2V0QXVkaW9Nb2RlKClcbiAqICAgIC50aGVuKCh2YWx1ZTogQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZVJldHVybikgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgYXVkaW8gbW9kZSBpcyAnICsgdmFsdWUubGFiZWwgKyAnICgnICsgdmFsdWUuYXVkaW9Nb2RlICsgJyknKTtcbiAqICAgIH0pXG4gKiAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICogICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xuICogICAgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXVkaW9NYW5hZ2VtZW50JyxcbiAgcGx1Z2luOiAnY2xvdmVsY2VkLXBsdWdpbi1hdWRpb21hbmFnZW1lbnQnLFxuICBwbHVnaW5SZWY6ICdBdWRpb01hbmFnZW1lbnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nsb3ZlbENlZC9jb3Jkb3ZhLXBsdWdpbi1hdWRpb21hbmFnZW1lbnQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlbWVudCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVgIGZvciB0aGUgZGV2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGV9IG1vZGUgdGhlIGRldmljZSBjYW4gYmUgc2V0IHRvOiBTaWxlbnQsIE5vcm1hbCwgVmlicmF0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzZXRBdWRpb01vZGUobW9kZTogQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IGBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlYCBvZiB0aGUgZGV2aWNlLiBUaGVuYWJsZSByZXR1cm5zIGFuIG9iamVjdCB3aXRoXG4gICAqIGBsYWJlbGAgYW5kIGBhdWRpb01vZGVgIHZhbHVlcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8QXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZVJldHVybj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEF1ZGlvTW9kZSgpOiBQcm9taXNlPEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgZm9yIHRoZSBkZXZpY2Ugd2l0aCB0aGUgdmFsdWUgZnJvbSBgdm9sdW1lYC5cbiAgICpcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZX0gdHlwZSB0aGUgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCB0byBzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSB0aGUgdm9sdW1lIHZhbHVlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIHNldFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSwgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3BlY2lmaWVkIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAncyBgdm9sdW1lYC4gVGhlbmFibGUgcmV0dXJucyBhbiBvYmplY3Qgd2l0aFxuICAgKiBhIG51bWVyaWMgcHJvcGVydHkgZm9yIHZvbHVtZSwgYHZvbHVtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gZ2V0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHt2b2x1bWU6IG51bWJlcn0+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIGdldFZvbHVtZSh0eXBlOiBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZSk6IFByb21pc2U8eyB2b2x1bWU6IG51bWJlciB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNwZWNpZmllZCBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgJ3MgbWF4aW11bSBgdm9sdW1lYC4gVGhlbmFibGUgcmV0dXJucyBhblxuICAgKiBvYmplY3Qgd2l0aCBhIG51bWVyaWMgcHJvcGVydHksIGBtYXhWb2x1bWVgLlxuICAgKlxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlfSB0eXBlIHRoZSBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7bWF4Vm9sdW1lOiBudW1iZXJ9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBnZXRNYXhWb2x1bWUodHlwZTogQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGUpOiBQcm9taXNlPHsgbWF4Vm9sdW1lOiBudW1iZXIgfT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIEF1ZGlvTWFuYWdlbWVudCB7XG4gIGV4cG9ydCBlbnVtIEF1ZGlvTW9kZSB7XG4gICAgU0lMRU5UID0gMCxcbiAgICBWSUJSQVRFLFxuICAgIE5PUk1BTFxuICB9XG5cbiAgZXhwb3J0IGVudW0gVm9sdW1lVHlwZSB7XG4gICAgUklORyA9IDAsXG4gICAgTVVTSUMsXG4gICAgTk9USUZJQ0FUSU9OLFxuICAgIFNZU1RFTVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBdWRpb01vZGVSZXR1cm4ge1xuICAgIGF1ZGlvTW9kZTogQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZTtcbiAgICBsYWJlbDogc3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvTWFuYWdlbWVudDtcbiJdfQ==