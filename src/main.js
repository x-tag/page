(function(){

  var selected;

  xtag.register('x-page', {
    accessors: {
      active: {
        attribute: { boolean: true },
      },
      selected: {
        attribute: {
          boolean: true
        },
        set: function(val, old){
          if (val) selected = this;
          if (val && val != old && this.parentNode) xtag.query(document, 'x-page').forEach(function(node){
            if (node != this) node.selected = false;
          }, this);
        }
      }
    },
    methods: {
      show: function(){
        this.selected = true;
        this.active = true;
      },
      hide: function(){
        this.selected = false;
        this.active = false;
      }
    }
  });

})();
