var e=`<h1>Git \u5E38\u7528\u7684\u547D\u4EE4</h1>
<p><em>\u6574\u7406\u4E00\u4E9B\u5DE5\u4F5C\u4E2D\u4F7F\u7528\u9891\u7387\u5F88\u9AD8\u7684 git \u547D\u4EE4</em></p>
<p><strong>\u4ECE develop \u5206\u652F\u521B\u5EFA feature/test \u5206\u652F\u5E76\u7ACB\u5373\u5207\u6362\u5230\u8BE5\u5206\u652F</strong></p>
<pre><code>git checkout -b feature/test develop
</code></pre>
<p><strong>\u62C9\u53D6\u8FDC\u7A0B develop \u7684\u66F4\u65B0\u5230\u672C\u5730 develop \u5206\u652F</strong></p>
<pre><code>git fetch origin develop:develop
</code></pre>
<p><strong>\u4FEE\u6539\u63D0\u4EA4\u4FE1\u606F\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u5411\u4E0A\u4E00\u6B21\u7684\u63D0\u4EA4\u4E2D\u8FFD\u52A0\u66F4\u6539</strong></p>
<pre><code>git commit --amend

git commit --amend --no-edit
</code></pre>
<p><strong>\u67E5\u770B\u63D0\u4EA4\u8BB0\u5F55, \u5305\u62EC\u88AB squash \u5408\u5E76\u6389\u7684\u8BB0\u5F55</strong></p>
<pre><code>git reflog
</code></pre>
<p><strong>\u5408\u5E76\u63D0\u4EA4\u8BB0\u5F55</strong></p>
<pre><code>// \u5408\u5E76\u524D 3 \u4E2A\u63D0\u4EA4
git rebase -i HEAD~3
</code></pre>
<p><strong>\u4F7F\u7528 fixup \u5FEB\u901F\u63D0\u4EA4\u53CA\u5408\u5E76</strong></p>
<pre><code>git commit --fixup \${commitId}

git rebase -i --autosquash \${commitId}
</code></pre>
<p><strong>\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u540C\u6B65</strong></p>
<pre><code>git fetch origin feat/test:feat/test -f
</code></pre>
<p><strong>\u672C\u5730\u5206\u652F reset \u5230\u8FDC\u7A0B\u7684\u67D0\u4E2A\u5206\u652F</strong></p>
<pre><code>git reset --hard origin/master
</code></pre>`;export{e as default};
