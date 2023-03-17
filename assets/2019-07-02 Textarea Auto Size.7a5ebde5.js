var e=`<h1>Textarea Auto Size</h1>
<pre><code class="language-html">&#x3C;textarea placeholder="Type, paste, cut text here...">Input Something...&#x3C;/textarea>
</code></pre>
<pre><code class="language-ts">const textareas = document.getElementsByTagName('textarea');

for (let i = 0; i &#x3C; textareas.length; i++) {
  textareas[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  textareas[i].addEventListener("input", OnInput, false);
}

const OnInput = () => {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}
</code></pre>`;export{e as default};
