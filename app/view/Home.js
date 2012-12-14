Ext.define('MyApp.view.Home', {
    extend: 'Ext.Panel',
    xtype:'homepanel',
    config: {
		title:'Home',
		iconCls:'home',
		scrollable:true,
		styleHtmlContent:true,
		cls:'Home',
		
		html: [
			'<img src="http://staging.sencha.com/img/sencha.png" />',
			'<h1>Welcome to Sencha Touch</h1>',
			'<a style="cursor:pointer" onclick="prueba()">click aqui</a>',
			"to use tabs, lists and forms to create a simple app</p>",
			'<h2>Sencha Touch (2.0.0)</h2>'
		].join(""),
		
        items:[{
						xtype:'button', 
						text :'enviar',
						ui:'Send',
						handler:function(){
							Ext.Ajax.request({
								url: 'prueba.php',
								headers: {
        							"Content-Type": "text/plain"
    							},
								success: function(response) {
									 Ext.Msg.alert(response.responseText);
								},
							
								failure: function(response) {
									 Ext.Msg.alert("Curses, something terrible happened");
								}
							});
						}
					}
			]
    }
});
