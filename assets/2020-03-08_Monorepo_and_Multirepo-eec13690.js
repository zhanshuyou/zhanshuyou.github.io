const l=`<h1>Monorepo &#x26; Multirepo</h1>
<h2>Monorepo 优点</h2>
<ol>
<li>代码复用</li>
<li>源码调试方便，不需要进入 node_modules</li>
<li>依赖共享</li>
<li>编码规范统一</li>
<li>CI/CD 统一</li>
</ol>
<h2>Monorepo 缺点</h2>
<ol>
<li>仓库变得巨大</li>
<li>变更频繁</li>
<li>CI/CD 运行时间长</li>
</ol>
<h2>Multirepo优点</h2>
<ol>
<li>每个项目可以根据自己的情况选择自己擅长的技术和工具，相对比较灵活，可以使单个团队的效率最大化</li>
</ol>
<h2>Multirepo缺点</h2>
<ol>
<li>多个仓库之间切换，耗费时间</li>
<li>调试不方便</li>
<li>依赖在多个项目之间重复安装</li>
<li>不同项目依赖版本不同</li>
<li>不利于团队协作，代码库权限，依赖库出现 bug 不能及时修复，需要依赖开发者</li>
<li>CI/CD 重复配置</li>
</ol>
<h2>参考资料：</h2>
<ol>
<li><a href="https://zhuanlan.zhihu.com/p/65533186">精读《Monorepo 的优势》</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/31289463">REPO 风格之争：MONO VS MULTI</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/75078526">Monorepo与multirepo区别何在？为什么大公司像谷歌.微软.优步都在Monorepo?</a></li>
</ol>`;export{l as default};
