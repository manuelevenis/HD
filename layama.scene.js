// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "Layama_test0000", a: "CAM001_Layama", p: new BABYLON.Vector3(-24.9998, 183.168, -1490.58), l: new BABYLON.Vector3(-24.9998, 183.339, -1489.59)});
   layamaCameras.push({n: "Layama_test0001", a: "CAM002_Layama", p: new BABYLON.Vector3(-24.9998, 183.168, -305.303), l: new BABYLON.Vector3(-24.9998, 183.339, -304.318)});
   layamaCameras.push({n: "Layama_test0002", a: "CAM003_Layama", p: new BABYLON.Vector3(174.724, 183.168, 197.228), l: new BABYLON.Vector3(174.529, 183.445, 198.169)});
   layamaCameras.push({n: "Layama_test0003", a: "CAM004_Layama", p: new BABYLON.Vector3(-21.7967, 194.053, 1509.28), l: new BABYLON.Vector3(-21.7926, 194.125, 1508.28)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

