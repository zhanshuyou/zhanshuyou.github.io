var n=`<h1>React \u5408\u6210\u4E8B\u4EF6\u548C\u539F\u751F\u4E8B\u4EF6</h1>
<h3>\u4EC0\u4E48\u662F\u5408\u6210\u4E8B\u4EF6</h3>
<p>React \u4E2D\u5E76\u4E0D\u662F\u5C06\u4E8B\u4EF6\u76F4\u63A5\u7ED1\u5B9A\u5230 DOM \u4E0A\u9762\uFF0C\u800C\u662F\u5728 document \u521D\u76D1\u542C\u6240\u6709\u652F\u6301\u7684\u4E8B\u4EF6\uFF0C\u5F53\u4E8B\u4EF6\u53D1\u751F\u5E76\u5192\u6CE1\u81F3 document \u5904\u65F6\uFF0CReact \u5C06\u4E8B\u4EF6\u5185\u5BB9\u5C01\u88C5\u4EA4\u7ED9\u4E2D\u95F4\u5C42 SyntheticEvent\uFF08\u8D1F\u8D23\u6240\u6709\u4E8B\u4EF6\u5408\u6210\uFF09\u4F7F\u7528\u7EDF\u4E00\u7684\u5206\u53D1\u51FD\u6570 dispatchEvent \u5C06\u6307\u5B9A\u51FD\u6570\u6267\u884C</p>
<h3>\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5408\u6210\u4E8B\u4EF6</h3>
<p>\u5982\u679C DOM \u4E0A\u7ED1\u5B9A\u4E86\u8FC7\u591A\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u6574\u4E2A\u9875\u9762\u54CD\u5E94\u4EE5\u53CA\u5185\u5B58\u5360\u7528\u53EF\u80FD\u90FD\u4F1A\u53D7\u5230\u5F71\u54CD\u3002React \u4E3A\u4E86\u907F\u514D\u8FD9\u7C7B DOM \u4E8B\u4EF6\u6EE5\u7528\uFF0C\u540C\u65F6\u5C4F\u853D\u5E95\u5C42\u4E0D\u540C\u6D4F\u89C8\u5668\u4E4B\u95F4\u7684\u4E8B\u4EF6\u7CFB\u7EDF\u5DEE\u5F02\uFF0C\u5B9E\u73B0\u4E86\u4E00\u4E2A\u4E2D\u95F4\u5C42\u2014\u2014SyntheticEvent\u3002</p>
<h3>\u5408\u6210\u4E8B\u4EF6\u4E0E\u539F\u751F\u4E8B\u4EF6\u7684\u533A\u522B</h3>
<ul>
<li>\u6267\u884C\u987A\u5E8F\uFF1A\u539F\u751F\u4E8B\u4EF6\u5FEB\u4E8E\u5408\u6210\u4E8B\u4EF6</li>
<li>\u7531\u4E8E\u539F\u751F\u4E8B\u4EF6\u9700\u8981\u7ED1\u5B9A\u5728\u771F\u5B9E DOM \u4E0A\uFF0C\u6240\u4EE5\u4E00\u822C\u662F\u5728 componentDidMount \u9636\u6BB5/ref \u7684\u51FD\u6570\u6267\u884C\u9636\u6BB5\u8FDB\u884C\u7ED1\u5B9A\u64CD\u4F5C\uFF0C\u5728 componentWillUnmount \u9636\u6BB5\u8FDB\u884C\u89E3\u7ED1\u64CD\u4F5C\u4EE5\u907F\u514D\u5185\u5B58\u6CC4\u6F0F</li>
<li>\u5982\u679C\u539F\u751F\u4E8B\u4EF6\u88AB\u963B\u6B62\u5192\u6CE1\u4E86\uFF0C\u5408\u6210\u4E8B\u4EF6\u5219\u4E0D\u4F1A\u6267\u884C\u4E86</li>
<li>React \u7ED9\u5408\u6210\u4E8B\u4EF6\u5C01\u88C5\u7684 stopPropagation \u51FD\u6570\u5728\u8C03\u7528\u65F6\u7ED9\u81EA\u5DF1\u52A0\u4E86\u4E2A isPropagationStopped \u7684\u6807\u8BB0\u4F4D\u6765\u786E\u5B9A\u540E\u7EED\u76D1\u542C\u5668\u662F\u5426\u6267\u884C\u3002</li>
</ul>
<h3>\u6355\u83B7\u9636\u6BB5\u7684\u5408\u6210\u4E8B\u4EF6</h3>
<ul>
<li>React \u652F\u6301\u5C06\u76D1\u542C\u5668\u6CE8\u518C\u5728\u6355\u83B7\u9636\u6BB5\uFF08onClickCapture\uFF09</li>
<li>\u5408\u6210\u4E8B\u4EF6\u7684\u6355\u83B7\u9636\u6BB5\u54CD\u5E94\u4E5F\u665A\u4E8E\u539F\u751F\u4E8B\u4EF6\u7684\u5192\u6CE1\u9636\u6BB5\u54CD\u5E94</li>
<li>\u5408\u6210\u4E8B\u4EF6\u7684\u4EE3\u7406\u5E76\u4E0D\u662F\u5728 document \u4E0A\u540C\u65F6\u6CE8\u518C\u6355\u83B7/\u5192\u6CE1\u9636\u6BB5\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\uFF0C\u4E8B\u5B9E\u4E0A\u53EA\u6709\u5192\u6CE1\u9636\u6BB5\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u6BCF\u4E00\u6B21 DOM \u4E8B\u4EF6\u7684\u89E6\u53D1\uFF0CReact \u4F1A\u5728 event._dispatchListeners \u4E0A\u6CE8\u5165\u6240\u6709\u9700\u8981\u6267\u884C\u7684\u51FD\u6570\uFF0C\u7136\u540E\u4F9D\u6B21\u5FAA\u73AF\u6267\u884C</li>
</ul>
<h3>\u6269\u5C55</h3>
<ul>
<li><a href="http://zhenhua-lee.github.io/react/react-event.html">React \u6E90\u7801\u89E3\u8BFB\u7CFB\u5217 \u2013 \u4E8B\u4EF6\u673A\u5236</a></li>
<li><a href="http://blog.xieliqun.com/2016/08/12/event-delegate/">JS \u4E2D\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u3001\u4E8B\u4EF6\u76D1\u542C\u3001\u4E8B\u4EF6\u59D4\u6258</a></li>
</ul>`;export{n as default};
