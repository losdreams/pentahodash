require([
    "dash!/system/dashboard/dashboards/primeiro_painel.wcdf"
  ], function(PrimeiroDash) {
    // Create two instances of the same dashboard that use distinct DOM elements
    dash = new PrimeiroDash ("content1");
    console.log('Dash', dash);
    dash.render();

  
  });
  


