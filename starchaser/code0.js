gdjs.SplashCode = {};
gdjs.SplashCode.GDGameTitleObjects1= [];
gdjs.SplashCode.GDGameTitleObjects2= [];
gdjs.SplashCode.GDPlayerModelObjects1= [];
gdjs.SplashCode.GDPlayerModelObjects2= [];
gdjs.SplashCode.GDBackgroundObjects1= [];
gdjs.SplashCode.GDBackgroundObjects2= [];
gdjs.SplashCode.GDInstructionObjects1= [];
gdjs.SplashCode.GDInstructionObjects2= [];

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
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MenuScene", true);
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Instruction"), gdjs.SplashCode.GDInstructionObjects1);
{runtimeScene.getGame().getVariables().get("Mute").setNumber(-(1));
}{for(var i = 0, len = gdjs.SplashCode.GDInstructionObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDInstructionObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.SplashCode.condition0IsTrue_0.val = false;
{
gdjs.SplashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "FlashLoop");
}if (gdjs.SplashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Instruction"), gdjs.SplashCode.GDInstructionObjects1);
{for(var i = 0, len = gdjs.SplashCode.GDInstructionObjects1.length ;i < len;++i) {
    gdjs.SplashCode.GDInstructionObjects1[i].getBehavior("Flash").Flash(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
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
gdjs.SplashCode.GDInstructionObjects1.length = 0;
gdjs.SplashCode.GDInstructionObjects2.length = 0;

gdjs.SplashCode.eventsList0(runtimeScene);
return;

}

gdjs['SplashCode'] = gdjs.SplashCode;
