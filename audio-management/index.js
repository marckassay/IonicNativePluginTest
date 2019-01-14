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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var AudioManagementOriginal = /** @class */ (function (_super) {
    __extends(AudioManagementOriginal, _super);
    function AudioManagementOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioManagementOriginal.prototype.setAudioMode = function (mode) { return cordova(this, "setAudioMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.prototype.getAudioMode = function () { return cordova(this, "getAudioMode", {}, arguments); };
    AudioManagementOriginal.prototype.setVolume = function (type, volume) { return cordova(this, "setVolume", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    AudioManagementOriginal.prototype.getVolume = function (type) { return cordova(this, "getVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.prototype.getMaxVolume = function (type) { return cordova(this, "getMaxVolume", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    AudioManagementOriginal.pluginName = "AudioManagement";
    AudioManagementOriginal.plugin = "clovelced-plugin-audiomanagement";
    AudioManagementOriginal.pluginRef = "AudioManagement";
    AudioManagementOriginal.repo = "https://github.com/clovelCed/cordova-plugin-audiomanagement";
    AudioManagementOriginal.platforms = ["Android"];
    return AudioManagementOriginal;
}(IonicNativePlugin));
var AudioManagement = new AudioManagementOriginal();
export { AudioManagement };
(function (AudioManagement) {
    var AudioMode;
    (function (AudioMode) {
        AudioMode[AudioMode["SILENT"] = 0] = "SILENT";
        AudioMode[AudioMode["VIBRATE"] = 1] = "VIBRATE";
        AudioMode[AudioMode["NORMAL"] = 2] = "NORMAL";
    })(AudioMode = AudioManagementOriginal.AudioMode || (AudioManagementOriginal.AudioMode = {}));
    var VolumeType;
    (function (VolumeType) {
        VolumeType[VolumeType["RING"] = 0] = "RING";
        VolumeType[VolumeType["MUSIC"] = 1] = "MUSIC";
        VolumeType[VolumeType["NOTIFICATION"] = 2] = "NOTIFICATION";
        VolumeType[VolumeType["SYSTEM"] = 3] = "SYSTEM";
    })(VolumeType = AudioManagementOriginal.VolumeType || (AudioManagementOriginal.VolumeType = {}));
})(AudioManagementOriginal || (AudioManagementOriginal = {}));
export default AudioManagementOriginal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2F1ZGlvLW1hbmFnZW1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkNuQyxtQ0FBaUI7Ozs7SUFZcEQsc0NBQVksYUFBQyxJQUErQjtJQVc1QyxzQ0FBWTtJQWVaLG1DQUFTLGFBQUMsSUFBZ0MsRUFBRSxNQUFjO0lBZTFELG1DQUFTLGFBQUMsSUFBZ0M7SUFlMUMsc0NBQVksYUFBQyxJQUFnQzs7Ozs7OzBCQWxIL0M7RUE4Q3FDLGlCQUFpQjtTQUF6QyxlQUFlO0FBeUU1QixXQUFpQixlQUFlO0lBQzlCLElBQVksU0FJWDtJQUpELFdBQVksU0FBUztRQUNuQiw2Q0FBVSxDQUFBO1FBQ1YsK0NBQU8sQ0FBQTtRQUNQLDZDQUFNLENBQUE7SUFDUixDQUFDLEVBSlcsU0FBUyxHQUFULHlCQUFTLEtBQVQseUJBQVMsUUFJcEI7SUFFRCxJQUFZLFVBS1g7SUFMRCxXQUFZLFVBQVU7UUFDcEIsMkNBQVEsQ0FBQTtRQUNSLDZDQUFLLENBQUE7UUFDTCwyREFBWSxDQUFBO1FBQ1osK0NBQU0sQ0FBQTtJQUNSLENBQUMsRUFMVyxVQUFVLEdBQVYsMEJBQVUsS0FBViwwQkFBVSxRQUtyQjtBQU1ILENBQUMsRUFsQmdCLGVBQWUsS0FBZixlQUFlLFFBa0IvQjtBQUVELGVBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXVkaW9NYW5hZ2VtZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgQ29yZG92YSBwbHVnaW4gdG8gbWFuYWdlIGF1ZGlvIG1vZGUgYW5kIHZvbHVtZSB0eXBlXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgQXVkaW9NYW5hZ2VtZW50IGZyb20gJ0Bpb25pYy1uYXRpdmUvYXVkaW8tbWFuYWdlbWVudC9uZ3gnO1xuICpcbiAqICBjb25zdHJ1Y3RvcihwdWJsaWMgYXVkaW9tYW46IEF1ZGlvTWFuYWdlbWVudCkge1xuICpcbiAqICB9XG4gKlxuICogc2V0QXVkaW9Nb2RlKCkge1xuICogIHRoaXMuYXVkaW9tYW4uc2V0QXVkaW9Nb2RlKEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGUuTk9STUFMKVxuICogICAgLnRoZW4oKCkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdEZXZpY2UgYXVkaW8gbW9kZSBpcyBub3cgTk9STUFMJyk7XG4gKiAgICB9KVxuICogICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAqICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAqICAgIH0pO1xuICogfVxuICpcbiAqIGdldEF1ZGlvTW9kZSgpIHtcbiAqICB0aGlzLmF1ZGlvbWFuLmdldEF1ZGlvTW9kZSgpXG4gKiAgICAudGhlbigodmFsdWU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4pID0+IHtcbiAqICAgICBjb25zb2xlLmxvZygnRGV2aWNlIGF1ZGlvIG1vZGUgaXMgJyArIHZhbHVlLmxhYmVsICsgJyAoJyArIHZhbHVlLmF1ZGlvTW9kZSArICcpJyk7XG4gKiAgICB9KVxuICogICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAqICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcbiAqICAgIH0pO1xuICogfVxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0F1ZGlvTWFuYWdlbWVudCcsXG4gIHBsdWdpbjogJ2Nsb3ZlbGNlZC1wbHVnaW4tYXVkaW9tYW5hZ2VtZW50JyxcbiAgcGx1Z2luUmVmOiAnQXVkaW9NYW5hZ2VtZW50JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jbG92ZWxDZWQvY29yZG92YS1wbHVnaW4tYXVkaW9tYW5hZ2VtZW50JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZW1lbnQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGBBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlYCBmb3IgdGhlIGRldmljZS5cbiAgICpcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlfSBtb2RlIHRoZSBkZXZpY2UgY2FuIGJlIHNldCB0bzogU2lsZW50LCBOb3JtYWwsIFZpYnJhdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc2V0QXVkaW9Nb2RlKG1vZGU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBgQXVkaW9NYW5hZ2VtZW50LkF1ZGlvTW9kZWAgb2YgdGhlIGRldmljZS4gVGhlbmFibGUgcmV0dXJucyBhbiBvYmplY3Qgd2l0aFxuICAgKiBgbGFiZWxgIGFuZCBgYXVkaW9Nb2RlYCB2YWx1ZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGVSZXR1cm4+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBdWRpb01vZGUoKTogUHJvbWlzZTxBdWRpb01hbmFnZW1lbnQuQXVkaW9Nb2RlUmV0dXJuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNwZWNpZmllZCBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgIGZvciB0aGUgZGV2aWNlIHdpdGggdGhlIHZhbHVlIGZyb20gYHZvbHVtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7QXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGV9IHR5cGUgdGhlIGBBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZWAgdG8gc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWUgdGhlIHZvbHVtZSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogM1xuICB9KVxuICBzZXRWb2x1bWUodHlwZTogQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGUsIHZvbHVtZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNwZWNpZmllZCBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgJ3MgYHZvbHVtZWAuIFRoZW5hYmxlIHJldHVybnMgYW4gb2JqZWN0IHdpdGhcbiAgICogYSBudW1lcmljIHByb3BlcnR5IGZvciB2b2x1bWUsIGB2b2x1bWVgLlxuICAgKlxuICAgKiBAcGFyYW0ge0F1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlfSB0eXBlIHRoZSBgQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGVgIHRvIGdldFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7dm9sdW1lOiBudW1iZXJ9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBnZXRWb2x1bWUodHlwZTogQXVkaW9NYW5hZ2VtZW50LlZvbHVtZVR5cGUpOiBQcm9taXNlPHsgdm9sdW1lOiBudW1iZXIgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzcGVjaWZpZWQgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCdzIG1heGltdW0gYHZvbHVtZWAuIFRoZW5hYmxlIHJldHVybnMgYW5cbiAgICogb2JqZWN0IHdpdGggYSBudW1lcmljIHByb3BlcnR5LCBgbWF4Vm9sdW1lYC5cbiAgICpcbiAgICogQHBhcmFtIHtBdWRpb01hbmFnZW1lbnQuVm9sdW1lVHlwZX0gdHlwZSB0aGUgYEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlYCB0byBnZXRcbiAgICogQHJldHVybnMge1Byb21pc2U8e21heFZvbHVtZTogbnVtYmVyfT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgZ2V0TWF4Vm9sdW1lKHR5cGU6IEF1ZGlvTWFuYWdlbWVudC5Wb2x1bWVUeXBlKTogUHJvbWlzZTx7IG1heFZvbHVtZTogbnVtYmVyIH0+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBBdWRpb01hbmFnZW1lbnQge1xuICBleHBvcnQgZW51bSBBdWRpb01vZGUge1xuICAgIFNJTEVOVCA9IDAsXG4gICAgVklCUkFURSxcbiAgICBOT1JNQUxcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIFZvbHVtZVR5cGUge1xuICAgIFJJTkcgPSAwLFxuICAgIE1VU0lDLFxuICAgIE5PVElGSUNBVElPTixcbiAgICBTWVNURU1cbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQXVkaW9Nb2RlUmV0dXJuIHtcbiAgICBhdWRpb01vZGU6IEF1ZGlvTWFuYWdlbWVudC5BdWRpb01vZGU7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb01hbmFnZW1lbnQ7XG4iXX0=