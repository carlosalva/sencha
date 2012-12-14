Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar', 
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype:'homepanel'
			},
			{
				xtype:'contactform'
			}
           
        ]
    }
});
