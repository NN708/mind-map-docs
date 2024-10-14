# 构造函数

## 静态属性

### pluginList

> v0.3.0+

当前注册的所有插件列表。

## 实例属性

### el

容器元素。

### opt

配置选项对象。

### svg

> @svgdotjs/svg.js库调用SVG()方法返回的节点实例

画布svg元素。

### draw

> @svgdotjs/svg.js库调用group()方法返回的节点实例
>
> svg节点的子节点

容器元素，用于承载节点、连线等内容。

### lineDraw

> v0.8.0+
>
> @svgdotjs/svg.js库调用group()方法返回的节点实例
>
> draw节点的子节点

节点连线元素的容器。

### nodeDraw

> v0.8.0+
>
> @svgdotjs/svg.js库调用group()方法返回的节点实例
>
> draw节点的子节点

节点元素的容器。

### associativeLineDraw

> v0.8.0+
>
> @svgdotjs/svg.js库调用group()方法返回的节点实例
>
> 在注册了关联线插件的情况下可用
>
> draw节点的子节点

关联线内容的容器。

### otherDraw

> v0.8.0+
>
> @svgdotjs/svg.js库调用group()方法返回的节点实例
>
> draw节点的子节点

其他内容的容器。

### elRect

容器元素`el`的尺寸、位置信息。调用`getBoundingClientRect()`方法的返回结果。

### width

容器元素`el`的宽度。

### height

容器元素`el`的高度。

### themeConfig

当前主题配置。

### cssTextMap 

> v0.12.0+

必要的css样式。该样式在实例化时会动态添加到页面，同时导出为svg时也会添加到svg源码中。库默认定义了一些，可以从这里查看：[constant.js](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/constants/constant.js#L186)。同时插件也可以使用`appendCss`方法追加样式。