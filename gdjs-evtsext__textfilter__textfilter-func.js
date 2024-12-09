
if (typeof gdjs.evtsExt__TextFilter__TextFilter !== "undefined") {
  gdjs.evtsExt__TextFilter__TextFilter.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TextFilter__TextFilter = {};


gdjs.evtsExt__TextFilter__TextFilter.userFunc0xcddb18 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const array = eventsFunctionContext.getArgument("array");
var sentence = eventsFunctionContext.getArgument("output");
var replace = eventsFunctionContext.getArgument("replace");

const wordsArray = array.getAllChildrenArray().map(childVar => childVar.getAsString().toLowerCase());

wordsArray.forEach(badWord => {
    const regex = new RegExp(`(${badWord})`, "gi");
    sentence = sentence.replace(regex, match => match.replace(/[a-zA-Z]/g, replace));
});

eventsFunctionContext.returnValue = sentence;

};
gdjs.evtsExt__TextFilter__TextFilter.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextFilter__TextFilter.userFunc0xcddb18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TextFilter__TextFilter.func = function(runtimeScene, array, output, replace, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextFilter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextFilter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "array") return array;
if (argName === "output") return output;
if (argName === "replace") return replace;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TextFilter__TextFilter.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TextFilter__TextFilter.registeredGdjsCallbacks = [];