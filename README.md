# About

Page transitioning component for single-page apps that uses native body overflow for composited scroll rendering

Define pages in your html
```html
<x-page id="one" transition-enter="slide-right" transition-exit="slide-down" active>...</x-page>
<x-page id="two" transition-enter="slide-up">...</x-page>
```

Add transitions for each page

You can also se an active property for the default one

To change pages you can do 

```
var page = document.getElementById('two');
page.show();
```