Ext.define('MyApp.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype:'contactform',
    config: {
		title:'Contact',
		iconCls:'user',
		scrollable:true,
		styleHtmlContent:true,
		
		
	
        items: [
			{
				xtype:'textfield', 
				name :'name',
				label:'Name'
		   	},
			{
				xtype:'emailfield', 
				name :'email',
				label:'Correo'
			},
			{
				xtype:'textareafield', 
				name :'mensaje',
				label:'Mensaje'
			}
        ]
    }
});
