var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Urban_Areas_1673911287228252760Urbanized_Areas_1 = new ol.format.GeoJSON();
var features_Urban_Areas_1673911287228252760Urbanized_Areas_1 = format_Urban_Areas_1673911287228252760Urbanized_Areas_1.readFeatures(json_Urban_Areas_1673911287228252760Urbanized_Areas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Urban_Areas_1673911287228252760Urbanized_Areas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Urban_Areas_1673911287228252760Urbanized_Areas_1.addFeatures(features_Urban_Areas_1673911287228252760Urbanized_Areas_1);
var lyr_Urban_Areas_1673911287228252760Urbanized_Areas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Urban_Areas_1673911287228252760Urbanized_Areas_1, 
                style: style_Urban_Areas_1673911287228252760Urbanized_Areas_1,
                popuplayertitle: "Urban_Areas_1673911287228252760 — Urbanized_Areas",
                interactive: true,
                title: '<img src="styles/legend/Urban_Areas_1673911287228252760Urbanized_Areas_1.png" /> Urban_Areas_1673911287228252760 — Urbanized_Areas'
            });
var format_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = new ol.format.GeoJSON();
var features_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = format_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.readFeatures(json_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.addFeatures(features_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2);
var lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2, 
                style: style_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2,
                popuplayertitle: "School_Point_Locations_of_NJ_7426162841564329730 (1) — School_Point_Locations_of_NJ__Public__Private_and_Charter_",
                interactive: true,
                title: '<img src="styles/legend/School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.png" /> School_Point_Locations_of_NJ_7426162841564329730 (1) — School_Point_Locations_of_NJ__Public__Private_and_Charter_'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Urban_Areas_1673911287228252760Urbanized_Areas_1.setVisible(true);lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Urban_Areas_1673911287228252760Urbanized_Areas_1,lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2];
lyr_Urban_Areas_1673911287228252760Urbanized_Areas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CENSUS_UA_CODE': 'CENSUS_UA_CODE', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LSAD_TYPE': 'LSAD_TYPE', 'AREA_SQ_MILES': 'AREA_SQ_MILES', 'COMMENTS': 'COMMENTS', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SCH_GUID': 'SCH_GUID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTY': 'COUNTY', 'DIST_CODE': 'DIST_CODE', 'DIST_NAME': 'DIST_NAME', 'SCHOOLCODE': 'SCHOOLCODE', 'SCHOOLTYPE': 'SCHOOLTYPE', 'SCHOOL': 'SCHOOL', 'SCHOOLNAME': 'SCHOOLNAME', 'ADDRESS1': 'ADDRESS1', 'ADDRESS2': 'ADDRESS2', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'PHONE': 'PHONE', 'X': 'X', 'Y': 'Y', 'SOURCE': 'SOURCE', 'ZIP_TRUNC': 'ZIP_TRUNC', 'PREF_ID_NUM': 'PREF_ID_NUM', 'GNIS_ID': 'GNIS_ID', 'LOC_QUAL': 'LOC_QUAL', 'OGIS_ID': 'OGIS_ID', 'CATEGORY': 'CATEGORY', 'LAST_UPDATE': 'LAST_UPDATE', });
lyr_Urban_Areas_1673911287228252760Urbanized_Areas_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CENSUS_UA_CODE': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'LSAD_TYPE': 'TextEdit', 'AREA_SQ_MILES': 'TextEdit', 'COMMENTS': 'TextEdit', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SCH_GUID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTY': 'TextEdit', 'DIST_CODE': 'TextEdit', 'DIST_NAME': 'TextEdit', 'SCHOOLCODE': 'TextEdit', 'SCHOOLTYPE': 'TextEdit', 'SCHOOL': 'TextEdit', 'SCHOOLNAME': 'TextEdit', 'ADDRESS1': 'TextEdit', 'ADDRESS2': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'PHONE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'SOURCE': 'TextEdit', 'ZIP_TRUNC': 'TextEdit', 'PREF_ID_NUM': 'TextEdit', 'GNIS_ID': 'TextEdit', 'LOC_QUAL': 'TextEdit', 'OGIS_ID': 'TextEdit', 'CATEGORY': 'Range', 'LAST_UPDATE': 'DateTime', });
lyr_Urban_Areas_1673911287228252760Urbanized_Areas_1.set('fieldLabels', {'OBJECTID': 'no label', 'CENSUS_UA_CODE': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'LSAD_TYPE': 'no label', 'AREA_SQ_MILES': 'no label', 'COMMENTS': 'no label', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.set('fieldLabels', {'OBJECTID': 'no label', 'SCH_GUID': 'no label', 'COUNTYCODE': 'no label', 'COUNTY': 'no label', 'DIST_CODE': 'no label', 'DIST_NAME': 'no label', 'SCHOOLCODE': 'no label', 'SCHOOLTYPE': 'no label', 'SCHOOL': 'no label', 'SCHOOLNAME': 'no label', 'ADDRESS1': 'no label', 'ADDRESS2': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'PHONE': 'no label', 'X': 'no label', 'Y': 'no label', 'SOURCE': 'no label', 'ZIP_TRUNC': 'no label', 'PREF_ID_NUM': 'no label', 'GNIS_ID': 'no label', 'LOC_QUAL': 'no label', 'OGIS_ID': 'no label', 'CATEGORY': 'no label', 'LAST_UPDATE': 'no label', });
lyr_School_Point_Locations_of_NJ_74261628415643297301School_Point_Locations_of_NJ__Public__Private_and_Charter__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});