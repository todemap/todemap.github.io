var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_A_1 = new ol.format.GeoJSON();
var features_A_1 = format_A_1.readFeatures(json_A_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_A_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_1.addFeatures(features_A_1);
var lyr_A_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_1, 
                style: style_A_1,
                interactive: true,
                title: '<img src="styles/legend/A_1.png" /> A台灣鄉鎮公所'
            });

lyr_GoogleMap_0.setVisible(true);lyr_A_1.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr_A_1];
lyr_A_1.set('fieldAliases', {'CTNAME': 'CTNAME', 'TOWNID': 'TOWNID', 'ADDRESS': 'ADDRESS', 'X': 'X', 'Y': 'Y', });
lyr_A_1.set('fieldImages', {'CTNAME': '', 'TOWNID': '', 'ADDRESS': '', 'X': '', 'Y': '', });
lyr_A_1.set('fieldLabels', {'CTNAME': 'no label', 'TOWNID': 'no label', 'ADDRESS': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_A_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});