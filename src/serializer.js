import Event from "./models"

export default class EventSerializer {
    /**
     *
     * @param {Event| Event[]} event
     * @return {string}
     */
    serialize(event){
        //console.log("event avant transfo : ", event);
        return JSON.stringify(event);
    }

    /**
     *
     * @return {Event | Event[]}
     * @param {string} event
     */
    unserialize(event){
        let eventUnserialize = JSON.parse(event);
        let myEvent = new Event(eventUnserialize["startTime"], eventUnserialize["endTime"], eventUnserialize["title"], eventUnserialize["location"], eventUnserialize["description"]);
        /*console.log("unserialized : ", eventUnserialize);
        console.log("the event : ", myEvent);*/
        return myEvent;
    }
}