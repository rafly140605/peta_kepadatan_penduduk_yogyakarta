var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = new ol.format.GeoJSON();
var features_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = format_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.readFeatures(json_KEPADATANPENDUDUKKOTAYOGYAKARTA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.addFeatures(features_KEPADATANPENDUDUKKOTAYOGYAKARTA_1);
var lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEPADATANPENDUDUKKOTAYOGYAKARTA_1, 
                style: style_KEPADATANPENDUDUKKOTAYOGYAKARTA_1,
                popuplayertitle: 'KEPADATAN PENDUDUK KOTA YOGYAKARTA',
                interactive: true,
    title: 'KEPADATAN PENDUDUK KOTA YOGYAKARTA<br />\
    <img src="styles/legend/KEPADATANPENDUDUKKOTAYOGYAKARTA_1_0.png" /> rendah<br />\
    <img src="styles/legend/KEPADATANPENDUDUKKOTAYOGYAKARTA_1_1.png" /> sedang<br />\
    <img src="styles/legend/KEPADATANPENDUDUKKOTAYOGYAKARTA_1_2.png" /> tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1];
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'kecamatan ', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'join_No': 'join_No', 'join_Luas': 'luas wilayah', 'join_Pendu': 'jumlah penduduk', 'join_Kepad': 'kepadatan penduduk', 'join_Banji': 'join_Banji', 'join_Cuaca': 'join_Cuaca', 'join_Erups': 'join_Erups', 'join_Gelom': 'join_Gelom', 'join_Gel_1': 'join_Gel_1', 'join_Gempa': 'join_Gempa', 'join_Kebak': 'join_Kebak', 'join_Keker': 'join_Keker', 'join_Tanah': 'join_Tanah', });
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'JsonEdit', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'join_No': 'Hidden', 'join_Luas': 'TextEdit', 'join_Pendu': 'TextEdit', 'join_Kepad': 'TextEdit', 'join_Banji': 'Hidden', 'join_Cuaca': 'Hidden', 'join_Erups': 'Hidden', 'join_Gelom': 'Hidden', 'join_Gel_1': 'Hidden', 'join_Gempa': 'Hidden', 'join_Kebak': 'Hidden', 'join_Keker': 'Hidden', 'join_Tanah': 'Hidden', });
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'join_Luas': 'inline label - always visible', 'join_Pendu': 'inline label - always visible', 'join_Kepad': 'inline label - always visible', });
lyr_KEPADATANPENDUDUKKOTAYOGYAKARTA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});