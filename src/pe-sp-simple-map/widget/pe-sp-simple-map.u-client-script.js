function SpNgMapController(NgMap) {
  var c = this;

  c.$onInit = function() {
    /* styles generated by Google Maps Platform Styling Wizard
      https://mapstyle.withgoogle.com/ */
    NgMap.getMap().then(function(map) {
      map.setOptions({
        styles: c.options.styles
      });
    });
  };
}
