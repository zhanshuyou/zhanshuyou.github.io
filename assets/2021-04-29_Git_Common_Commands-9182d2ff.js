const e=`<h1>Git 常用的命令</h1>
<p><em>整理一些工作中使用频率很高的 git 命令</em></p>
<p><strong>从 develop 分支创建 feature/test 分支并立即切换到该分支</strong></p>
<pre><code>git checkout -b feature/test develop
</code></pre>
<p><strong>拉取远程 develop 的更新到本地 develop 分支</strong></p>
<pre><code>git fetch origin develop:develop
</code></pre>
<p><strong>修改提交信息，同时也可以向上一次的提交中追加更改</strong></p>
<pre><code>git commit --amend

git commit --amend --no-edit
</code></pre>
<p><strong>查看提交记录, 包括被 squash 合并掉的记录</strong></p>
<pre><code>git reflog
</code></pre>
<p><strong>合并提交记录</strong></p>
<pre><code>// 合并前 3 个提交
git rebase -i HEAD~3
</code></pre>
<p><strong>使用 fixup 快速提交及合并</strong></p>
<pre><code>git commit --fixup \${commitId}

git rebase -i --autosquash \${commitId}
</code></pre>
<p><strong>本地分支与远程分支同步</strong></p>
<pre><code>git fetch origin feat/test:feat/test -f
</code></pre>
<p><strong>本地分支 reset 到远程的某个分支</strong></p>
<pre><code>git reset --hard origin/master
</code></pre>`;export{e as default};
