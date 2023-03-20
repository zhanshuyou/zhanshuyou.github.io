const n=`<h1>前端动画为什么推荐使用 CSS 替代 JS 方案？</h1>
<h2>一. CSS 动画的优点</h2>
<ol>
<li>不占用 JS 主线程</li>
<li>可以开启硬件加速（通过 GPU 来提高动画性能）</li>
<li>浏览器可对动画做优化（元素不可见时不动画减少对FPS影响）</li>
</ol>
<h2>二. CSS 动画的缺点</h2>
<ol>
<li>难以精确的控制动画的执行</li>
</ol>
<h2>三. JS 动画优点</h2>
<ol>
<li>JS 动画控制能力很强, 可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的</li>
<li>动画效果比css3动画丰富,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有JavaScript动画才能完成</li>
<li>CSS3有兼容性问题，而JS大多时候没有兼容性问题</li>
</ol>
<h2>四. JS 动画缺点</h2>
<ol>
<li>占用主线程，影响其他的计算</li>
<li>CSS 3D动画在 JS 中无法实现</li>
<li>代码实现复杂</li>
</ol>
<h2>五. CSS 开启硬件加速</h2>
<p><code>transform: translateZ(0)</code></p>
<p><code>transform: translate3d(0, 0, 0)</code></p>
<h2>六. CSS 硬件加速原理</h2>
<p>transform 和绝对定位都会产生新的图层，所以都不存在重排，图层在 GPU 中 transform 又不会引起重绘，这就是硬件加速的原理。另外，transform3D 和 2D 的区别在于 3D 渲染前便会产生新的图层，而2D是在运行时产生图层，运行结束时删除图层</p>
<h2>七. will-change</h2>
<p>一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏</p>
<ul>
<li>不要将 will-change 应用到太多元素上：浏览器已经尽力尝试去优化一切可以优化的东西了。有一些更强力的优化，如果与 will-change 结合在一起的话，有可能会消耗很多机器资源，如果过度使用的话，可能导致页面响应缓慢或者消耗非常多的资源。</li>
<li>有节制地使用：通常，当元素恢复到初始状态时，浏览器会丢弃掉之前做的优化工作。但是如果直接在样式表中显式声明了 will-change 属性，则表示目标元素可能会经常变化，浏览器会将优化工作保存得比之前更久。所以最佳实践是当元素变化之前和之后通过脚本来切换 will-change 的值。</li>
<li>不要过早应用 will-change 优化：如果你的页面在性能方面没什么问题，则不要添加 will-change 属性来榨取一丁点的速度。 will-change 的设计初衷是作为最后的优化手段，用来尝试解决现有的性能问题。它不应该被用来预防性能问题。过度使用 will-change 会导致大量的内存占用，并会导致更复杂的渲染过程，因为浏览器会试图准备可能存在的变化过程。这会导致更严重的性能问题。</li>
<li>给它足够的工作时间：这个属性是用来让页面开发者告知浏览器哪些属性可能会变化的。然后浏览器可以选择在变化发生前提前去做一些优化工作。所以给浏览器一点时间去真正做这些优化工作是非常重要的。使用时需要尝试去找到一些方法提前一定时间获知元素可能发生的变化，然后为它加上 will-change 属性。</li>
</ul>
<pre><code>will-change: auto
will-change: scroll-position
will-change: contents
will-change: transform        // Example of &#x3C;custom-ident>
will-change: opacity          // Example of &#x3C;custom-ident>
will-change: left, top        // Example of two &#x3C;animateable-feature>

will-change: unset
will-change: initial
will-change: inherit
</code></pre>
<h2>扩展阅读：</h2>
<ol>
<li><a href="https://aotu.io/notes/2017/04/11/GPU/index.html">GPU加速是什么</a></li>
<li><a href="https://yq.aliyun.com/articles/606307">用CSS开启硬件加速来提高网站性能</a></li>
</ol>`;export{n as default};
