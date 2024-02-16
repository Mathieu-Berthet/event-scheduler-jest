import Event from "./models"
import EventSerializer from "../src/serializer";


let myEvents = [
    new Event(new Date('2019-12-17T03:24:00'),new Date('2019-12-17T13:24:00'),"Hello World","Campus Numerique","This is an hello world.."),
    new Event(new Date('2018-12-17T03:24:00'),new Date('1995-12-17T03:24:00'),"First event","Campus Numerique","This is an hello world.."),
    new Event(new Date('2020-04-01T09:00:00'),new Date('2020-04-01T17:00:00'),"Unit test againt","Campus Numerique","This is an hello world..")
];
/**
 * The event repository is responsible of events storage from database
 */
export default class EventRepository {

    _event;
    _dbDriver;
    _serializer

    constructor(dbDriver) {
        this._dbDriver = dbDriver;
        this._serializer = new EventSerializer();
    }

    
    /**
     * Get all events saved in db
     * @return Event[]
     */
    getAll(){
        console.log("tab : ", myEvents);
        return myEvents;
        //return []; //TODO
    }

    /**
     * Add a new event
     * return true if succeed
     * @return boolean
     */
    add(event){
        return false; //TODO
    }
}

export class InMemoryEventRepository extends EventRepository{
    _events;

    constructor(events) {
        super(null);
        this._events = events;
    }


    getAll() {
        console.log("je suis ici ? ");
        return this._events.slice();
    }

    add(event) {
        this._events.push(event);
    }
}