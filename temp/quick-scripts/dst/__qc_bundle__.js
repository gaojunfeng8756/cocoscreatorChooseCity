
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/ChooseCityPop');
require('./assets/Script/Helloworld');
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ChooseCityPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb25eGucMxBBoZGQM/ij+PW', 'ChooseCityPop');
// Script/ChooseCityPop.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ChooseCityPop = /** @class */ (function (_super) {
    __extends(ChooseCityPop, _super);
    function ChooseCityPop() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.AllArray = [];
        _this.cityChooseNode = null;
        _this.sureButton = null;
        _this.provincesScrollView = null;
        _this.provincesContentNode = null;
        _this.provincesContentLayout = null;
        _this.prefabNode = null;
        _this.cityScrollView = null;
        _this.cityContentNode = null;
        _this.cityContentLayout = null;
        _this.areaScrollView = null;
        _this.areaContentNode = null;
        _this.areaContentLayout = null;
        _this.provLabelNode = null;
        _this.areaLabelNode = null;
        _this.cityJson = null;
        _this.provincesIndex = 0;
        _this.cityIndex = 0;
        _this.areaIndex = 0;
        return _this;
    }
    ChooseCityPop.prototype.start = function () {
        this.AllArray = this.cityJson.json;
        this.provLabelNode.getComponent(cc.Widget).horizontalCenter = -200;
        this.areaLabelNode.getComponent(cc.Widget).horizontalCenter = 200;
        this.initProvincesItem();
        this.initCityItem();
        this.initAreaItem();
        this.sureButton.interactable = false;
        this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
    };
    ChooseCityPop.prototype.initProvincesItem = function () {
        this.provincesScrollView.getComponent(cc.Widget).horizontalCenter = -200;
        this.provincesScrollView.width = 200;
        this.provincesScrollView.getChildByName('view').width = 200;
        this.provincesContentNode.width = 200;
        this.provincesContentLayout.width = 200;
        this.provincesContentNode.height = 500;
        var totalHight = 0;
        for (var i = 0; i < this.AllArray.length; i++) {
            var node = cc.instantiate(this.prefabNode);
            node.active = true;
            totalHight += node.height;
            node.width = 200;
            node.getComponentInChildren(cc.Label).string = this.AllArray[i]['province'].length > 6 ? this.AllArray[i]['province'].substring(0, 5) + '…' : this.AllArray[i]['province'];
            this.provincesContentLayout.addChild(node);
        }
        if (totalHight > this.provincesContentNode.height) {
            this.provincesContentNode.height = totalHight;
        }
    };
    ChooseCityPop.prototype.initCityItem = function () {
        this.cityScrollView.width = 200;
        this.cityScrollView.getChildByName('view').width = 200;
        this.cityContentNode.width = 200;
        this.cityContentLayout.width = 200;
        this.cityContentNode.height = 500;
        var cityArray = this.AllArray[this.provincesIndex]['cityArray'];
        var totalHight = 0;
        for (var i = 0; i < cityArray.length; i++) {
            var node = cc.instantiate(this.prefabNode);
            node.active = true;
            totalHight += node.height;
            node.width = 200;
            node.getComponentInChildren(cc.Label).string = cityArray[i]['city'].length > 6 ? cityArray[i]['city'].substring(0, 5) + '…' : cityArray[i]['city'];
            this.cityContentLayout.addChild(node);
            if (i == this.cityIndex && cityArray[i]['city'] != '未选择') {
                node.getChildByName('name').color = new cc.Color(204, 50, 68);
                node.getChildByName('name').opacity = 255;
            }
            else {
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
        ;
        // this.cityContentLayout.getComponent(cc.Layout).updateLayout();
        if (totalHight > this.cityContentNode.height) {
            this.cityContentNode.height = totalHight;
        }
    };
    ChooseCityPop.prototype.initAreaItem = function () {
        this.areaScrollView.getComponent(cc.Widget).horizontalCenter = 200;
        this.areaScrollView.width = 200;
        this.areaScrollView.getChildByName('view').width = 400;
        this.areaContentNode.width = 200;
        this.areaContentLayout.width = 200;
        this.areaContentNode.height = 500;
        var areaArray = this.AllArray[this.provincesIndex]['cityArray'][this.cityIndex]['areaArray'];
        var totalHight = 0;
        for (var i = 0; i < areaArray.length; i++) {
            var node = cc.instantiate(this.prefabNode);
            node.active = true;
            totalHight += node.height;
            node.width = 200;
            node.getComponentInChildren(cc.Label).string = areaArray[i]['area'].length > 6 ? areaArray[i]['area'].substring(0, 5) + '…' : areaArray[i]['area'];
            this.areaContentLayout.addChild(node);
            if (i == this.areaIndex && areaArray[i]['area'] != '未选择') {
                node.getChildByName('name').color = new cc.Color(204, 50, 68);
                node.getChildByName('name').opacity = 255;
            }
            else {
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
        // this.areaContentLayout.getComponent(cc.Layout).updateLayout();
        if (totalHight > this.areaContentNode.height) {
            this.areaContentNode.height = totalHight;
        }
    };
    // update (dt) {}
    ChooseCityPop.prototype.provincesScrollEvent = function () {
        if (!this.provincesScrollView.getComponent(cc.ScrollView).isScrolling() && !this.provincesScrollView.getComponent(cc.ScrollView).isAutoScrolling()) {
            //console.log('选择第一个');
            var number = (this.provincesScrollView.getComponent(cc.ScrollView).getContentPosition().y - 250);
            this.provincesIndex = Math.round((number > 0 ? number : 0) / 100);
            this.provincesScrollView.getComponent(cc.ScrollView).setContentPosition(new cc.Vec2(0, 250 + this.provincesIndex * 100));
            this.cityContentLayout.removeAllChildren();
            this.areaContentLayout.removeAllChildren();
            for (var i = 0; i < this.provincesContentLayout.children.length; i++) {
                var node = this.provincesContentLayout.children[i];
                if (i == this.provincesIndex && node.getComponentInChildren(cc.Label).string != '未选择') {
                    node.getChildByName('name').color = new cc.Color(204, 50, 68);
                    node.getChildByName('name').opacity = 255;
                    this.sureButton.interactable = true;
                    this.sureButton.node.getChildByName('label').color = new cc.Color(0, 0, 0);
                }
                else {
                    node.getChildByName('name').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').opacity = 150;
                }
            }
            this.cityIndex = 0;
            this.areaIndex = 0;
            this.initCityItem();
            this.initAreaItem();
        }
        else {
            this.sureButton.interactable = false;
            this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
            for (var i = 0; i < this.provincesContentLayout.children.length; i++) {
                var node = this.provincesContentLayout.children[i];
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
    };
    ChooseCityPop.prototype.cityScrollEvent = function () {
        if (!this.cityScrollView.getComponent(cc.ScrollView).isScrolling() && !this.cityScrollView.getComponent(cc.ScrollView).isAutoScrolling()) {
            //console.log('选择第一个');
            var number = (this.cityScrollView.getComponent(cc.ScrollView).getContentPosition().y - 250);
            this.cityIndex = Math.round((number > 0 ? number : 0) / 100);
            this.cityScrollView.getComponent(cc.ScrollView).setContentPosition(new cc.Vec2(0, 250 + this.cityIndex * 100));
            this.areaContentLayout.removeAllChildren();
            for (var i = 0; i < this.cityContentLayout.children.length; i++) {
                var node = this.cityContentLayout.children[i];
                if (i == this.cityIndex && node.getComponentInChildren(cc.Label).string != '未选择') {
                    node.getChildByName('name').color = new cc.Color(204, 50, 68);
                    node.getChildByName('name').opacity = 255;
                    this.sureButton.interactable = true;
                    this.sureButton.node.getChildByName('label').color = new cc.Color(0, 0, 0);
                }
                else {
                    node.getChildByName('name').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').opacity = 150;
                }
            }
            this.areaIndex = 0;
            this.initAreaItem();
        }
        else {
            this.sureButton.interactable = false;
            this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
            for (var i = 0; i < this.cityContentLayout.children.length; i++) {
                var node = this.cityContentLayout.children[i];
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
    };
    ChooseCityPop.prototype.areaScrollEvent = function () {
        if (!this.areaScrollView.getComponent(cc.ScrollView).isScrolling() && !this.areaScrollView.getComponent(cc.ScrollView).isAutoScrolling()) {
            //console.log('选择第一个');
            var number = (this.areaScrollView.getComponent(cc.ScrollView).getContentPosition().y - 250);
            this.areaIndex = Math.round((number > 0 ? number : 0) / 100);
            this.areaScrollView.getComponent(cc.ScrollView).setContentPosition(new cc.Vec2(0, 250 + this.areaIndex * 100));
            for (var i = 0; i < this.areaContentLayout.children.length; i++) {
                var node = this.areaContentLayout.children[i];
                if (i == this.areaIndex && node.getComponentInChildren(cc.Label).string != '未选择') {
                    this.sureButton.interactable = true;
                    this.sureButton.node.getChildByName('label').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').color = new cc.Color(204, 50, 68);
                    node.getChildByName('name').opacity = 255;
                }
                else {
                    node.getChildByName('name').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').opacity = 150;
                }
            }
        }
        else {
            this.sureButton.interactable = false;
            this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
            for (var i = 0; i < this.areaContentLayout.children.length; i++) {
                var node = this.areaContentLayout.children[i];
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
    };
    ChooseCityPop.prototype.closeButtonClick = function (event, data) {
        this.node.removeFromParent();
        var bundle = cc.assetManager.getBundle('assetsRes');
        bundle.release("prefab/pop/cityChoose");
    };
    ChooseCityPop.prototype.sureButtonClick = function (event, data) {
        var provinceName = this.AllArray[this.provincesIndex]['province'];
        var cityName = this.AllArray[this.provincesIndex]['cityArray'][this.cityIndex]['city'];
        var areaName = this.AllArray[this.provincesIndex]['cityArray'][this.cityIndex]['areaArray'][this.areaIndex]['area'];
        var str = provinceName + cityName + areaName;
        console.log(str);
    };
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "cityChooseNode", void 0);
    __decorate([
        property(cc.Button)
    ], ChooseCityPop.prototype, "sureButton", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "provincesScrollView", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "provincesContentNode", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "provincesContentLayout", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "prefabNode", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "cityScrollView", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "cityContentNode", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "cityContentLayout", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "areaScrollView", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "areaContentNode", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "areaContentLayout", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "provLabelNode", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseCityPop.prototype, "areaLabelNode", void 0);
    __decorate([
        property(cc.JsonAsset)
    ], ChooseCityPop.prototype, "cityJson", void 0);
    ChooseCityPop = __decorate([
        ccclass
    ], ChooseCityPop);
    return ChooseCityPop;
}(cc.Component));
exports.default = ChooseCityPop;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ2hvb3NlQ2l0eVBvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUlJLHdCQUF3QjtRQUo1QixxRUF1UkM7UUFqUkcsZUFBZTtRQUdmLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFHZCxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3Qix5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFFcEMsMEJBQW9CLEdBQVksSUFBSSxDQUFDO1FBRXJDLDRCQUFzQixHQUFZLElBQUksQ0FBQztRQUV2QyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsdUJBQWlCLEdBQVksSUFBSSxDQUFDO1FBR2xDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBRXRCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUF3T2xDLENBQUM7SUF2T0csNkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxD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ImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9vc2VDaXR5UG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuXHJcbiAgICBBbGxBcnJheSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2l0eUNob29zZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHN1cmVCdXR0b246IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3ZpbmNlc1Njcm9sbFZpZXc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm92aW5jZXNDb250ZW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3ZpbmNlc0NvbnRlbnRMYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcmVmYWJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNpdHlTY3JvbGxWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2l0eUNvbnRlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2l0eUNvbnRlbnRMYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcmVhU2Nyb2xsVmlldzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyZWFDb250ZW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFyZWFDb250ZW50TGF5b3V0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3ZMYWJlbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhcmVhTGFiZWxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxyXG4gICAgY2l0eUpzb246IGNjLkpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm92aW5jZXNJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2l0eUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhcmVhSW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLkFsbEFycmF5ID0gdGhpcy5jaXR5SnNvbi5qc29uO1xyXG5cclxuICAgICAgICB0aGlzLnByb3ZMYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaG9yaXpvbnRhbENlbnRlciA9IC0yMDA7XHJcbiAgICAgICAgdGhpcy5hcmVhTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmhvcml6b250YWxDZW50ZXIgPSAyMDA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pbml0UHJvdmluY2VzSXRlbSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdENpdHlJdGVtKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QXJlYUl0ZW0oKTtcclxuICAgICAgICB0aGlzLnN1cmVCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdXJlQnV0dG9uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjAzLCAyMDMsIDIwMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFByb3ZpbmNlc0l0ZW0oKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvdmluY2VzU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ob3Jpem9udGFsQ2VudGVyID0gLTIwMDtcclxuICAgICAgICB0aGlzLnByb3ZpbmNlc1Njcm9sbFZpZXcud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5wcm92aW5jZXNTY3JvbGxWaWV3LmdldENoaWxkQnlOYW1lKCd2aWV3Jykud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5wcm92aW5jZXNDb250ZW50Tm9kZS53aWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLnByb3ZpbmNlc0NvbnRlbnRMYXlvdXQud2lkdGggPSAyMDA7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnByb3ZpbmNlc0NvbnRlbnROb2RlLmhlaWdodCA9IDUwMDtcclxuICAgICAgICBsZXQgdG90YWxIaWdodCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkFsbEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJOb2RlKTtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0b3RhbEhpZ2h0ICs9IG5vZGUuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgbm9kZS53aWR0aCA9IDIwMDtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLkFsbEFycmF5W2ldWydwcm92aW5jZSddLmxlbmd0aCA+IDYgPyB0aGlzLkFsbEFycmF5W2ldWydwcm92aW5jZSddLnN1YnN0cmluZygwLCA1KSArICfigKYnIDogdGhpcy5BbGxBcnJheVtpXVsncHJvdmluY2UnXTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3ZpbmNlc0NvbnRlbnRMYXlvdXQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3RhbEhpZ2h0ID4gdGhpcy5wcm92aW5jZXNDb250ZW50Tm9kZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm92aW5jZXNDb250ZW50Tm9kZS5oZWlnaHQgPSB0b3RhbEhpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0Q2l0eUl0ZW0oKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jaXR5U2Nyb2xsVmlldy53aWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLmNpdHlTY3JvbGxWaWV3LmdldENoaWxkQnlOYW1lKCd2aWV3Jykud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5jaXR5Q29udGVudE5vZGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5jaXR5Q29udGVudExheW91dC53aWR0aCA9IDIwMDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2l0eUNvbnRlbnROb2RlLmhlaWdodCA9IDUwMDtcclxuICAgICAgICBsZXQgY2l0eUFycmF5ID0gdGhpcy5BbGxBcnJheVt0aGlzLnByb3ZpbmNlc0luZGV4XVsnY2l0eUFycmF5J11cclxuICAgICAgICBsZXQgdG90YWxIaWdodCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYk5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRvdGFsSGlnaHQgKz0gbm9kZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBub2RlLndpZHRoID0gMjAwO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGNpdHlBcnJheVtpXVsnY2l0eSddLmxlbmd0aCA+IDYgPyBjaXR5QXJyYXlbaV1bJ2NpdHknXS5zdWJzdHJpbmcoMCwgNSkgKyAn4oCmJyA6IGNpdHlBcnJheVtpXVsnY2l0eSddO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaXR5Q29udGVudExheW91dC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5jaXR5SW5kZXggJiYgY2l0eUFycmF5W2ldWydjaXR5J10gIT0gJ+acqumAieaLqScpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMDQsIDUwLCA2OCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykub3BhY2l0eSA9IDE1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gdGhpcy5jaXR5Q29udGVudExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICBpZiAodG90YWxIaWdodCA+IHRoaXMuY2l0eUNvbnRlbnROb2RlLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmNpdHlDb250ZW50Tm9kZS5oZWlnaHQgPSB0b3RhbEhpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0QXJlYUl0ZW0oKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmFyZWFTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmhvcml6b250YWxDZW50ZXIgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5hcmVhU2Nyb2xsVmlldy53aWR0aCA9IDIwMDtcclxuICAgICAgICB0aGlzLmFyZWFTY3JvbGxWaWV3LmdldENoaWxkQnlOYW1lKCd2aWV3Jykud2lkdGggPSA0MDA7XHJcbiAgICAgICAgdGhpcy5hcmVhQ29udGVudE5vZGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgdGhpcy5hcmVhQ29udGVudExheW91dC53aWR0aCA9IDIwMDtcclxuXHJcbiAgICAgICAgdGhpcy5hcmVhQ29udGVudE5vZGUuaGVpZ2h0ID0gNTAwO1xyXG4gICAgICAgIGxldCBhcmVhQXJyYXkgPSB0aGlzLkFsbEFycmF5W3RoaXMucHJvdmluY2VzSW5kZXhdWydjaXR5QXJyYXknXVt0aGlzLmNpdHlJbmRleF1bJ2FyZWFBcnJheSddO1xyXG4gICAgICAgIGxldCB0b3RhbEhpZ2h0ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZWFBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiTm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdG90YWxIaWdodCArPSBub2RlLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gYXJlYUFycmF5W2ldWydhcmVhJ10ubGVuZ3RoID4gNiA/IGFyZWFBcnJheVtpXVsnYXJlYSddLnN1YnN0cmluZygwLCA1KSArICfigKYnIDogYXJlYUFycmF5W2ldWydhcmVhJ107XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5hcmVhQ29udGVudExheW91dC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5hcmVhSW5kZXggJiYgYXJlYUFycmF5W2ldWydhcmVhJ10gIT0gJ+acqumAieaLqScpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMDQsIDUwLCA2OCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykub3BhY2l0eSA9IDE1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmFyZWFDb250ZW50TGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xyXG5cclxuICAgICAgICBpZiAodG90YWxIaWdodCA+IHRoaXMuYXJlYUNvbnRlbnROb2RlLmhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFDb250ZW50Tm9kZS5oZWlnaHQgPSB0b3RhbEhpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHByb3ZpbmNlc1Njcm9sbEV2ZW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm92aW5jZXNTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5pc1Njcm9sbGluZygpICYmICF0aGlzLnByb3ZpbmNlc1Njcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+mAieaLqeesrOS4gOS4qicpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gKHRoaXMucHJvdmluY2VzU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuZ2V0Q29udGVudFBvc2l0aW9uKCkueSAtIDI1MClcclxuICAgICAgICAgICAgdGhpcy5wcm92aW5jZXNJbmRleCA9IE1hdGgucm91bmQoKG51bWJlciA+IDAgPyBudW1iZXIgOiAwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvdmluY2VzU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuc2V0Q29udGVudFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAsIDI1MCArIHRoaXMucHJvdmluY2VzSW5kZXggKiAxMDApKTtcclxuICAgICAgICAgICAgdGhpcy5jaXR5Q29udGVudExheW91dC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFDb250ZW50TGF5b3V0LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm92aW5jZXNDb250ZW50TGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucHJvdmluY2VzQ29udGVudExheW91dC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMucHJvdmluY2VzSW5kZXggJiYgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgIT0gJ+acqumAieaLqScpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIwNCwgNTAsIDY4KTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmVCdXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmVCdXR0b24ubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5vcGFjaXR5ID0gMTUwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2l0eUluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5hcmVhSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDaXR5SXRlbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBcmVhSXRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VyZUJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdXJlQnV0dG9uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjAzLCAyMDMsIDIwMyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm92aW5jZXNDb250ZW50TGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMucHJvdmluY2VzQ29udGVudExheW91dC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5vcGFjaXR5ID0gMTUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNpdHlTY3JvbGxFdmVudCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2l0eVNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmlzU2Nyb2xsaW5nKCkgJiYgIXRoaXMuY2l0eVNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+mAieaLqeesrOS4gOS4qicpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gKHRoaXMuY2l0eVNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmdldENvbnRlbnRQb3NpdGlvbigpLnkgLSAyNTApXHJcbiAgICAgICAgICAgIHRoaXMuY2l0eUluZGV4ID0gTWF0aC5yb3VuZCgobnVtYmVyID4gMCA/IG51bWJlciA6IDApIC8gMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5jaXR5U2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuc2V0Q29udGVudFBvc2l0aW9uKG5ldyBjYy5WZWMyKDAsIDI1MCArIHRoaXMuY2l0eUluZGV4ICogMTAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYUNvbnRlbnRMYXlvdXQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNpdHlDb250ZW50TGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY2l0eUNvbnRlbnRMYXlvdXQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLmNpdHlJbmRleCAmJiBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyAhPSAn5pyq6YCJ5oupJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjA0LCA1MCwgNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZUJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZUJ1dHRvbi5ub2RlLmdldENoaWxkQnlOYW1lKCdsYWJlbCcpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLm9wYWNpdHkgPSAxNTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hcmVhSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRBcmVhSXRlbSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VyZUJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdXJlQnV0dG9uLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2xhYmVsJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjAzLCAyMDMsIDIwMyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaXR5Q29udGVudExheW91dC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNpdHlDb250ZW50TGF5b3V0LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLm9wYWNpdHkgPSAxNTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXJlYVNjcm9sbEV2ZW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hcmVhU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuaXNTY3JvbGxpbmcoKSAmJiAhdGhpcy5hcmVhU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygn6YCJ5oup56ys5LiA5LiqJyk7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSAodGhpcy5hcmVhU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuZ2V0Q29udGVudFBvc2l0aW9uKCkueSAtIDI1MClcclxuICAgICAgICAgICAgdGhpcy5hcmVhSW5kZXggPSBNYXRoLnJvdW5kKChudW1iZXIgPiAwID8gbnVtYmVyIDogMCkgLyAxMDApO1xyXG4gICAgICAgICAgICB0aGlzLmFyZWFTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5zZXRDb250ZW50UG9zaXRpb24obmV3IGNjLlZlYzIoMCwgMjUwICsgdGhpcy5hcmVhSW5kZXggKiAxMDApKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFyZWFDb250ZW50TGF5b3V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYXJlYUNvbnRlbnRMYXlvdXQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLmFyZWFJbmRleCAmJiBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyAhPSAn5pyq6YCJ5oupJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VyZUJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cmVCdXR0b24ubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjA0LCA1MCwgNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCduYW1lJykuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpLm9wYWNpdHkgPSAxNTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN1cmVCdXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3VyZUJ1dHRvbi5ub2RlLmdldENoaWxkQnlOYW1lKCdsYWJlbCcpLmNvbG9yID0gbmV3IGNjLkNvbG9yKDIwMywgMjAzLCAyMDMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJlYUNvbnRlbnRMYXlvdXQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5hcmVhQ29udGVudExheW91dC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5vcGFjaXR5ID0gMTUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQnV0dG9uQ2xpY2soZXZlbnQ6IGNjLkV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKCdhc3NldHNSZXMnKTtcclxuICAgICAgICBidW5kbGUucmVsZWFzZShcInByZWZhYi9wb3AvY2l0eUNob29zZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXJlQnV0dG9uQ2xpY2soZXZlbnQ6IGNjLkV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgcHJvdmluY2VOYW1lID0gdGhpcy5BbGxBcnJheVt0aGlzLnByb3ZpbmNlc0luZGV4XVsncHJvdmluY2UnXTtcclxuICAgICAgICBsZXQgY2l0eU5hbWUgPSB0aGlzLkFsbEFycmF5W3RoaXMucHJvdmluY2VzSW5kZXhdWydjaXR5QXJyYXknXVt0aGlzLmNpdHlJbmRleF1bJ2NpdHknXTtcclxuICAgICAgICBsZXQgYXJlYU5hbWUgPSB0aGlzLkFsbEFycmF5W3RoaXMucHJvdmluY2VzSW5kZXhdWydjaXR5QXJyYXknXVt0aGlzLmNpdHlJbmRleF1bJ2FyZWFBcnJheSddW3RoaXMuYXJlYUluZGV4XVsnYXJlYSddO1xyXG4gICAgICAgIGxldCBzdHIgPSBwcm92aW5jZU5hbWUgKyBjaXR5TmFtZSArIGFyZWFOYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Helloworld');
// Script/Helloworld.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Helloworld.prototype.start = function () {
        // init logic
        this.label.string = this.text;
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property
    ], Helloworld.prototype, "text", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG93b3JsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQVlDO1FBVEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQU0zQixDQUFDO0lBSkcsMEJBQUssR0FBTDtRQUNJLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFSRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBR3ZCO1FBREMsUUFBUTs0Q0FDYztJQU5OLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FZOUI7SUFBRCxpQkFBQztDQVpELEFBWUMsQ0FadUMsRUFBRSxDQUFDLFNBQVMsR0FZbkQ7a0JBWm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gaW5pdCBsb2dpY1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb90ahgUnxIm6njnR1bZkmd', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3YyLjEtMi4yLjFfY2MuVG9nZ2xlX2V2ZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiVG9nZ2xlIiwiX3RyaWdnZXJFdmVudEluU2NyaXB0X2lzQ2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7QUFDWDtBQUNBO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywrQkFBVixHQUE0QyxJQUE1QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IHVzZWQgZm9yIHByb2plY3RzIGNvbXBhdGlibGUgd2l0aCB0aGUgdjIuMS4wIO+9niAyLjIuMSB2ZXJzaW9uLlxyXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxyXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxyXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIH4gMi4yLjEg54mI5pys55qE5bel56iL77yMXHJcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXHJcbiAqL1xyXG5cclxuaWYgKGNjLlRvZ2dsZSkge1xyXG4gICAgLy8gV2hldGhlciB0byB0cmlnZ2VyICd0b2dnbGUnIGFuZCAnY2hlY2tFdmVudHMnIGV2ZW50cyB3aGVuIG1vZGlmeWluZyAndG9nZ2xlLmlzQ2hlY2tlZCcgaW4gdGhlIGNvZGVcclxuICAgIC8vIOWcqOS7o+eggeS4reS/ruaUuSAndG9nZ2xlLmlzQ2hlY2tlZCcg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9pc0NoZWNrZWQgPSB0cnVlO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
