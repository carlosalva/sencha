
Ext.define('MyApp.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype:'contactform',
	requires:[
		Ext.form.FieldSet,
		Ext.field.Email
	],
    config: {
		title:'Contact',
		iconCls:'user',
		scrollable:true,
		url:'accion.php',
		styleHtmlContent:true,

        items: [
			{
				xtype:'fieldset', 
				title :'Contactanos',
				instructions:'Esta es una instruccion',
				items: [
					{
						xtype:'textfield', 
						name :'name',
						label:'Name',
						required:true,
					},
					{
						xtype:'emailfield', 
						name :'email',
						label:'Correo',
						required:true,
					},
					{
						xtype:'textareafield', 
						name :'mensaje',
						label:'Mensaje'
					},
					{
						xtype:'button', 
						text :'enviar',
						ui:'Send',
						/*listeners: {
        					tap: validar
    					},*/
						
						
						handler:function(){
							//JSON.stringify(this.up('contactform').getValues())
							//alert(this.up('contactform').getValues());
							var cad=this.up('contactform').getValues();
							if(cad['name']==""){
								Ext.Msg.alert('no ha ingresado su nombre');
							}
						}
					}
				]
		   	},
			
        ]
    }
});
