const e=`<h1>prefetch 与 preload 的区别</h1>
<pre><code class="language-html">&#x3C;link rel="prefetch" href="index.css" as="style" />
&#x3C;link rel="preload" href="index.js" as="script" />
</code></pre>
<ol>
<li>
<p><code>preload</code> 提前加载</p>
<ol>
<li>通过声明向浏览器声明一个需要提交加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗</li>
<li>加载当前路由必需资源，优先级高。</li>
<li>一般对于 Bundle Split 资源与 Code Split 资源做 preload</li>
<li>页面关闭会立即停止 preload 获取资源</li>
</ol>
</li>
<li>
<p><code>prefetch</code> 预判加载</p>
<ol>
<li>
<p>prefetch 跟 preload 不同，它的作用是告诉浏览器未来可能会使用到的某个资源</p>
</li>
<li>
<p>优先级低，在浏览器 idle 状态时加载资源</p>
</li>
<li>
<p>一般用以加载其它路由资源，如当页面出现 Link，可 prefetch 当前 Link 的路由资源</p>
</li>
<li>
<p>页面关闭，prefetch 发起的请求仍会进行不会中断</p>
</li>
</ol>
</li>
<li>
<p><code>preload</code> 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源，而 <code>prefetch</code> 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源。所以建议：对于当前页面很有必要的资源使用 <code>preload</code>，对于可能在将来的页面中使用的资源使用 <code>prefetch</code></p>
</li>
</ol>`;export{e as default};
