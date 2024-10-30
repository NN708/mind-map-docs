import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.B358x4hV.js";const m=JSON.parse('{"title":"Node instance","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/node.md","filePath":"en/api/node.md"}'),i={name:"en/api/node.md"},n=o(`<h1 id="node-instance" tabindex="-1">Node instance <a class="header-anchor" href="#node-instance" aria-label="Permalink to &quot;Node instance&quot;">​</a></h1><p>Each node will instantiate a <code>node</code> instance</p><h2 id="property" tabindex="-1">Property <a class="header-anchor" href="#property" aria-label="Permalink to &quot;Property&quot;">​</a></h2><h3 id="nodedata" tabindex="-1">nodeData <a class="header-anchor" href="#nodedata" aria-label="Permalink to &quot;nodeData&quot;">​</a></h3><p>The real data corresponding to this node</p><h3 id="uid" tabindex="-1">uid <a class="header-anchor" href="#uid" aria-label="Permalink to &quot;uid&quot;">​</a></h3><p>The unique identifier of this node</p><h3 id="isroot" tabindex="-1">isRoot <a class="header-anchor" href="#isroot" aria-label="Permalink to &quot;isRoot&quot;">​</a></h3><p>Whether it is the root node</p><h3 id="layerindex" tabindex="-1">layerIndex <a class="header-anchor" href="#layerindex" aria-label="Permalink to &quot;layerIndex&quot;">​</a></h3><p>Node level</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Width of the node</p><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>Height of the node</p><h3 id="left" tabindex="-1">left <a class="header-anchor" href="#left" aria-label="Permalink to &quot;left&quot;">​</a></h3><p><code>left</code> position of the node</p><h3 id="top" tabindex="-1">top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;top&quot;">​</a></h3><p><code>top</code> position of the node</p><h3 id="parent" tabindex="-1">parent <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;parent&quot;">​</a></h3><p>Parent node of the node</p><h3 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h3><p>List of child nodes of the node</p><h3 id="group" tabindex="-1">group <a class="header-anchor" href="#group" aria-label="Permalink to &quot;group&quot;">​</a></h3><p>Node is the content container, <code>svg</code> object</p><h3 id="isdrag" tabindex="-1">isDrag <a class="header-anchor" href="#isdrag" aria-label="Permalink to &quot;isDrag&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Whether the node is currently being dragged</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h2 id="getsvgobjects" tabindex="-1">getSvgObjects() <a class="header-anchor" href="#getsvgobjects" aria-label="Permalink to &quot;getSvgObjects()&quot;">​</a></h2><blockquote><p>v0.12.1+</p></blockquote><p>Return value:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SVG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    G</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Rect</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Get some objects from <code>@svgdotjs/svg.js</code> library.</p><h3 id="active" tabindex="-1">active() <a class="header-anchor" href="#active" aria-label="Permalink to &quot;active()&quot;">​</a></h3><p>Manually activating this node will cause other activated nodes to lose their activation.</p><h3 id="checkisinclient-padding-0" tabindex="-1">checkIsInClient(padding = 0) <a class="header-anchor" href="#checkisinclient-padding-0" aria-label="Permalink to &quot;checkIsInClient(padding = 0)&quot;">​</a></h3><blockquote><p>v0.10.4+</p></blockquote><ul><li><code>padding</code>: Number, The size of the area extending around the canvas</li></ul><p>Determine whether the node is within the visible area of the canvas.</p><h3 id="deactivate" tabindex="-1">deactivate() <a class="header-anchor" href="#deactivate" aria-label="Permalink to &quot;deactivate()&quot;">​</a></h3><blockquote><p>0.9.11+</p></blockquote><p>Deactivate the node.</p><h3 id="getancestornodes" tabindex="-1">getAncestorNodes() <a class="header-anchor" href="#getancestornodes" aria-label="Permalink to &quot;getAncestorNodes()&quot;">​</a></h3><blockquote><p>v0.9.9+</p></blockquote><p>Obtain a list of ancestor node instances.</p><h3 id="highlight" tabindex="-1">highlight() <a class="header-anchor" href="#highlight" aria-label="Permalink to &quot;highlight()&quot;">​</a></h3><blockquote><p>v0.9.8+</p></blockquote><p>Highlight node.</p><h3 id="closehighlight" tabindex="-1">closeHighlight() <a class="header-anchor" href="#closehighlight" aria-label="Permalink to &quot;closeHighlight()&quot;">​</a></h3><blockquote><p>v0.9.8+</p></blockquote><p>Unhighlight node.</p><h3 id="getpuredata-removeactivestate-true-removeid-false" tabindex="-1">getPureData(removeActiveState = true, removeId = false) <a class="header-anchor" href="#getpuredata-removeactivestate-true-removeid-false" aria-label="Permalink to &quot;getPureData(removeActiveState = true, removeId = false)&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><ul><li><p><code>removeActiveState</code>：Is remove the activation status of the node</p></li><li><p><code>removeId</code>：Is remove the uid of the node</p></li></ul><p>Serialize a node to obtain its pure data, excluding references to node instances.</p><h3 id="setgeneralizationopacity-val" tabindex="-1">setGeneralizationOpacity(val) <a class="header-anchor" href="#setgeneralizationopacity-val" aria-label="Permalink to &quot;setGeneralizationOpacity(val)&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><ul><li><code>val</code>：Number, 0-1，Opacity</li></ul><p>Set the transparency of summary nodes and curves.</p><h3 id="formatgetgeneralization" tabindex="-1">formatGetGeneralization() <a class="header-anchor" href="#formatgetgeneralization" aria-label="Permalink to &quot;formatGetGeneralization()&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><p>Obtain node summary data.</p><h3 id="getindexinbrothers" tabindex="-1">getIndexInBrothers() <a class="header-anchor" href="#getindexinbrothers" aria-label="Permalink to &quot;getIndexInBrothers()&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><p>Gets the index of the node in the sibling node list.</p><h3 id="getrectinsvg" tabindex="-1">getRectInSvg() <a class="header-anchor" href="#getrectinsvg" aria-label="Permalink to &quot;getRectInSvg()&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><p>Obtain the size and position information of the node. The width and height are the actual width and height after applying the scaling effect, and the position information is relative to the canvas.</p><h3 id="getrect" tabindex="-1">getRect() <a class="header-anchor" href="#getrect" aria-label="Permalink to &quot;getRect()&quot;">​</a></h3><blockquote><p>v0.8.1+</p></blockquote><p>Obtain the size and position information of the node. The width and height are the actual width and height after applying the scaling effect, and the position is relative to the upper left corner of the browser window.</p><h3 id="ancestorhasgeneralization" tabindex="-1">ancestorHasGeneralization() <a class="header-anchor" href="#ancestorhasgeneralization" aria-label="Permalink to &quot;ancestorHasGeneralization()&quot;">​</a></h3><blockquote><p>v0.8.1+</p></blockquote><p>Check if there are ancestor nodes with a summary.</p><h3 id="getnotecontentposition" tabindex="-1">getNoteContentPosition() <a class="header-anchor" href="#getnotecontentposition" aria-label="Permalink to &quot;getNoteContentPosition()&quot;">​</a></h3><blockquote><p>v0.8.1+</p></blockquote><p>Obtain the display position of node comments. When a node has comments and is displaying a state, dragging or zooming will cause the comment floating layer to detach from the node. This method can be used to obtain a new position and update the comment floating layer.</p><h3 id="updatenodebyactive-active" tabindex="-1">updateNodeByActive(active) <a class="header-anchor" href="#updatenodebyactive-active" aria-label="Permalink to &quot;updateNodeByActive(active)&quot;">​</a></h3><blockquote><p>v0.8.0+</p></blockquote><ul><li><code>active</code>：Boolean, active status.</li></ul><p>Update nodes based on whether they are activated or not. The main task is to update the display and hiding of the expand and collapse buttons for nodes.</p><h3 id="setopacity-val" tabindex="-1">setOpacity(val) <a class="header-anchor" href="#setopacity-val" aria-label="Permalink to &quot;setOpacity(val)&quot;">​</a></h3><blockquote><p>v0.7.2+</p></blockquote><ul><li><code>val</code>: Opacity value，0-1</li></ul><p>Set node transparency, including connecting lines and child nodes.</p><h3 id="hidechildren" tabindex="-1">hideChildren() <a class="header-anchor" href="#hidechildren" aria-label="Permalink to &quot;hideChildren()&quot;">​</a></h3><blockquote><p>v0.7.2+</p></blockquote><p>Hide subordinate nodes.</p><h3 id="showchildren" tabindex="-1">showChildren() <a class="header-anchor" href="#showchildren" aria-label="Permalink to &quot;showChildren()&quot;">​</a></h3><blockquote><p>v0.7.2+</p></blockquote><p>Display subordinate nodes.</p><h3 id="hascustomstyle" tabindex="-1">hasCustomStyle() <a class="header-anchor" href="#hascustomstyle" aria-label="Permalink to &quot;hasCustomStyle()&quot;">​</a></h3><blockquote><p>v0.6.2+</p></blockquote><p>Gets whether a custom style has been set.</p><h3 id="getsize" tabindex="-1">getSize() <a class="header-anchor" href="#getsize" aria-label="Permalink to &quot;getSize()&quot;">​</a></h3><p>Update the width and height of the node by recreating the node content, and return a Boolean value indicating whether the width and height have changed</p><h3 id="render" tabindex="-1">render() <a class="header-anchor" href="#render" aria-label="Permalink to &quot;render()&quot;">​</a></h3><p>Recursively render this node and all its child nodes</p><h3 id="updatenodeshape" tabindex="-1">updateNodeShape() <a class="header-anchor" href="#updatenodeshape" aria-label="Permalink to &quot;updateNodeShape()&quot;">​</a></h3><blockquote><p>v0.5.0+</p></blockquote><p>Update node shape nodes. For example, when the node status changes, call this method to display or deactivate the style.</p><h3 id="remove" tabindex="-1">remove() <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove()&quot;">​</a></h3><p>Recursive deletion, which is only deleted from the canvas. The node container is still present, and can be reinserted back into the canvas in the future</p><h3 id="destroy" tabindex="-1">destroy() <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy()&quot;">​</a></h3><blockquote><p>v0.5.0+</p></blockquote><p>Destroying a node will not only delete it from the canvas, but also directly empty the original node, which cannot be inserted back into the canvas in the future</p><h3 id="renderline" tabindex="-1">renderLine() <a class="header-anchor" href="#renderline" aria-label="Permalink to &quot;renderLine()&quot;">​</a></h3><p>Re-render the line from this node to its child nodes</p><h3 id="removeline" tabindex="-1">removeLine() <a class="header-anchor" href="#removeline" aria-label="Permalink to &quot;removeLine()&quot;">​</a></h3><p>Remove the line from this node to its child nodes</p><h3 id="renderexpandbtn" tabindex="-1">renderExpandBtn() <a class="header-anchor" href="#renderexpandbtn" aria-label="Permalink to &quot;renderExpandBtn()&quot;">​</a></h3><p>Render the content of the expand/collapse button</p><h3 id="removeexpandbtn" tabindex="-1">removeExpandBtn() <a class="header-anchor" href="#removeexpandbtn" aria-label="Permalink to &quot;removeExpandBtn()&quot;">​</a></h3><p>Remove the expand/collapse button</p><h3 id="getstyle-prop-root-isactive" tabindex="-1">getStyle(prop, root, isActive) <a class="header-anchor" href="#getstyle-prop-root-isactive" aria-label="Permalink to &quot;getStyle(prop, root, isActive)&quot;">​</a></h3><p>Get the final style value applied to this node</p><p><code>prop</code>: the style property to get</p><p><code>root</code>: whether it is the root node, default <code>false</code></p><p><code>isActive</code>: v0.7.0+has been abandoned, whether the value being fetched is the active state style value, default <code>false</code></p><h3 id="setstyle-prop-value-isactive" tabindex="-1">setStyle(prop, value, isActive) <a class="header-anchor" href="#setstyle-prop-value-isactive" aria-label="Permalink to &quot;setStyle(prop, value, isActive)&quot;">​</a></h3><ul><li><code>isActive</code>: v0.7.0+has been abandoned</li></ul><p>Modify a style of the node, a shortcut method for the <code>SET_NODE_STYLE</code> command</p><h3 id="setstyles-style-isactive" tabindex="-1">setStyles(style, isActive) <a class="header-anchor" href="#setstyles-style-isactive" aria-label="Permalink to &quot;setStyles(style, isActive)&quot;">​</a></h3><blockquote><p>v0.6.12+</p></blockquote><ul><li><code>isActive</code>: v0.7.0+has been abandoned</li></ul><p>Modify multiple styles of nodes, a shortcut method for the <code>SET_NODE_STYLES</code> command</p><h3 id="getdata-key" tabindex="-1">getData(key) <a class="header-anchor" href="#getdata-key" aria-label="Permalink to &quot;getData(key)&quot;">​</a></h3><p>Get the specified value in the <code>data</code> object of the node&#39;s real data <code>nodeData</code>, if <code>key</code> is not passed, return the <code>data</code> object</p><h3 id="setdata-data" tabindex="-1">setData(data) <a class="header-anchor" href="#setdata-data" aria-label="Permalink to &quot;setData(data)&quot;">​</a></h3><p>Set the value of the specified key in the data object of the node&#39;s real data nodeData, <code>SET_NODE_DATA</code> command&#39;s shortcut method. This method and command will not update the view, so if you want to modify the text, use the &#39;setText&#39; method or use the command pointing to the text.</p><h3 id="settext-text-richtext-resetrichtext" tabindex="-1">setText(text, richText, resetRichText) <a class="header-anchor" href="#settext-text-richtext-resetrichtext" aria-label="Permalink to &quot;setText(text, richText, resetRichText)&quot;">​</a></h3><ul><li><p><code>richText</code>: v0.4.2+，<code>Boolean</code>, If you want to set rich text content, that is, <code>html</code> character, <code>richText</code> needs to be passed <code>true</code>. After version 0.9.3+, if this parameter is not passed, it will use previous value.</p></li><li><p><code>resetRichText</code>: v0.6.10+, <code>Boolean</code>, whether to reset rich text, The default is &#39;false&#39;. If &#39;true&#39; is passed, the style of the rich text node will be reset</p></li></ul><p>Setting the node text, a shortcut for the <code>SET_NODE_TEXT</code> command</p><h3 id="setimage-imgdata" tabindex="-1">setImage(imgData) <a class="header-anchor" href="#setimage-imgdata" aria-label="Permalink to &quot;setImage(imgData)&quot;">​</a></h3><p>Setting the node image, a shortcut for the <code>SET_NODE_IMAGE</code> command</p><h3 id="seticon-icons" tabindex="-1">setIcon(icons) <a class="header-anchor" href="#seticon-icons" aria-label="Permalink to &quot;setIcon(icons)&quot;">​</a></h3><p>Setting the node icon, a shortcut for the <code>SET_NODE_ICON</code> command</p><h3 id="sethyperlink-link-title" tabindex="-1">setHyperlink(link, title) <a class="header-anchor" href="#sethyperlink-link-title" aria-label="Permalink to &quot;setHyperlink(link, title)&quot;">​</a></h3><p>Setting the node hyperlink, a shortcut for the <code>SET_NODE_HYPERLINK</code> command</p><h3 id="setnote-note" tabindex="-1">setNote(note) <a class="header-anchor" href="#setnote-note" aria-label="Permalink to &quot;setNote(note)&quot;">​</a></h3><p>Setting the node note, a shortcut for the <code>SET_NODE_NOTE</code> command</p><h3 id="setattachment-url-name" tabindex="-1">setAttachment(url, name) <a class="header-anchor" href="#setattachment-url-name" aria-label="Permalink to &quot;setAttachment(url, name)&quot;">​</a></h3><blockquote><p>v0.9.10+</p></blockquote><ul><li><p><code>url</code>：Attachment url；</p></li><li><p><code>name</code>：Attachment name, optional</p></li></ul><p>Set node attachments, a shortcut for the <code>SET_NODE_ATTACHMENT</code> command</p><h3 id="settag-tag" tabindex="-1">setTag(tag) <a class="header-anchor" href="#settag-tag" aria-label="Permalink to &quot;setTag(tag)&quot;">​</a></h3><p>Setting the node tag, a shortcut for the <code>SET_NODE_TAG</code> command</p><h3 id="hide" tabindex="-1">hide() <a class="header-anchor" href="#hide" aria-label="Permalink to &quot;hide()&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Hide node and its sub-nodes</p><h3 id="show" tabindex="-1">show() <a class="header-anchor" href="#show" aria-label="Permalink to &quot;show()&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Show node and its sub-nodes</p><h3 id="isparent-node" tabindex="-1">isParent(node) <a class="header-anchor" href="#isparent-node" aria-label="Permalink to &quot;isParent(node)&quot;">​</a></h3><blockquote><p>v0.1.5+：Detect whether the current node is an ancestor node of a certain node</p></blockquote><blockquote><p>v0.8.1+：Detect whether the current node is the parent node of a certain node</p></blockquote><h3 id="isancestor-node" tabindex="-1">isAncestor(node) <a class="header-anchor" href="#isancestor-node" aria-label="Permalink to &quot;isAncestor(node)&quot;">​</a></h3><blockquote><p>v0.8.1+</p></blockquote><p>Detect whether the current node is an ancestor node of a certain node</p><h3 id="isbrother-node" tabindex="-1">isBrother(node) <a class="header-anchor" href="#isbrother-node" aria-label="Permalink to &quot;isBrother(node)&quot;">​</a></h3><blockquote><p>v0.1.5+</p></blockquote><p>Check if the current node is a sibling of a certain node</p><h3 id="checkhasgeneralization" tabindex="-1">checkHasGeneralization() <a class="header-anchor" href="#checkhasgeneralization" aria-label="Permalink to &quot;checkHasGeneralization()&quot;">​</a></h3><blockquote><p>v0.2.0+</p></blockquote><p>Check if there is a summary</p><h3 id="checkhasselfgeneralization" tabindex="-1">checkHasSelfGeneralization() <a class="header-anchor" href="#checkhasselfgeneralization" aria-label="Permalink to &quot;checkHasSelfGeneralization()&quot;">​</a></h3><blockquote><p>v0.9.0+</p></blockquote><p>Check if there is a summary of oneself, not a sub node interval summary</p><h3 id="hidegeneralization" tabindex="-1">hideGeneralization() <a class="header-anchor" href="#hidegeneralization" aria-label="Permalink to &quot;hideGeneralization()&quot;">​</a></h3><blockquote><p>v0.2.0+</p></blockquote><p>Hide summary node</p><h3 id="showgeneralization" tabindex="-1">showGeneralization() <a class="header-anchor" href="#showgeneralization" aria-label="Permalink to &quot;showGeneralization()&quot;">​</a></h3><blockquote><p>v0.2.0+</p></blockquote><p>Show summary node</p><h3 id="updategeneralization" tabindex="-1">updateGeneralization() <a class="header-anchor" href="#updategeneralization" aria-label="Permalink to &quot;updateGeneralization()&quot;">​</a></h3><blockquote><p>v0.2.0+</p></blockquote><p>Update summary node</p><h3 id="hascustomposition" tabindex="-1">hasCustomPosition() <a class="header-anchor" href="#hascustomposition" aria-label="Permalink to &quot;hasCustomPosition()&quot;">​</a></h3><blockquote><p>v0.2.0+</p></blockquote><p>Check if the node has custom data</p><h3 id="ancestorhascustomposition" tabindex="-1">ancestorHasCustomPosition() <a class="header-anchor" href="#ancestorhascustomposition" aria-label="Permalink to &quot;ancestorHasCustomPosition()&quot;">​</a></h3><blockquote><p>v0.2.0+</p></blockquote><p>Check if there is an ancestor node with custom position</p><h3 id="getshape" tabindex="-1">getShape() <a class="header-anchor" href="#getshape" aria-label="Permalink to &quot;getShape()&quot;">​</a></h3><blockquote><p>v0.2.4+</p></blockquote><p>Get node shape</p><h3 id="setshape-shape" tabindex="-1">setShape(shape) <a class="header-anchor" href="#setshape-shape" aria-label="Permalink to &quot;setShape(shape)&quot;">​</a></h3><blockquote><p>v0.2.4+</p></blockquote><p>Set node shape, a shortcut method for the <code>SET_NODE_SHAPE</code> command</p><h3 id="getselfstyle-prop" tabindex="-1">getSelfStyle(prop) <a class="header-anchor" href="#getselfstyle-prop" aria-label="Permalink to &quot;getSelfStyle(prop)&quot;">​</a></h3><blockquote><p>v0.2.5+</p></blockquote><p>Get the node&#39;s own custom style</p><h3 id="getparentselfstyle-prop" tabindex="-1">getParentSelfStyle(prop) <a class="header-anchor" href="#getparentselfstyle-prop" aria-label="Permalink to &quot;getParentSelfStyle(prop)&quot;">​</a></h3><blockquote><p>v0.2.5+</p></blockquote><p>Get the custom style of the nearest ancestor node with its own custom style</p><h3 id="getselfinhertstyle-prop" tabindex="-1">getSelfInhertStyle(prop) <a class="header-anchor" href="#getselfinhertstyle-prop" aria-label="Permalink to &quot;getSelfInhertStyle(prop)&quot;">​</a></h3><blockquote><p>v0.2.5+</p></blockquote><p>Get the node&#39;s own inheritable custom style</p>`,199),r=[n];function h(l,s,d,c,p,u){return a(),t("div",null,r)}const q=e(i,[["render",h]]);export{m as __pageData,q as default};
