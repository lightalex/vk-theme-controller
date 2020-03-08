const vkThemeController = {
	iframe: null,
	init_callback: null,
	handler: function (e) {
		if (e.data) {
			if (e.data.type === 'get_extension_theme' || e.data.type === 'init_extension_theme') {
				vkThemeController.iframe = {
					source: e.source,
					origin: e.origin
				};
			}
			if (e.data.type === 'get_extension_theme') {
				vkThemeController.send('extension_theme');
			} else if (e.data.type === 'init_extension_theme' && vkThemeController.init_callback) {
				vkThemeController.init_callback();
			}
		}
	},
	init: function (callback) {
		this.init_callback = callback;
	},
	subscribe: function () {
		window.addEventListener('message', this.handler);
	},
	unsubscribe: function () {
		window.removeEventListener('message', this.handler);
	},
	send: function (type) {
		this.iframe.source.postMessage({
			type: type,
			theme: window.vkThemeControllerMode === 'dark' ? 'dark' : 'light'
		}, this.iframe.origin);
	},
	set: function (mode) {
		if (mode !== 'dark' && mode !== 'light') {
			return false;
		}

		window.vkThemeControllerMode = mode;
		if (this.iframe) {
			this.send('extension_theme');
		}

		return true;
	}
};

export default vkThemeController;
