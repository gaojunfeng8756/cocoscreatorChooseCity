const { ccclass, property } = cc._decorator;

@ccclass
export default class ChooseCityPop extends cc.Component {



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    AllArray = [];

    @property(cc.Node)
    cityChooseNode: cc.Node = null;
    @property(cc.Button)
    sureButton: cc.Button = null;
    @property(cc.Node)
    provincesScrollView: cc.Node = null;
    @property(cc.Node)
    provincesContentNode: cc.Node = null;
    @property(cc.Node)
    provincesContentLayout: cc.Node = null;
    @property(cc.Node)
    prefabNode: cc.Node = null;

    @property(cc.Node)
    cityScrollView: cc.Node = null;
    @property(cc.Node)
    cityContentNode: cc.Node = null;
    @property(cc.Node)
    cityContentLayout: cc.Node = null;
    @property(cc.Node)
    areaScrollView: cc.Node = null;
    @property(cc.Node)
    areaContentNode: cc.Node = null;
    @property(cc.Node)
    areaContentLayout: cc.Node = null;

    @property(cc.Node)
    provLabelNode: cc.Node = null;
    @property(cc.Node)
    areaLabelNode: cc.Node = null;

    @property(cc.JsonAsset)
    cityJson: cc.JsonAsset = null;

    private provincesIndex: number = 0;
    private cityIndex: number = 0;
    private areaIndex: number = 0;
    start() {
        this.AllArray = this.cityJson.json;

        this.provLabelNode.getComponent(cc.Widget).horizontalCenter = -200;
        this.areaLabelNode.getComponent(cc.Widget).horizontalCenter = 200;



        this.initProvincesItem();
        this.initCityItem();
        this.initAreaItem();
        this.sureButton.interactable = false;
        this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
    }

    initProvincesItem() {

        this.provincesScrollView.getComponent(cc.Widget).horizontalCenter = -200;
        this.provincesScrollView.width = 200;
        this.provincesScrollView.getChildByName('view').width = 200;
        this.provincesContentNode.width = 200;
        this.provincesContentLayout.width = 200;


        this.provincesContentNode.height = 500;
        let totalHight = 0;
        for (let i = 0; i < this.AllArray.length; i++) {
            let node = cc.instantiate(this.prefabNode);
            node.active = true;
            totalHight += node.height;

            node.width = 200;
            node.getComponentInChildren(cc.Label).string = this.AllArray[i]['province'].length > 6 ? this.AllArray[i]['province'].substring(0, 5) + '…' : this.AllArray[i]['province'];


            this.provincesContentLayout.addChild(node);
        }
        if (totalHight > this.provincesContentNode.height) {
            this.provincesContentNode.height = totalHight;
        }
    }

    initCityItem() {



        this.cityScrollView.width = 200;
        this.cityScrollView.getChildByName('view').width = 200;
        this.cityContentNode.width = 200;
        this.cityContentLayout.width = 200;


        this.cityContentNode.height = 500;
        let cityArray = this.AllArray[this.provincesIndex]['cityArray']
        let totalHight = 0;
        for (let i = 0; i < cityArray.length; i++) {
            let node = cc.instantiate(this.prefabNode);
            node.active = true;
            totalHight += node.height;

            node.width = 200;
            node.getComponentInChildren(cc.Label).string = cityArray[i]['city'].length > 6 ? cityArray[i]['city'].substring(0, 5) + '…' : cityArray[i]['city'];

            this.cityContentLayout.addChild(node);
            if (i == this.cityIndex && cityArray[i]['city'] != '未选择') {
                node.getChildByName('name').color = new cc.Color(204, 50, 68);
                node.getChildByName('name').opacity = 255;

            } else {
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        };
        // this.cityContentLayout.getComponent(cc.Layout).updateLayout();
        if (totalHight > this.cityContentNode.height) {
            this.cityContentNode.height = totalHight;
        }
    }

    initAreaItem() {


        this.areaScrollView.getComponent(cc.Widget).horizontalCenter = 200;
        this.areaScrollView.width = 200;
        this.areaScrollView.getChildByName('view').width = 400;
        this.areaContentNode.width = 200;
        this.areaContentLayout.width = 200;

        this.areaContentNode.height = 500;
        let areaArray = this.AllArray[this.provincesIndex]['cityArray'][this.cityIndex]['areaArray'];
        let totalHight = 0;
        for (let i = 0; i < areaArray.length; i++) {
            let node = cc.instantiate(this.prefabNode);
            node.active = true;
            totalHight += node.height;

            node.width = 200;
            node.getComponentInChildren(cc.Label).string = areaArray[i]['area'].length > 6 ? areaArray[i]['area'].substring(0, 5) + '…' : areaArray[i]['area'];


            this.areaContentLayout.addChild(node);
            if (i == this.areaIndex && areaArray[i]['area'] != '未选择') {
                node.getChildByName('name').color = new cc.Color(204, 50, 68);
                node.getChildByName('name').opacity = 255;

            } else {
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
        // this.areaContentLayout.getComponent(cc.Layout).updateLayout();

        if (totalHight > this.areaContentNode.height) {
            this.areaContentNode.height = totalHight;
        }
    }

    // update (dt) {}

    provincesScrollEvent() {
        if (!this.provincesScrollView.getComponent(cc.ScrollView).isScrolling() && !this.provincesScrollView.getComponent(cc.ScrollView).isAutoScrolling()) {
            //console.log('选择第一个');
            let number = (this.provincesScrollView.getComponent(cc.ScrollView).getContentPosition().y - 250)
            this.provincesIndex = Math.round((number > 0 ? number : 0) / 100);
            this.provincesScrollView.getComponent(cc.ScrollView).setContentPosition(new cc.Vec2(0, 250 + this.provincesIndex * 100));
            this.cityContentLayout.removeAllChildren();
            this.areaContentLayout.removeAllChildren();
            for (let i = 0; i < this.provincesContentLayout.children.length; i++) {
                let node = this.provincesContentLayout.children[i];
                if (i == this.provincesIndex && node.getComponentInChildren(cc.Label).string != '未选择') {

                    node.getChildByName('name').color = new cc.Color(204, 50, 68);
                    node.getChildByName('name').opacity = 255;
                    this.sureButton.interactable = true;
                    this.sureButton.node.getChildByName('label').color = new cc.Color(0, 0, 0);
                } else {
                    node.getChildByName('name').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').opacity = 150;
                }
            }
            this.cityIndex = 0;
            this.areaIndex = 0;
            this.initCityItem();
            this.initAreaItem();
        } else {
            this.sureButton.interactable = false;
            this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
            for (let i = 0; i < this.provincesContentLayout.children.length; i++) {
                let node = this.provincesContentLayout.children[i];
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
    }

    cityScrollEvent() {
        if (!this.cityScrollView.getComponent(cc.ScrollView).isScrolling() && !this.cityScrollView.getComponent(cc.ScrollView).isAutoScrolling()) {
            //console.log('选择第一个');
            let number = (this.cityScrollView.getComponent(cc.ScrollView).getContentPosition().y - 250)
            this.cityIndex = Math.round((number > 0 ? number : 0) / 100);
            this.cityScrollView.getComponent(cc.ScrollView).setContentPosition(new cc.Vec2(0, 250 + this.cityIndex * 100));
            this.areaContentLayout.removeAllChildren();
            for (let i = 0; i < this.cityContentLayout.children.length; i++) {
                let node = this.cityContentLayout.children[i];
                if (i == this.cityIndex && node.getComponentInChildren(cc.Label).string != '未选择') {

                    node.getChildByName('name').color = new cc.Color(204, 50, 68);
                    node.getChildByName('name').opacity = 255;
                    this.sureButton.interactable = true;
                    this.sureButton.node.getChildByName('label').color = new cc.Color(0, 0, 0);
                } else {
                    node.getChildByName('name').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').opacity = 150;
                }
            }
            this.areaIndex = 0;
            this.initAreaItem();
        } else {
            this.sureButton.interactable = false;
            this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
            for (let i = 0; i < this.cityContentLayout.children.length; i++) {
                let node = this.cityContentLayout.children[i];
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
    }

    areaScrollEvent() {
        if (!this.areaScrollView.getComponent(cc.ScrollView).isScrolling() && !this.areaScrollView.getComponent(cc.ScrollView).isAutoScrolling()) {
            //console.log('选择第一个');
            let number = (this.areaScrollView.getComponent(cc.ScrollView).getContentPosition().y - 250)
            this.areaIndex = Math.round((number > 0 ? number : 0) / 100);
            this.areaScrollView.getComponent(cc.ScrollView).setContentPosition(new cc.Vec2(0, 250 + this.areaIndex * 100));
            for (let i = 0; i < this.areaContentLayout.children.length; i++) {
                let node = this.areaContentLayout.children[i];
                if (i == this.areaIndex && node.getComponentInChildren(cc.Label).string != '未选择') {
                    this.sureButton.interactable = true;

                    this.sureButton.node.getChildByName('label').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').color = new cc.Color(204, 50, 68);
                    node.getChildByName('name').opacity = 255;
                } else {
                    node.getChildByName('name').color = new cc.Color(0, 0, 0);
                    node.getChildByName('name').opacity = 150;
                }
            }
        } else {
            this.sureButton.interactable = false;
            this.sureButton.node.getChildByName('label').color = new cc.Color(203, 203, 203);
            for (let i = 0; i < this.areaContentLayout.children.length; i++) {
                let node = this.areaContentLayout.children[i];
                node.getChildByName('name').color = new cc.Color(0, 0, 0);
                node.getChildByName('name').opacity = 150;
            }
        }
    }

    closeButtonClick(event: cc.Event, data: any) {
        this.node.removeFromParent();
        let bundle = cc.assetManager.getBundle('assetsRes');
        bundle.release("prefab/pop/cityChoose");
    }

    sureButtonClick(event: cc.Event, data: any) {
        let provinceName = this.AllArray[this.provincesIndex]['province'];
        let cityName = this.AllArray[this.provincesIndex]['cityArray'][this.cityIndex]['city'];
        let areaName = this.AllArray[this.provincesIndex]['cityArray'][this.cityIndex]['areaArray'][this.areaIndex]['area'];
        let str = provinceName + cityName + areaName;
        console.log(str);
    }
}
