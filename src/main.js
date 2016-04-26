(function(){

  var selected;

  function clearStatusBar(){
    console.log(document.height <= window.outerHeight, document.height, window.outerHeight);
    if (document.height <= window.outerHeight) document.body.style.height = window.outerHeight + 1 + 'px';
    window.scrollTo(0, 1);
  }

  setTimeout(clearStatusBar, 50);

  xtag.register('x-page', {
    events: {
      tapstart: clearStatusBar
    },
    accessors: {
      selected: {
        attribute: {
          boolean: true
        },
        set: function(val, old){
          if (val) selected = this;
          xtag.transition(this, val ? 'enter' : 'exit', {
            after: function(){
              xtag.fireEvent(this, this.selected ? 'show' : 'hide');
            }
          });
          if (val && val != old && this.parentNode) xtag.query(document, 'x-page').forEach(function(node){
            if (node != this) node.selected = false;
          }, this);
        }
      }
    },
    methods: {
      show: function(reverse){
        var last = selected;
        if (reverse) {
          this.setAttribute('transition-reverse', '');
          if (last) last.setAttribute('transition-reverse', '');
        }
        else {
          this.removeAttribute('transition-reverse');
          if (last) last.removeAttribute('transition-reverse');
        }
        this.selected = true;
      }
    }
  });

})();
