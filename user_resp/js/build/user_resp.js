
var response = '{"l":{"form_info":{"nns_id":"582d17d5885998c50bc2b42ca0a83f00","nns_tag":"Feedback","nns_title":"\u7528\u6237\u53cd\u9988","nns_rely":"user_id","nns_is_repeat":"1","nns_interval_time":"1","nns_statistice_result":"1","nns_form_data_is_check":"1","nns_views":"7","nns_create_time":"2016-11-17 10:37:09","nns_modify_time":"2016-11-17 10:42:37"},"form_item_list":[{"nns_id":"582d18522b11051a7ec39afea4f2f3e3","nns_form_id":"582d17d5885998c50bc2b42ca0a83f00","nns_name":"\u673a\u578b\u4fe1\u606f","nns_input_type":"text","nns_is_empty":"0","nns_order":"1","nns_create_time":"2016-11-17 10:39:14","nns_modify_time":"2016-11-17 10:39:14"},{"nns_id":"582d187a26c2faa69216302cd555a9fa","nns_form_id":"582d17d5885998c50bc2b42ca0a83f00","nns_name":"\u53cd\u9988\u7c7b\u578b","nns_input_type":"radio","nns_is_empty":"0","nns_select_val":[{"name":"\u7a0b\u5e8fbug","val":1},{"name":"\u529f\u80fd\u5efa\u8bae","val":2},{"name":"\u5185\u5bb9\u610f\u89c1","val":3},{"name":"\u5e7f\u544a\u95ee\u9898","val":4},{"name":"\u7f51\u7edc\u95ee\u9898","val":5},{"name":"\u5176\u4ed6","val":6}],"nns_order":"2","nns_create_time":"2016-11-17 10:39:54","nns_modify_time":"2016-11-17 15:47:05"},{"nns_id":"582d186b362dfebb705a2ccf4bdedb2a","nns_form_id":"582d17d5885998c50bc2b42ca0a83f00","nns_name":"\u53cd\u9988\u5185\u5bb9","nns_input_type":"textarea","nns_is_empty":"0","nns_order":"3","nns_create_time":"2016-11-17 10:39:39","nns_modify_time":"2016-11-17 15:46:58"},{"nns_id":"582d18de1bc852a79210b85c0e15a3fb","nns_form_id":"582d17d5885998c50bc2b42ca0a83f00","nns_name":"\u624b\u673a\u53f7\u7801","nns_input_type":"text","nns_is_empty":"0","nns_order":"4","nns_create_time":"2016-11-17 10:41:34","nns_modify_time":"2016-11-17 10:41:34"}],"form_status":{"nns_is_submit":0,"nns_cur_get_time":"2016-11-18 10:10:50"}},"result":{"state":0,"reason":"OK"}}';

/**
 * Model: 机型
 * */
function DeviceInfoModel() {
    this._form_id = "";
    this._system = "";
    this._device = "";
}

/**
 * Model: 用户选择框
 * */
function CheckBoxItemModel() {
    this._form_id = "";
    this._name = "";
    this._val = "";
    this._isSelected = false;
}

function CheckBoxItemRangeModel() {
    this._form_id = "";
    this._val = "";
    this._checkBoxModelArray = new Array();
}

/**
 * Model: 用户输入
 * */
function TextModel() {
    this._form_id = "";
    this._text = "";
}

/**
 * Model: 用户手机号
 * */
function PhoneModel() {
    this._form_id = "";
    this._text = "";
}

/**
 * Model: 所有请求
 * */
function AllModel() {
    this._deviceModel = new DeviceInfoModel();
    this._checkBoxRangeModel = new CheckBoxItemRangeModel();
    this._textModel = new TextModel();
    this._phoneModel = new PhoneModel();
}

/**
 * native
 * */
function NativeModel() {
    this._user_id = "";
    this._url = "";
    this._version = "";
}

var CusNav = React.createClass({
    displayName: "CusNav",

    render: function () {
        //var devicePixelRatio = window.devicePixelRatio;
        var screenWidth = window.screen.availWidth;
        var title = "用户反馈";
        var backImg = "../images/back_w@2x.png";
        var navStyle = {
            background: '#f0635c',
            width: '100%',
            height: '74px'
        };
        var navTitleStyle = {
            'position': 'absolute',
            color: 'white',
            'font-size': '16px',
            'width': '100%',
            'text-align': 'center',
            'top': '40px'
        };

        var navBackBtnStyle = {
            'position': 'absolute',
            'right': '15px',
            'top': '40px',
            'height': '21px',
            'width': '14'
        };

        return React.createElement(
            "div",
            { style: navStyle },
            React.createElement(
                "div",
                { style: navTitleStyle },
                title
            ),
            React.createElement("img", { src: backImg, style: navBackBtnStyle })
        );
    }
});

var DeviceInfoBox = React.createClass({
    displayName: "DeviceInfoBox",

    getInitialState: function () {
        return { inputModel: new DeviceInfoModel() };
    },
    updateWithModel: function (newModel) {
        this.setState({ inputModel: newModel });
    },
    componentDidMount: function () {
        if (this.props.inputModel) {
            this.updateWithModel(this.props.inputModel);
        }
    },
    render: function () {
        var screenWidth = window.screen.availWidth;
        var boxStyle = {
            background: '#f9f9f9',
            width: screenWidth - 2 + 'px',
            height: '22px',
            border: '1px solid #c8c8c8',
            'font-size': '9px',
            'text-align': 'center'
        };
        var info = this.state.inputModel._device + " " + this.state.inputModel._system;
        return React.createElement(
            "div",
            { style: boxStyle },
            info
        );
    }
});

var CheckBoxCellItem = React.createClass({
    displayName: "CheckBoxCellItem",

    getInitialState: function () {
        return { inputModel: new CheckBoxItemModel() };
    },
    updateWithModel: function (newModel) {
        this.setState({ inputModel: newModel });
    },
    cheboxSelectCallback: function () {},
    componentDidMount: function () {
        if (this.props.inputModel) {
            this.updateWithModel(this.props.inputModel);
        }
    },
    handleClick: function (event) {
        this.state.inputModel._isSelected = !this.state.inputModel._isSelected;
        if (this.state.inputModel._isSelected) {
            var count = allModel._checkBoxRangeModel._checkBoxModelArray.length;
            for (var index = 0; index != count; ++index) {
                var element = allModel._checkBoxRangeModel._checkBoxModelArray[index];
                if (element != this.state.inputModel) {
                    element._checkBoxRangeModel = false;
                }
            }
        } else {}
        this.updateWithModel(this.state.inputModel);
    },
    render: function () {
        var screenWidth = window.screen.availWidth;
        var itemWidth = screenWidth / 2.0 - 15 + 'px';
        var cellItemStyle = {
            width: itemWidth,
            height: '27px',
            'float': 'right'
        };
        var labelStylt = {
            'font-size': '12px',
            'text-align': 'right',
            'color': '#646464',
            'float': 'right',
            'right': '7px',
            'top': '6px'
        };
        var boxBtnStyle = {
            'width': '14px',
            'height': '14px',
            'float': 'right',
            'right': '15px',
            'top': '6px'
        };
        var clearStyleTop = {
            'width': itemWidth,
            'height': '6px'
        };
        var clearStyleRight1 = {
            'float': 'right',
            'width': '15px',
            'height': '14px'
        };
        var clearStyleRight2 = {
            'float': 'right',
            'width': '8px',
            'height': '14px'
        };
        var checkBoxImg = "";
        if (this.state.inputModel._isSelected) {
            //选中
            checkBoxImg = "../images/feed_chose_ico@2x.png";
        } else {
            checkBoxImg = "../images/feed_unchose_ico@2x.png";
        }
        return React.createElement(
            "div",
            { style: cellItemStyle, onClick: this.handleClick },
            React.createElement("div", { style: clearStyleTop }),
            React.createElement("div", { style: clearStyleRight1 }),
            React.createElement("img", { style: boxBtnStyle, src: checkBoxImg }),
            React.createElement("div", { style: clearStyleRight2 }),
            React.createElement(
                "span",
                { style: labelStylt },
                this.state.inputModel._name
            )
        );
    }
});

var CheckBoxRange = React.createClass({
    displayName: "CheckBoxRange",

    getInitialState: function () {
        return { inputModel: [] };
    },
    updateWithModel: function (newModelArray) {
        this.setState({ inputModel: newModelArray });
    },

    componentDidMount: function () {
        if (this.props.inputModel) {
            this.updateWithModel(this.props.inputModel);
        }
    },
    render: function () {
        var screenWidth = window.screen.availWidth;
        var boxRangeStyle = {};
        var clearStyleTopBottom = {
            'width': screenWidth,
            'height': '14px'
        };
        var clearStyleRight = {
            'float': 'right',
            'width': '15px',
            'height': '14px'
        };
        var boxTitleStyle = {
            'text-align': 'right',
            'font-size': '14px',
            'float': 'right',
            'color': '#646464',
            'width': screenWidth - 50
        };
        var title = "用户选项";
        return React.createElement(
            "div",
            { style: boxRangeStyle },
            React.createElement("div", { style: clearStyleTopBottom }),
            React.createElement("div", { style: clearStyleRight }),
            React.createElement(
                "div",
                { style: boxTitleStyle },
                title
            ),
            this.state.inputModel.map(function (modelElement) {
                return React.createElement(CheckBoxCellItem, { inputModel: modelElement });
            })
        );
    }
});

var ResponseContentBox = React.createClass({
    displayName: "ResponseContentBox",

    getInitialState: function () {
        return { inputModel: new TextModel() };
    },
    updateWithModel: function (newModelArray) {
        this.setState({ inputModel: newModelArray });
    },

    componentDidMount: function () {
        if (this.props.inputModel) {
            this.updateWithModel(this.props.inputModel);
        }
    },
    handleChange: function (event) {
        this.state.inputModel._text = event.target.value;
        //alert(event.target.value);
    },
    render: function () {
        //var devicePixelRatio = window.devicePixelRatio;
        var screenWidth = window.screen.availWidth;
        var boxStyle = {
            background: '#f9f9f9',
            width: screenWidth - 2 + 'px',
            height: '240px',
            border: '1px solid #c8c8c8'
        };
        var placeholder = "测试提示";
        return React.createElement("textarea", { onChange: this.handleChange, style: boxStyle, maxlength: "20", placeholder: placeholder, cols: window.screen.availWidth - 10 });
    }
});

var PhoneNumberBox = React.createClass({
    displayName: "PhoneNumberBox",

    getInitialState: function () {
        return { inputModel: new PhoneModel() };
    },
    updateWithModel: function (newModelArray) {
        this.setState({ inputModel: newModelArray });
    },

    componentDidMount: function () {
        if (this.props.inputModel) {
            this.updateWithModel(this.props.inputModel);
        }
        //this.refs.phoneInput.focus();
        //React.findDOMNode(this.refs.phoneInput).focus();
    },

    handleChange: function (event) {
        this.state.inputModel._text = event.target.value;
        //alert(event.target.value);
    },

    render: function () {
        var screenWidth = window.screen.availWidth;
        var topSpaceStyle = {
            'width': screenWidth + 'px',
            'height': '12px',
            'border-bottom': '1px solid #c8c8c8'
        };

        var tableStyle = {
            'position': 'absolute',
            'left': '15px',
            'right': '15px',
            'height': '32px',
            'width': screenWidth - 15 + 'px'
        };
        var titleStyle = {
            'height': '44px',
            'text-align': 'left',
            'left': '15px'
        };

        var boxStyle = {
            background: '#f9f9f9',
            width: '100%',
            height: '44px',
            border: '1px solid #c8c8c8'
        };

        var tdStyle = {
            'width': (screenWidth - 15) / 2.0 + 'px'

        };
        var inputBoxStyle = {
            'text-align': 'right',
            'border-width': '0px',
            'background': '#f9f9f9',
            'background-color': '#f9f9f9'
        };

        var title = "输入手机号";
        return React.createElement(
            "div",
            { style: boxStyle },
            React.createElement("div", { style: topSpaceStyle }),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    { style: tableStyle },
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            title
                        ),
                        React.createElement(
                            "td",
                            { style: tdStyle },
                            React.createElement("input", { onChange: this.handleChange, ref: "phoneInput", type: "number", pattern: "\\d*", name: "phone", style: inputBoxStyle })
                        )
                    )
                )
            )
        );
    }
});

var SubmitBtn = React.createClass({
    displayName: "SubmitBtn",

    componentDidMount: function () {},
    handleClickSubmit: function (event) {
        var checkModel = null;
        var count = allModel._checkBoxRangeModel._checkBoxModelArray.length;
        for (var index = 0; index != count; ++index) {
            var elementModel = allModel._checkBoxRangeModel._checkBoxModelArray[index];
            if (elementModel._isSelected == true) {
                checkModel = elementModel;
                break;
            }
        }
        alert("phone:" + allModel._phoneModel._text + "\ntext:" + allModel._textModel._text + "\n" + checkModel._name);
    },
    render: function () {
        var screenWidth = window.screen.availWidth;
        var submitBtnStyle = {
            'float': 'left',
            'width': screenWidth - 15 * 2 + 'px',
            'height': '32px',
            'color': 'white',
            'background': '#f0635c',
            'border-width': '0px',
            'border-radius': '10px'
        };
        var clearStyle = {
            'float': 'left',
            'width': '15px',
            'height': '32px'
        };
        var descStyle = {
            'width': '100%',
            'text-align': 'center',
            'font-size': '9px'
        };
        var btntitle = "提交";
        var desc = "这是一段描述文字";
        return React.createElement(
            "div",
            null,
            React.createElement("div", { style: { 'width': '100%', 'height': '9px' } }),
            React.createElement(
                "div",
                { style: descStyle },
                desc
            ),
            React.createElement("div", { style: { 'width': '100%', 'height': '15px' } }),
            React.createElement("div", { style: clearStyle }),
            React.createElement("input", { style: submitBtnStyle, type: "button", value: btntitle, onClick: this.handleClickSubmit }),
            React.createElement("div", { style: { 'width': '100%', 'height': '100px' } })
        );
    }
});

var allModel = new AllModel();

/**
 * Ajax请求
 * */
var CustomBody = React.createClass({
    displayName: "CustomBody",

    getInitialState: function () {
        return { "inputModel": null };
    },

    componentDidMount: function () {
        var natModel = this.props.inputModel;
        var url = natModel._url + "&nns_version=" + natModel._version + "&nns_user_id=" + natModel._user_id;

        var testResponse = JSON.parse(response);
        //allModel._deviceModel._device = "Iphone5,1";
        //allModel._deviceModel._system = "ios8.5";
        var contentDict = testResponse["l"];
        var form_info = contentDict["form_info"];
        var form_item_list = contentDict["form_item_list"];
        var deviceDict = form_item_list[0];
        allModel._deviceModel._form_id = deviceDict["nns_form_id"];
        var checkBoxDic = form_item_list[1];
        allModel._checkBoxRangeModel._form_id = checkBoxDic["nns_form_id"];
        var checkBoxArray = checkBoxDic["nns_select_val"];
        var count = checkBoxArray.length;
        for (var i = 0; i != count; ++i) {
            var element = checkBoxArray[i];
            var ckModel = new CheckBoxItemModel();
            ckModel._name = element["name"];
            ckModel._val = element["val"];
            allModel._checkBoxRangeModel._checkBoxModelArray.push(ckModel);
        }
        var textInfoDict = form_item_list[2];
        allModel._textModel._form_id = textInfoDict["nns_form_id"];
        var phoneDict = form_item_list[3];
        allModel._phoneModel._form_id = phoneDict["nns_form_id"];

        if (this.isMounted()) {
            this.setState({ "inputModel": allModel });
        }
        //$.get(url, function(result) {
        //    var r = result;
        //    alert(r);
        //    if (this.isMounted()) {
        //        this.setState({"inputModel":allModel});
        //    }
        //}.bind(this));
    },

    render: function () {
        if (this.state.inputModel == null) {
            return React.createElement("div", null);
        } else {
            return React.createElement(
                "div",
                null,
                React.createElement(CusNav, null),
                React.createElement(DeviceInfoBox, { inputModel: this.state.inputModel._deviceModel }),
                React.createElement(CheckBoxRange, { inputModel: this.state.inputModel._checkBoxRangeModel._checkBoxModelArray }),
                React.createElement(ResponseContentBox, { inputModel: this.state.inputModel._textModel }),
                React.createElement(PhoneNumberBox, { inputModel: this.state.inputModel._phoneModel }),
                React.createElement(SubmitBtn, null)
            );
        }
    }
});

var nativeModel = null;

var RunApp = function () {
    var ua = window.navigator.userAgent;

    var deviceType = "";
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        deviceType = "iphone";
        //苹果端
    } else if (/(Android)/i.test(navigator.userAgent)) {
        deviceType = "android";
        //alert(navigator.userAgent);
        //安卓端
    } else {
        deviceType = "PC";
        //pc端
    };
    var os = "";
    var osVersion = "";
    if (deviceType == "iphone") {
        os = ua;
    } else if (deviceType == "android") {
        var info = ua.split(";");
        os = info[1];
        osVersion = info[2];
    } else {}

    allModel._deviceModel._device = os;
    allModel._deviceModel._system = osVersion;
    nativeModel = new NativeModel();
    nativeModel._url = "http://120.205.13.213/nn_cms/nn_cms_view/xjcbc/n800_a.php?nns_func=get_form_data&nns_form_tag=Feedback&nns_output_type=json";
    nativeModel._user_id = "111111";
    nativeModel._version = "2.0.0.iOS_Koznak_release";
    ReactDOM.render(React.createElement(CustomBody, { inputModel: nativeModel }), document.body);
};
RunApp();