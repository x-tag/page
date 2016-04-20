(function(){

  var selected;

  xtag.register('x-page', {
    accessors: {
      selected: {
        attribute: {
          boolean: true
        },
        set: function(val, old){
          if (val) selected = this;
          xtag.transition(this, val ? 'enter' : 'exit');
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
