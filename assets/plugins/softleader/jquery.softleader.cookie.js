(function($) {
	var COOKIE_NAME = "softleader-harvard-mes-signin";

	$.fn.cookieMe = function(cookieName) {
		if (!!!cookieName) cookieName = COOKIE_NAME;
		var $root = $(this);
		if (!!!$root.attr("id")) {
			alert('cookie DOM must declare id');
		} else {
			var value = JSON.stringify(form2js($root.attr("id"), '.', true, null, true));
			$.cookie(cookieName, value, {
				json: true
			});
		}
	};

	$.fn.loadMyCookie = function(cookieName) {
		if (!!!cookieName) cookieName = COOKIE_NAME;
		var $root = $(this);
		if (!!!$root.attr("id")) {
			alert('cookie DOM must declare id');
		} else {
			try {
				var cookie = $.cookie(cookieName);
				if (!$.isEmptyObject(cookie)) {
					JSON.parse(cookie, function(key, value) {
						if (!!key) {
							var $el = $root.find('[name="' + key + '"]');
							if (!!$el && $el.length > 0) {
								if ($el.attr('type') == 'checkbox') {
									$el.attr('checked', value == 'on' ? true : false);
								} else {
									$el.val(value);
								}
							}
						}
					});
				}
			} catch (e) {
				$.cookie(cookieName, null);
			}
		}
	}

	$.fn.removeMyCookie = function(cookieName) {
		if (!!!cookieName) cookieName = COOKIE_NAME;
		$.cookie(cookieName, null);
	}
})(jQuery);