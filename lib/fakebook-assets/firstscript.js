
(function(href) { function split2(s, delim) { var i = s.indexOf(delim); return i == -1 ? [s, ''] : [s.substring(0, i), s.substring(i + 1)]; } function q_explode(q) { var arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=(.*)/; if (!q) { return {}; } var ii, result = {}; q = q.split('&'); for (ii = 0, l = q.length; ii < l; ii++) { var match = q[ii].match(arrayQueryExpression); if (!match) { var term = q[ii].split('='); result[decodeURIComponent(term[0])] = decodeURIComponent(term[1] || ''); } else { var indices = match[2].split(/\]\[|\[|\]/).slice(0, -1); var name = match[1]; var value = decodeURIComponent(match[3] || ''); indices[0] = name; var resultNode = result; for (var i = 0; i < indices.length-1; i++) { if (indices[i]) { if (resultNode[indices[i]] === undefined) { if (indices[i+1] && !indices[i+1].match(/\d+$/)) { resultNode[indices[i]] = {}; } else { resultNode[indices[i]] = []; } } resultNode = resultNode[indices[i]]; } else { if (indices[i+1] && !indices[i+1].match(/\d+$/)) { resultNode.push({}); } else { resultNode.push([]); } resultNode = resultNode[resultNode.length-1]; } } if (resultNode instanceof Array && indices[indices.length-1] == '') { resultNode.push(value); } else { resultNode[indices[indices.length-1]] = value; } } } return result; } function q_implode(obj, name ) { name = name || ''; var r = []; if (obj instanceof Array) { for (var ii = 0; ii < obj.length; ++ii) { try { if (obj[ii] !== undefined) { r.push(q_implode(obj[ii], name ? (name + '[' + ii + ']') : ii)); } } catch (ignored) { } } } else if (typeof(obj) == 'object') { for (var k in obj) { try { r.push(q_implode(obj[k], name ? (name + '[' + k + ']') : k)); } catch (ignored) { } } } else if (name && name.length) { r.push(q_encode(name) + '=' + q_encode(obj)); } else { r.push(q_encode(obj)); } return r.join('&'); } function q_encode(raw) { var parts = String(raw).split(/([\[\]])/); for (var i = 0, l = parts.length; i < l; i += 2) { parts[i] = window.encodeURIComponent(parts[i]); } return parts.join(''); } var href_parts = split2(href, '#'), frag = href_parts[1]; if (frag) { if (frag.charAt(0) == '/') { var new_uri = frag; } else if (frag.indexOf('=') != -1) { var u = split2(href_parts[0], '?'), path = u[0], query = q_explode(u[1]), frag_parts = split2(frag, '#'), frag_query = q_explode(frag_parts[0]), frag_frag = frag_parts[1]; for (var k in frag_query) { query[k] = frag_query[k]; } var query_s = q_implode(query), new_uri = path + (query_s ? ('?' + query_s) : '') + (frag_frag ? ('#' + frag_frag) : ''); } else { return; } if (new_uri != href_parts[0]) { window.location = new_uri; } } })(window.location.href);Env={method:"GET",dev:0,start:(new Date()).getTime(),ps_limit:5,ps_ratio:4,svn_rev:110506,pkgv:70,static_base:"http:\/\/static.ak.fbcdn.net\/"}; window.onloadRegister = window.onloadRegister || function(h) { window.onloadhooks.push(h); }; window.onloadhooks = window.onloadhooks || []; window.onafterloadRegister = window.onafterloadRegister || function(h) { window.onafterloadhooks.push(h); }; window.onafterloadhooks = window.onafterloadhooks || []; window.wait_for_load = window.wait_for_load || function (element, e, f) { f = bind(element, f, e); if (window.loading_begun) { return f(); } switch ((e || event).type) { case 'load': onloadRegister(f); return; case 'click': if (element.original_cursor === undefined) { element.original_cursor = element.style.cursor; } if (document.body.original_cursor === undefined) { document.body.original_cursor = document.body.style.cursor; } element.style.cursor = document.body.style.cursor = 'progress'; onafterloadRegister(function() { element.style.cursor = element.original_cursor; document.body.style.cursor = document.body.original_cursor; element.original_cursor = document.body.original_cursor = undefined; if (element.tagName.toLowerCase() == 'a') { var original_event = window.event; window.event = e; var ret_value = element.onclick.call(element, e); window.event = original_event; if (ret_value !== false && element.href) { window.location.href = element.href; } } else if (element.click) { element.click(); } }); break; } return false; }; function bind(obj, method ) { var args = []; for (var ii = 2; ii < arguments.length; ii++) { args.push(arguments[ii]); } return function() { var _obj = obj || (this == window ? false : this); var _args = args.slice(); for (var jj = 0; jj < arguments.length; jj++) { _args.push(arguments[jj]); } if (typeof(method) == "string") { if (_obj[method]) { return _obj[method].apply(_obj, _args); } } else { return method.apply(_obj, _args); } } };