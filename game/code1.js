gdjs.MenuSceneCode = {};
gdjs.MenuSceneCode.GDBackgroundObjects1= [];
gdjs.MenuSceneCode.GDBackgroundObjects2= [];
gdjs.MenuSceneCode.GDCreditsObjects1= [];
gdjs.MenuSceneCode.GDCreditsObjects2= [];
gdjs.MenuSceneCode.GDGameTitleObjects1= [];
gdjs.MenuSceneCode.GDGameTitleObjects2= [];
gdjs.MenuSceneCode.GDInstructionsObjects1= [];
gdjs.MenuSceneCode.GDInstructionsObjects2= [];
gdjs.MenuSceneCode.GDKenneyObjects1= [];
gdjs.MenuSceneCode.GDKenneyObjects2= [];
gdjs.MenuSceneCode.GDPlayerModelObjects1= [];
gdjs.MenuSceneCode.GDPlayerModelObjects2= [];
gdjs.MenuSceneCode.GDHPObjects1= [];
gdjs.MenuSceneCode.GDHPObjects2= [];
gdjs.MenuSceneCode.GDBonusObjects1= [];
gdjs.MenuSceneCode.GDBonusObjects2= [];

gdjs.MenuSceneCode.conditionTrue_0 = {val:false};
gdjs.MenuSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MenuSceneCode.condition1IsTrue_0 = {val:false};
gdjs.MenuSceneCode.condition2IsTrue_0 = {val:false};


gdjs.MenuSceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MenuSceneCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{for(var i = 0, len = gdjs.MenuSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDBackgroundObjects1[i].setYOffset(gdjs.MenuSceneCode.GDBackgroundObjects1[i].getYOffset() + (-(300) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "BaseScene", true);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
gdjs.MenuSceneCode.condition1IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == -(1);
}if ( gdjs.MenuSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MenuSceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.MenuSceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\sfx\\Audio\\Theyre-Here_Looping.mp3", 1, true, 100, 1);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) * -(1));
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) > 0;
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) < 0;
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 50);
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(-(1));
}}

}


};

gdjs.MenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSceneCode.GDBackgroundObjects1.length = 0;
gdjs.MenuSceneCode.GDBackgroundObjects2.length = 0;
gdjs.MenuSceneCode.GDCreditsObjects1.length = 0;
gdjs.MenuSceneCode.GDCreditsObjects2.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects1.length = 0;
gdjs.MenuSceneCode.GDGameTitleObjects2.length = 0;
gdjs.MenuSceneCode.GDInstructionsObjects1.length = 0;
gdjs.MenuSceneCode.GDInstructionsObjects2.length = 0;
gdjs.MenuSceneCode.GDKenneyObjects1.length = 0;
gdjs.MenuSceneCode.GDKenneyObjects2.length = 0;
gdjs.MenuSceneCode.GDPlayerModelObjects1.length = 0;
gdjs.MenuSceneCode.GDPlayerModelObjects2.length = 0;
gdjs.MenuSceneCode.GDHPObjects1.length = 0;
gdjs.MenuSceneCode.GDHPObjects2.length = 0;
gdjs.MenuSceneCode.GDBonusObjects1.length = 0;
gdjs.MenuSceneCode.GDBonusObjects2.length = 0;

gdjs.MenuSceneCode.eventsList0(runtimeScene);
return;

}

gdjs['MenuSceneCode'] = gdjs.MenuSceneCode;
