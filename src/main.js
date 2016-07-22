(function(){

  xtag.register('x-page', {
    accessors: {
      active: {
        attribute: { boolean: true },
        set: function(val, old){
          if (val !== old) xtag.transition(this, val ? 'active' : 'inactive');
        }
      },
      selected: {
        attribute: {
          boolean: true
        },
        set: function(val, old){
          if (val && val != old && this.parentNode) {
              xtag.query(document, 'x-page').forEach(function(node){
              if (node != this) node.selected = false;
            }, this);
          }
        }
      }
    },
    methods: {
      show: function(deactivate){
        this.selected = true;
        if (deactivate) xtag.query(document, 'x-page').forEach(function(node){
          node.active = node == this;
        }, this);
      },
      hide: function(){
        this.selected = false;
        this.active = false;
      }
    }
  });

})();
