---
title: "[译]An Interview with Andy Selvig, Author of Kara Web Framework"
date: 2013-01-31 10:12:00
author: Robert Demmer
tags: kotlin  翻译
category:  kotlin
reward: false
reward_title: Have a nice Kotlin!
reward_wechat:
reward_alipay:
source_url: https://blog.jetbrains.com/kotlin/2013/01/an-interview-with-andy-selvig-author-of-kara-web-framework/
translator:
translator_url:
---

**<img alt =“”class =“alignright size-medium wp-image-806”data-recalc-dims =“1”src =“https://i2.wp.com/blog.jetbrains.com/ kotlin / files / 2013/01 / headshot.jpg？resize = 210％2C158＆amp; ssl = 1“/> 1。你好安迪，谢谢你花时间加入我们。你能告诉我们一些关于你自己吗？**

{% raw %}
<p>****</p>
{% endraw %}

我是共同所有者 [微小的使命](http://tinymission.com/) ，一家位于美国明尼苏达州的小型网络和移动开发公司。除了我在 Tiny Mission 的工作之外，我还在明尼苏达大学的移动应用程序开发课程。

{% raw %}
<p><span id="more-804"></span></p>
{% endraw %}

**2。作为卡拉的作者，请给我们一些项目背景，如何发展及其目标。**
我做了很多 Web 开发，主要是在 Ruby on Rails 和 ASP.NET MVC 中。我想你可以看看卡拉，试图找到最好的两个世界。

{% raw %}
<p><a href="https://i2.wp.com/blog.jetbrains.com/kotlin/files/2013/01/commandline-usage.png" target="_blank"><img alt="" class="size-medium wp-image-808 alignleft" data-recalc-dims="1" sizes="(max-width: 180px) 100vw, 180px" src="https://i2.wp.com/blog.jetbrains.com/kotlin/files/2013/01/commandline-usage.png?resize=180%2C146&amp;ssl=1" srcset="https://i2.wp.com/blog.jetbrains.com/kotlin/files/2013/01/commandline-usage.png?resize=300%2C243&amp;ssl=1 300w, https://i2.wp.com/blog.jetbrains.com/kotlin/files/2013/01/commandline-usage.png?w=626&amp;ssl=1 626w"/></a></p>
{% endraw %}

我喜欢 Rails 的表现力，但通常我认为可以通过一些静态类型和一个编译器来提高效率。我知道这违反了一种动态语言（如 Ruby）的生产力的常识，但在大规模应用程序中，编译器是您的朋友。可以通过编写数百个单元测试来代替它的想法似乎是无法解决的。
我喜欢在 C＃/ .NET 中开发，但是 ASP.NET MVC 有一些难点，比如糟糕的模板系统（如果有适当的 IDE 支持，Razor 可能没问题）和依赖于 Microsoft 开发生态系统。
**3。什么使 Kara 与现有的 Web 框架不同？**
**** <img alt =“”class =“alignright size-medium wp-image-811”data-recalc-dims =“1”sizes =“（max-width：211px）100vw，211px”src =“https://i0.wp.com/blog.jetbrains.com/kotlin/files/2013/01/a-kara-stylesheet.png?resize=211%2C300&amp;ssl=1”srcset =“https：/ /i0.wp.com/blog.jetbrains.com/kotlin/files/2013/01/a-kara-stylesheet.png?resize=211%2C300&amp;ssl=1 211w，https://i0.wp.com/ blog.jetbrains.com/kotlin/files/2013/01/a-kara-stylesheet.png?w=381&amp;ssl=1 381w“/>使 Kara 脱颖而出的主要原因在于应用程序的所有部分都被写入用相同的语言这意味着您获得静态类型，表达性的应用程序代码，视图和样式表。我不知道提供这种级别的集成的任何其他框架。
最后，卡拉打算成为一个真正的开发者框架。而不是写传统的 HTML 和 CSS，我们依靠 Kotlin 的力量和表现力。这可能是一些网页设计师的失误，但是我认为大多数开发人员将“只得到它”，并且看到一个可以与它们配合使用的框架，而不是针对它们。
**4。你为什么选择在 Kotlin 写卡拉，其他的选择是什么？**
当我开始写 Kara 时，我评估了许多不同的语言：Kotlin，Scala，Gosu，Nemerle，Groovy 和其他几个。主要的决定功能是使用优雅的语法为 HTML 和 CSS 生成定义自定义 DSL。当时只有两种符合法案的语言是 Kotlin 和 Groovy。然而，在 Groovy 2.0 发布之前，它完全是一种动态的语言，这真的不是我正在寻找的。

{% raw %}
<p><img alt="" class="alignleft size-medium wp-image-815" data-recalc-dims="1" sizes="(max-width: 240px) 100vw, 240px" src="https://i1.wp.com/blog.jetbrains.com/kotlin/files/2013/01/a-kara-view.png?resize=240%2C152&amp;ssl=1" srcset="https://i1.wp.com/blog.jetbrains.com/kotlin/files/2013/01/a-kara-view.png?resize=300%2C190&amp;ssl=1 300w, https://i1.wp.com/blog.jetbrains.com/kotlin/files/2013/01/a-kara-view.png?w=381&amp;ssl=1 381w"/></p>
{% endraw %}

Kotlin 和 Scala 显然有很多相似之处，但是他们的范围匿名功能的方式有一些细微差别，这使得它不可能在 Scala 中创建相同类型的 DSL。另外，Scala 中一些常用的语法模式让我觉得我正在解决数学问题，而不是编写代码。 Kotlin 的语法只是更好地点击了我。
**5。 Kara 目前处于 Alpha 阶段，Kotlin 的经验如何呢？**
总而言之，Kotlin 一直很乐意使用。它遵循最小惊喜的路径，并实现我正在寻找的所有功能：类型推断，可空性，属性，可选分号，以及构建构建器 DSL 的巨大能力。除了我在 Kara 上的工作之外，Kotlin 现在是启动一个新的 Android 项目时的默认语言。
**6。Kotlin 是一个相当年轻的项目。您对语言用户可用的基础设施的印象是什么？ IDE 是否帮助您？与其他任务相关的工具支持如建立？**
基础设施在采用语言时对我来说是一个很大的卖点。我使用几个 JetBrains IDE（IntelliJ IDEA，RubyMine，WebStorm）并且爱上它们。 IDEA 的 Kotlin 插件通常运行良好，整体开发人员的体验是不错的。插件有一些不稳定，但是我知道我是一个早期采用者，而 Kotlin 正在积极开发，所以它伴随着这个领域。
**7。使用 Kotlin 获得了什么价值，哪里有缺点？**
除了上述具体的语言特征之外，Kotlin 的总体价值显然在生产力上。一般来说，Kotlin 是 Java 的替代品，它完成了这个任务。我可以在 Kotlin 中编写代码比 Java 更快，同时保持 JVM 的类型安全性和性能。
目前，Kotlin 的主要缺点是缺乏大型社区和一系列特定于 Kotlin 的图书馆。您可以明显地使用 Kotlin 中的任何旧的 Java 库，但是当您利用其独特的功能时，语言的真正功能就会发光。希望，卡拉将是这个生态系统的一部分，并为更多的项目提供贡献。
**8。你显然归功于 Kotlin。你对自己的生存能力和未来感到如何？**
我认为 Kotlin 是一种常见的 JVM 语言（用于服务器端 Web 和 Android 编程）以及编写 JavaScript 应用程序的平台。为了这样做，Kotlin 社区需要建立一个明确的信息，说明它与 Scala（其最接近（可以争议的是更受欢迎的）竞争对手的区别。对我来说，这种差异化是关注生产力和一套一流的工具和图书馆来支持它。
**9。卡拉的下一步是什么我们可以期待什么？**
即将到来的卡拉版本有两个主要目标：

0. 现在，卡拉基本上是一个独立的框架，为您提供了一些创建网站的工具。我们需要开发图书馆，插件和中间件的生态系统，为应用程序开发人员提供丰富的工具集。启动新卡拉项目的人应该很容易选择构建完整应用程序所需的各种组件，如持久层，身份验证机制，CSS 框架，UI 库等。这是 Rails 真正发光的一个领域，希望我们可以创建这样的生态系统。=== 卡拉配备了一个内置的 Jetty 服务器进行开发，但是我们并没有实现大规模部署。我认为这方面有很多有趣的改进空间。这可能意味着只需提供一种将 Kara 应用程序打包成 servlet 的机制，或者可以在 Vert.x 之上托管一个应用程序的创新方法。


{% raw %}
<p style="text-align: center"><span style="font-size: small"><span style="line-height: 24px"><a href="https://d3nmt5vlzunoa1.cloudfront.net/kotlin/files/2013/01/kara-routes.png" target="_blank"><br/>
</a><a href="https://i0.wp.com/blog.jetbrains.com/kotlin/files/2013/01/kara-routes.png" target="_blank"><img alt="" class="aligncenter size-full wp-image-819" data-recalc-dims="1" sizes="(max-width: 774px) 100vw, 774px" src="https://i0.wp.com/blog.jetbrains.com/kotlin/files/2013/01/kara-routes.png?resize=640%2C201&amp;ssl=1" srcset="https://i0.wp.com/blog.jetbrains.com/kotlin/files/2013/01/kara-routes.png?resize=300%2C94&amp;ssl=1 300w, https://i0.wp.com/blog.jetbrains.com/kotlin/files/2013/01/kara-routes.png?w=774&amp;ssl=1 774w"/></a> </span></span></p>
{% endraw %}

**<span style =“font-size：16px”> 10。卡拉 Web 框架是开源的，所以人们可以做出贡献。我们在哪里可以学到更多的内容，现在有哪些类型的贡献会有所帮助？ </span>**
<span style =“font-size：16px”>我们绝对寻找更多的贡献者。任何有兴趣的人都可以查看我们的<a href="http://youtrack.codebetter.com/issues/Kara" target="_blank" title="Kara on YouTrack"> YouTrack 页面</a>。有一些功能需要在那里实现。</span>
**11。谢谢你花时间和我们聊天安迪。还有什么别的你想和读者分享吗？**
<img alt =“”class =“alignright size-medium wp-image-822”data-recalc-dims =“1”sizes =“（max-width：300px）100vw，300px”src =“https：// i1 .wp.com / blog.jetbrains.com / kotlin / files / 2013/01 / karaframework.com_.png？resize = 300％2C236＆amp; ssl = 1“srcset =”https://i1.wp.com/blog。 jetbrains.com/kotlin/files/2013/01/karaframework.com_.png?resize=300%2C236&amp;ssl=1 300w，https://i1.wp.com/blog.jetbrains.com/kotlin/files/2013 /01/karaframework.com_.png?w=962&amp;ssl=1 962w“/>我希望大家都会看看卡拉，看看我们提供什么。到目前为止，我对 Kotlin 社区有了很好的经验，并希望能够使 Kotlin 和 Kara 成为制作现代 Web 应用程序的绝佳方式。
有关详细信息，请访问<a href="http://www.karaframework.com" target="_blank" title="Kara Web Framework"> KaraFramework.com </a>。*
