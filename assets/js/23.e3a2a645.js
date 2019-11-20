(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{265:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"writing-a-vuepress-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-vuepress-theme"}},[t._v("#")]),t._v(" Writing a VuePress theme")]),t._v(" "),a("p",[t._v("To write a theme, create a "),a("code",[t._v(".vuepress/theme")]),t._v(" directory in your docs root, and then create a "),a("code",[t._v("Layout.vue")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n└─ .vuepress\n   └─ `theme`\n       └─ Layout.vue\n")])])]),a("p",[t._v("From there it's the same as developing a normal Vue application. It is entirely up to you how to organize your theme.")]),t._v(" "),a("h2",{attrs:{id:"content-outlet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-outlet"}},[t._v("#")]),t._v(" Content Outlet")]),t._v(" "),a("p",[t._v("The compiled content of the current "),a("code",[t._v(".md")]),t._v(" file being rendered will be available as a special "),a("code",[t._v("<Content/>")]),t._v(" global component. You will need to render it somewhere in your layout in order to display the content of the page. The simplest theme can be just a single "),a("code",[t._v("Layout.vue")]),t._v(" component with the following content:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("Also see:")])]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/guide/markdown-slot.html"}},[t._v("Markdown Slot")])],1)]),t._v(" "),a("h2",{attrs:{id:"directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),a("p",[t._v("Just one "),a("code",[t._v("Layout.vue")]),t._v(" might not be enough, and you might also want to define more layout components in the theme for using on different pages. You may also want to customize the "),a("router-link",{attrs:{to:"/config/#palette-styl"}},[t._v("palette")]),t._v(", and even apply some plugins.")],1),t._v(" "),a("p",[t._v("So it's time to reorganize your theme, an agreed theme directory structure is as follows:")]),t._v(" "),a("p",[t._v("::: vue\ntheme\n├── "),a("code",[t._v("global-components")]),t._v("\n│   └── xxx.vue\n├── "),a("code",[t._v("components")]),t._v("\n│   └── xxx.vue\n├── "),a("code",[t._v("layouts")]),t._v("\n│   ├── Layout.vue "),a("em",[t._v("("),a("strong",[t._v("Mandatory")]),t._v(")")]),t._v("\n│   └── 404.vue\n├── "),a("code",[t._v("styles")]),t._v("\n│   ├── index.styl\n│   └── palette.styl\n├── "),a("code",[t._v("templates")]),t._v("\n│   ├── dev.html\n│   └── ssr.html\n├── "),a("code",[t._v("index.js")]),t._v("\n├── "),a("code",[t._v("enhanceApp.js")]),t._v("\n└── package.json\n:::")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("theme/global-components")]),t._v(": Components under this directory will be automatically registered as global components. For details, please refer to "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("theme/components")]),t._v(": Your components.")]),t._v(" "),a("li",[a("code",[t._v("theme/layouts")]),t._v(": Layout components of the theme, where "),a("code",[t._v("Layout.vue")]),t._v(" is required.")]),t._v(" "),a("li",[a("code",[t._v("theme/styles")]),t._v(": Global style and palette.")]),t._v(" "),a("li",[a("code",[t._v("theme/templates")]),t._v(": Modify default template.")]),t._v(" "),a("li",[a("code",[t._v("theme/index.js")]),t._v(": Entry file of theme configuration.")]),t._v(" "),a("li",[a("code",[t._v("theme/enhanceApp.js")]),t._v(": Theme level enhancements.")])]),t._v(" "),a("p",[t._v("::: warning Note\nWhen you publish your theme as an NPM package, if you don't have any theme configuration, that means you don't have "),a("code",[t._v("theme/index.js")]),t._v(", you'll need to set the "),a("code",[t._v('"main"')]),t._v(" field  to "),a("code",[t._v("layouts/Layout.vue")]),t._v(" in "),a("code",[t._v("package.json")]),t._v(", only in this way VuePress can correctly resolve the theme.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layouts/Layout.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"layout-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout-component"}},[t._v("#")]),t._v(" Layout Component")]),t._v(" "),a("p",[t._v("Suppose your theme layouts folder is as follows:")]),t._v(" "),a("p",[t._v("::: vue\ntheme\n└── "),a("code",[t._v("layouts")]),t._v("\n   ├── Layout.vue\n   ├── AnotherLayout.vue\n   └── 404.vue\n:::")]),t._v(" "),a("p",[t._v("Then, all the pages will use "),a("code",[t._v("Layout.vue")]),t._v(" as layout component by default, while the routes not matching will use "),a("code",[t._v("404.vue")]),t._v(".")]),t._v(" "),a("p",[t._v("If you want to switch the layout of some pages to "),a("code",[t._v("AnotherLayout.vue")]),t._v(", you just need to update the frontmatter of this page:")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("layout: AnotherLayout\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("::: tip\nEach layout component may render distinct pages. If you want to apply some global UI (e.g. global header), consider using "),a("router-link",{attrs:{to:"/_posts/option-api.html#globallayout"}},[t._v("globalLayout")]),t._v("。\n:::")],1),t._v(" "),a("h2",{attrs:{id:"apply-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-plugins"}},[t._v("#")]),t._v(" Apply plugins")]),t._v(" "),a("p",[t._v("You can apply some plugins to the theme via "),a("code",[t._v("theme/index.js")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      serviceWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      updatePopup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"site-and-page-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#site-and-page-metadata"}},[t._v("#")]),t._v(" Site and Page Metadata")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Layout")]),t._v(" component will be invoked once for every "),a("code",[t._v(".md")]),t._v(" file in "),a("code",[t._v("docs")]),t._v(", and the metadata for the entire site and that specific page will be exposed respectively as "),a("code",[t._v("this.$site")]),t._v(" and "),a("code",[t._v("this.$page")]),t._v(" properties which are injected into every component in the app.")]),t._v(" "),a("p",[t._v("This is the value of "),a("code",[t._v("$site")]),t._v(" of this very website:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vue-powered Static Site Generator"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524027677000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("title")]),t._v(", "),a("code",[t._v("description")]),t._v(" and "),a("code",[t._v("base")]),t._v(" are copied from respective fields in "),a("code",[t._v(".vuepress/config.js")]),t._v(". "),a("code",[t._v("pages")]),t._v(" contains an array of metadata objects for each page, including its path, page title (explicitly specified in "),a("router-link",{attrs:{to:"/guide/markdown.html#front-matter"}},[t._v("YAML front matter")]),t._v(" or inferred from the first header on the page), and any YAML front matter data in that file.")],1),t._v(" "),a("p",[t._v("This is the "),a("code",[t._v("$page")]),t._v(" object for this page you are looking at:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1524847549000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guide/custom-themes.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom Themes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If the user provided "),a("code",[t._v("themeConfig")]),t._v(" in "),a("code",[t._v(".vuepress/config.js")]),t._v(", it will also be available as "),a("code",[t._v("$site.themeConfig")]),t._v(". You can use this to allow users to customize behavior of your theme - for example, specifying categories and page order. You can then use these data together with "),a("code",[t._v("$site.pages")]),t._v(" to dynamically construct navigation links.")]),t._v(" "),a("p",[t._v("Finally, don't forget that "),a("code",[t._v("this.$route")]),t._v(" and "),a("code",[t._v("this.$router")]),t._v(" are also available as part of Vue Router's API.")]),t._v(" "),a("p",[t._v("::: tip\n"),a("code",[t._v("lastUpdated")]),t._v(" is the UNIX timestamp of this file's last git commit, for more details, refer to "),a("router-link",{attrs:{to:"/theme/default-theme-config.html#last-updated"}},[t._v("Last Updated")]),t._v(".\n:::")],1),t._v(" "),a("h2",{attrs:{id:"content-excerpt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-excerpt"}},[t._v("#")]),t._v(" Content Excerpt")]),t._v(" "),a("p",[t._v("If a markdown file contains a "),a("code",[t._v("\x3c!-- more --\x3e")]),t._v(" comment, any content above the comment will be extracted and exposed as "),a("code",[t._v("$page.excerpt")]),t._v(". If you are building custom theme for blogging, this data can be used to render a post list with excerpts.")]),t._v(" "),a("h2",{attrs:{id:"app-level-enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements"}},[t._v("#")]),t._v(" App Level Enhancements")]),t._v(" "),a("p",[t._v("Themes can enhance the Vue app that VuePress uses by exposing an "),a("code",[t._v("enhanceApp.js")]),t._v(" file at the root of the theme. The file should "),a("code",[t._v("export default")]),t._v(" a hook function which will receive an object containing some app-level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the version of Vue being used in the VuePress app")]),t._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the options for the root Vue instance")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the router instance for the app")]),t._v("\n  siteData "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// site metadata")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...apply enhancements to the app")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);