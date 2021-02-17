gdjs.SplashCode = {};
gdjs.SplashCode.GDGameTitleObjects1= [];
gdjs.SplashCode.GDGameTitleObjects2= [];
gdjs.SplashCode.GDPlayerModelObjects1= [];
gdjs.SplashCode.GDPlayerModelObjects2= [];
gdjs.SplashCode.GDBackgroundObjects1= [];
gdjs.SplashCode.GDBackgroundObjects2= [];

gdjs.SplashCode.conditionTrue_0 = {val:false};
gdjs.SplashCode.condition0IsTrue_0 = {val:false};
gdjs.SplashCode.condition1IsTrue_0 = {val:false};


gdjs.SplashCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SplashCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.SplashCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDBackgroundObjects1[i].setYOffset(gdjs.SplashCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "SplashTimer");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", true);
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(-(1));
}}

}


};

gdjs.SplashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashCode.GDGameTitleObjects1.length = 0;
gdjs.SplashCode.GDGameTitleObjects2.length = 0;
gdjs.SplashCode.GDPlayerModelObjects1.length = 0;
gdjs.SplashCode.GDPlayerModelObjects2.length = 0;
gdjs.SplashCode.GDBackgroundObjects1.length = 0;
gdjs.SplashCode.GDBackgroundObjects2.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
