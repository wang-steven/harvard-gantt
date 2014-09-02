;
(function($) {

	var $sortpic = $('<span class="glyphicon glyphicon glyphicon-sort"></span>');
	var $ascpic = $('<span class="glyphicon glyphicon glyphicon-sort-by-attributes"></span>').addClass('sort-asc');
	var $descpic = $('<span class="glyphicon glyphicon glyphicon-sort-by-attributes-alt"></span>').addClass('sort-desc');
	var delimiter = ',';

	function drawHeader($grid, p) {
		var $thead = $('<thead></thead>');
		var $tr = $('<tr></tr>');
		for ( var idx in p.colNames) {
			var $th = $('<th></th>').append(p.colNames[idx]).append('&nbsp;');
			var col = p.colModel[idx];
			var index = (!!col.index) ? col.index : col.name;
			$th.append($('<div class="hide sortinfo"></div>').append(index + delimiter + p.sortorder));

			if (!!col.sortable) {
				$th.append($sortpic.clone());

				$th.click(function() {
					resetHeaderSortPic($grid);
					var $sortinfo = $(this).find('.sortinfo');
					var sortname = $sortinfo.html().split(delimiter)[0];
					var sortorder = ('DESC' == $sortinfo.html().split(delimiter)[1]) ? 'ASC' : 'DESC';
					populate($grid, p, 0, sortname, sortorder, true);
				}).hover(function() {
					$(this).css('cursor', 'pointer');
				});
			}

			if (col.hidden) {
				$th.attr('hidden', true);
			}
			if (!!col.width) {
				$th.css('width', col.width);
			}
			$tr.append($th);
		}
		$thead.append($tr);
		$grid.append($thead);
	}

	function reloadBody($grid, p, data, clearBeforeReload) {
		var clearBeforeReload = (typeof clearBeforeReload == 'undefined') ? true : clearBeforeReload;
		if (clearBeforeReload && $grid.find('tbody').length > 0) {
			$grid.find('tbody').empty();
			infinitePage = 0;
		}

		if ($grid.find('tbody').length <= 0) {
			$grid.append($("<tbody></tbody>"));
		}

		var jreader = p.jsonReader;
		var $tbody = $grid.find('tbody');
		var rows = eval('data.' + jreader.rows);
		for ( var rIdx in rows) {
			var $tr = $('<tr></tr>');
			var row = rows[rIdx];
			for ( var cIdx in p.colModel) {
				var col = p.colModel[cIdx];
				var value = eval('row.' + col.name);
				var fObj = eval(col.formatter);
				if ($.isFunction(fObj)) {
					value = fObj(value, row);
				}
				if (!!col.number) {
					value = $.number(value);
				}
				var $td = $('<td></td>');
				$td.append(value);
				if (col.hidden) {
					$td.attr('hidden', true);
				}
				if (!!col.align) {
					$td.attr('align', col.align);
				}
				$tr.append($td);
			}
			$tbody.append($tr);
		}
	}

	function drawPager($grid, p, data, $pager) {
		$pager.empty();
		var totalPages = eval('data.' + p.jsonReader.total);
		if (totalPages > 0) {
			$pager.bootstrapPaginator({
				bootstrapMajorVersion: 3,
				numberOfPages: 10,
				currentPage: eval('data.' + p.jsonReader.page) + 1,
				totalPages: totalPages,
				tooltipTitles: function(type, page, current) {
					switch (type) {
					case "first":
						return "First Page";
					case "prev":
						return "Previous page";
					case "next":
						return "Next page";
					case "last":
						return "Last Page";
					case "page":
						return "Page " + page;
					}
				},
				onPageChanged: function(event, oldPage, newPage) {
					var sortname = null;
					var sortorder = null;
					var $sorted = $grid.find('thead').find('.sort-asc,.sort-desc');
					if ($sorted.length > 0) {
						var $sortinfo = $sorted.parent().find('.sortinfo');
						sortname = $sortinfo.html().split(delimiter)[0];
						sortorder = $sortinfo.html().split(delimiter)[1];
					}
					// you should modify here to suitable pagination request in server side
					populate($grid, p, newPage - 1, sortname, sortorder);
				}
			});
		}
	}

	function populate($grid, p, page, sortname, sortorder, clearBeforeReload) {
		var clearBeforeReload = (typeof clearBeforeReload == 'undefined') ? true : clearBeforeReload;
		var data = (!!jQuery.trim(p.dataFormId)) ? form2js(jQuery("#" + p.dataFormId).attr("id"), '.', true, null, true) : {};
		if (jQuery.type(page) !== "number") {
			page = p.page;
		}
		if (!!!sortname) {
			sortname = p.sortname;
		}
		if (!!!sortorder) {
			sortorder = p.sortorder;
		}
		changeSortPicTo($grid, sortname, sortorder)
		// you should modify here to suitable pagination request in server side
		data[p.prmNames.page] = page;
		data[p.prmNames.rows] = p.rowNum;
		data[p.prmNames.sort] = sortname + delimiter + sortorder;
		// data[p.prmNames.order] = sortorder;.
		$.ajax({
			type: p.mtype,
			dataType: p.datatype,
			contentType: 'application/json; charset=utf-8',
			url: p.url,
			beforeSend: function(jqXHR, settings) {
				var fObj = eval(p.loadBeforeSend);
				if ($.isFunction(fObj)) { return fObj(jqXHR, settings, data); }
				return true;
			},
			data: ((p.mtype.toUpperCase() == 'GET') ? data : JSON.stringify(data))
		}).success(function(data, textStatus, jqXHR) {
			reloadBody($grid, p, data, clearBeforeReload);
			var $pager = $("#" + p.pager);
			if ($pager.length > 0) {
				drawPager($grid, p, data, $pager);
			}
		}).error(function(jqXHR, textStatus, errorThrown) {
			var fObj = eval(p.loadError);
			if ($.isFunction(fObj)) {
				fObj();
			}
		}).complete(function(jqXHR, textStatus) {
			var fObj = eval(p.loadComplete);
			if ($.isFunction(fObj)) {
				fObj();
			}
		});
	}

	function changeSortPicTo($grid, changeSortname, changeToSortorder) {
		$grid.find('thead').find('.sortinfo').each(function() {
			var $sortinfo = $(this);
			var sortname = $sortinfo.html().split(delimiter)[0];
			if (sortname == changeSortname) {
				var $th = $sortinfo.parent();
				$th.find('.glyphicon').remove();
				$th.append(('DESC' == changeToSortorder) ? $descpic.clone() : $ascpic.clone());
				$sortinfo.html(sortname + delimiter + changeToSortorder);
			}
		});
	}

	function resetHeaderSortPic($grid) {
		$grid.find('thead').find('.sort-asc,.sort-desc').each(function() {
			var $th = $(this).parent();
			$(this).remove();
			$th.append($sortpic.clone());
		});
	}

	function bindEvents($grid, p) {
		$grid.bind('reloadGrid', function() {
			// resetHeaderSortPic($grid);
			var sortname = p.sortname;
			var sortorder = p.sortorder;
			var $sorted = $grid.find('thead').find('.sort-asc,.sort-desc');
			if ($sorted.length > 0) {
				var $sortinfo = $sorted.parent().find('.sortinfo');
				sortname = $sortinfo.html().split(delimiter)[0];
				sortorder = $sortinfo.html().split(delimiter)[1];
			}
			populate($grid, p, 0, sortname, sortorder);
		});
	}

	function bindInfiniteScroll($grid, p) {

		var func = debounce(function() {
			var height_of_browser_viewport = $(window).height();
			var height_of_HTML_document = $(document).height();
			var current_scroll_bar_position = $(window).scrollTop();
			var scroll_bar_bottom_buffer = 10;
			// console.log("current_scroll_bar_position:" + current_scroll_bar_position + " + scroll_bar_bottom_buffer:" + scroll_bar_bottom_buffer +
			// " = " + (current_scroll_bar_position + scroll_bar_bottom_buffer));
			// console.log("height_of_HTML_document:" + height_of_HTML_document + " - height_of_browser_viewport:" + height_of_browser_viewport + " =
			// " + (height_of_HTML_document - height_of_browser_viewport));

			if (current_scroll_bar_position + scroll_bar_bottom_buffer >= height_of_HTML_document - height_of_browser_viewport) {
				var sortname = p.sortname;
				var sortorder = p.sortorder;
				var $sorted = $grid.find('thead').find('.sort-asc,.sort-desc');
				if ($sorted.length > 0) {
					var $sortinfo = $sorted.parent().find('.sortinfo');
					sortname = $sortinfo.html().split(delimiter)[0];
					sortorder = $sortinfo.html().split(delimiter)[1];
				}
				populate($grid, p, ++infinitePage, sortname, sortorder, false);
			}
		}, 100);

		$(window).scroll(func);
	}

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}
	;

	var p;
	var $grid;
	var infinitePage;

	$.fn.slGrid = function(options) {

		p = $.extend({
			url: "",
			dataFormId: "",
			page: 0,
			rowNum: 10,
			colModel: [],
			colNames: [],
			datatype: "json",
			mtype: "GET",
			jsonReader: {
				rows: "data",
				page: "pageAt",
				total: "totalPages",
				records: "totalElements",
				cell: "cell",
				id: "id"
			},
			sortorder: "ASC",
			sortname: 'id',
			loadBeforeSend: null,
			loadComplete: null,
			loadError: null,
			prmNames: {
				page: "page",
				rows: "size",
				sort: "sort",
				order: "sort.dir",
				totalrows: "totalrows"
			},
			pager: "",
			scroll: ""
		}, options);

		$grid = $(this).empty();

		return this.each(function() {
			if (p.colModel.length != p.colNames.length) {
				alert('colModel數目跟colNames數目不合');
				return;
			}
			drawHeader($grid, p);
			if (p.datatype != 'local') {
				populate($grid, p);
			}
			bindEvents($grid, p);

			if (!!$.trim(p.scroll)) {
				infinitePage = p.page;
				bindInfiniteScroll($grid, p);
			}
		});
	};

	$.fn.extend({
		setGridParam: function(newParams) {
			return this.each(function() {
				if ($grid && typeof newParams === 'object') {
					$.extend(true, p, newParams);
				}
			});
		}
	});

})(jQuery);
