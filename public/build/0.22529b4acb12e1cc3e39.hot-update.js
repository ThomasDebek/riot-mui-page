webpackHotUpdate(0,{

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';

	__webpack_require__(31);
	__webpack_require__(37);
	__webpack_require__(191);
	__webpack_require__(34);

	__webpack_require__(202);
	riot.tag('m-input', '<riotmui-desc> <div class="riotmui-desc-examples row"> <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-flex"> <material-card> <div class="material-card-title">Default Input</div> <div class="material-card-content"> <material-input style="max-width: 550px"></material-input> </div> <riotmui-code style="margin-top: 66px" code="{{this.parent.parent.example1}}"></riotmui-code> </material-card> <material-card> <div class="material-card-title">Validation by type</div> <div class="material-card-content"> <material-input type="email" style="max-width: 550px" label="Email"></material-input> </div> <riotmui-code style="margin-top: 66px" code="{{this.parent.parent.example2}}"></riotmui-code> </material-card> </div> <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-flex"> <material-card> <div class="material-card-title">Icon Input</div> <div class="material-card-content"> <material-input style="max-width: 550px" icon="true" waves-color="#2f6975" label="Icon input"> <i class="material-icons">search</i> </material-input> </div> <riotmui-code style="margin-top: 28px" code="{{this.parent.parent.example3}}"></riotmui-code> </material-card> <material-card> <div class="material-card-title">Custom validation</div> <div class="material-card-content"> <material-input type="text" valid="/^\\d+$/" style="max-width: 550px" label="Numbers only"></material-input> </div> <riotmui-code style="margin-top: 66px" code="{{this.parent.parent.example4}}"></riotmui-code> </material-card> </div> </div> <div class="riotmui-desc-description"> <p> Description ... </p> <div class="description-title">Children</div> <riotmui-option data="{{this.parent.children}}"></riotmui-option> <div class="description-title">Options</div> <riotmui-option data="{{this.parent.options}}"></riotmui-option> <div class="description-title">Quick Styling</div> <riotmui-option data="{{this.parent.styling}}"></riotmui-option> </div> </riotmui-desc>', function (opts) {
	    // Examples
	    this.example1 = '<material-input></material-input>';
	    this.example2 = '<material-input type="email" label="Email"></material-input>';
	    this.example3 = '<material-input icon="true" waves-color="#2f6975" label="Icon input">\n      <i class="material-icons">search</i>\n  </material-input>';
	    this.example4 = '<material-input valid="/^\\d+$/" label="Numbers only"></material-input>';
	    // Children
	    this.children = [{
	        title: '<i class="material-icons">search</i>',
	        type: 'tag',
	        'default': '',
	        desc: 'Can add icon to material-input if already was set icon option.'
	    }, {
	        title: '<div class="icon"><svg>...</svg></div>',
	        type: 'tag',
	        'default': '',
	        desc: 'Can add icon to material-input if already was set icon option.'
	    }];
	    // Options
	    this.options = [{
	        title: 'label',
	        type: 'string',
	        'default': '',
	        desc: 'Adds floating label to material-input.'
	    }, {
	        title: 'type',
	        type: 'string',
	        'default': '',
	        desc: 'Type of input. Also can provide standard validation. Currently supported types: email,number,tel,url'
	    }, {
	        title: 'valid',
	        type: 'Regexp | Function',
	        'default': '',
	        desc: 'It can be as a function as a regular expression. Regular expression must be a string. For example valid="/^\\d+$/". Also pay attention ' + 'on '
	    }];
	    // Styling
	    this.styling = [{
	        title: '$material-button-height',
	        type: 'px',
	        'default': '40',
	        desc: 'Setup default height of button.'
	    }];
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

})