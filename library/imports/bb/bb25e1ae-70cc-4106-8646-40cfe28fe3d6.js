"use strict";
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