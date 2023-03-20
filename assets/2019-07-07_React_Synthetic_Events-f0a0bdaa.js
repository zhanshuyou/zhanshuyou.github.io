const n=`<h1>React 合成事件和原生事件</h1>
<h3>什么是合成事件</h3>
<p>React 中并不是将事件直接绑定到 DOM 上面，而是在 document 初监听所有支持的事件，当事件发生并冒泡至 document 处时，React 将事件内容封装交给中间层 SyntheticEvent（负责所有事件合成）使用统一的分发函数 dispatchEvent 将指定函数执行</p>
<h3>为什么使用合成事件</h3>
<p>如果 DOM 上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React 为了避免这类 DOM 事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。</p>
<h3>合成事件与原生事件的区别</h3>
<ul>
<li>执行顺序：原生事件快于合成事件</li>
<li>由于原生事件需要绑定在真实 DOM 上，所以一般是在 componentDidMount 阶段/ref 的函数执行阶段进行绑定操作，在 componentWillUnmount 阶段进行解绑操作以避免内存泄漏</li>
<li>如果原生事件被阻止冒泡了，合成事件则不会执行了</li>
<li>React 给合成事件封装的 stopPropagation 函数在调用时给自己加了个 isPropagationStopped 的标记位来确定后续监听器是否执行。</li>
</ul>
<h3>捕获阶段的合成事件</h3>
<ul>
<li>React 支持将监听器注册在捕获阶段（onClickCapture）</li>
<li>合成事件的捕获阶段响应也晚于原生事件的冒泡阶段响应</li>
<li>合成事件的代理并不是在 document 上同时注册捕获/冒泡阶段的事件监听器的，事实上只有冒泡阶段的事件监听器，每一次 DOM 事件的触发，React 会在 event._dispatchListeners 上注入所有需要执行的函数，然后依次循环执行</li>
</ul>
<h3>扩展</h3>
<ul>
<li><a href="http://zhenhua-lee.github.io/react/react-event.html">React 源码解读系列 – 事件机制</a></li>
<li><a href="http://blog.xieliqun.com/2016/08/12/event-delegate/">JS 中的事件绑定、事件监听、事件委托</a></li>
</ul>`;export{n as default};
