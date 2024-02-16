
import EventRepository from "./repository";
import Event from "./models";

let myEvents = [
    new Event(new Date('2019-12-17T03:24:00'),new Date('2019-12-17T13:24:00'),"Hello World","Campus Numerique","This is an hello world.."),
    new Event(new Date('2018-12-17T03:24:00'),new Date('1995-12-17T03:24:00'),"First event","Campus Numerique","This is an hello world.."),
    new Event(new Date('2020-04-01T09:00:00'),new Date('2020-04-01T17:00:00'),"Unit test againt","Campus Numerique","This is an hello world..")
];

export default class EventService {

    /**
     * The event repository
     * @type {EventRepository}
     */
    _eventRepository;

    /**
     *
     * @param {EventRepository} eventRepository
     */
    constructor(eventRepository) {
        this._eventRepository = eventRepository;
    }

    /**
     * Return all events
     * @return {Event[]}
     */
    getEvents() {
        return this._eventRepository.getAll();
    }

    /**
     * Get the first upcomming event
     * @return {null | Event}
     */
    getFirstEvent() {
        let firstEvent = myEvents[0];
        for(let i = 1; i < myEvents.length; i++)
        {
            if(firstEvent["startTime"] > myEvents[i]["startTime"])
            {
                firstEvent = myEvents[i];
            }
        }
        return firstEvent;
    }

    /**
     * Get the last upcomming event
     * @return {null | Event}
     */
    getLastEvent() {
        let lastEvent = myEvents[0];
        for(let i = 1; i < myEvents.length; i++)
        {
            if(lastEvent["startTime"] < myEvents[i]["startTime"])
            {
                lastEvent = myEvents[i];
            }
        }
        return lastEvent;
    }

    /**
     * Get the longest event
     * @return {null | Event}
     */
    getLongestEvent() {
        let longestEvent = myEvents[0];
        for(let i = 1; i < myEvents.length; i++)
        {
            if(myEvents[i]["endTime"] > myEvents[i]["startTime"])
            {
                if(longestEvent["endTime"] - longestEvent["startTime"] < myEvents[i]["endTime"] - myEvents[i]["startTime"])
                {
                    longestEvent = myEvents[i];
                }
            }
        }
        return longestEvent;
    }

    /**
     * get the shortest event
     * @return {null | Event}
     */
    getShortestEvent() {
        let shortestEvent = myEvents[0];
        for(let i = 1; i < myEvents.length; i++)
        {
            if(myEvents[i]["endTime"] > myEvents[i]["startTime"])
            {
                if(shortestEvent["endTime"] - shortestEvent["startTime"] > myEvents[i]["endTime"] - myEvents[i]["startTime"])
                {
                    shortestEvent = myEvents[i];
                }
            }
        }
        return shortestEvent;
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     * @return {Event[]}
     */
    hasEventOn(time) {
        let evts = this._eventRepository.getAll();
        return evts.filter(function (e) {
            return time >= e.getStartTime() && time <= e.getEndTime();
        });
    }

    // A implementer en TDD
    /**
     *
     * @param title
     * @return {null | Event}
     */
    getEventByTitle(title) {
        return null
    }

    // A implementer en TDD
    /**
     *
     * @param {Date} time
     */
    isLocationAvailable(time) {
    }

    /**
     * Get current events
     * @return {Event[]}
     */
    getCurrentEvents() {
        let now = Date.now();
        return this.hasEventOn(new Date(now));
    }
    
}