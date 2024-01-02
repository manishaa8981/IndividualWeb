package com.example.feast.Service;

import com.example.feast.Entity.Event;
import com.example.feast.Pojo.EventPojo;
import com.sun.jdi.request.EventRequest;

import java.util.List;

public interface EventService {
    void saveEvent(EventPojo eventPojo);

    List<Event> getEvent();

    Integer cancelEvent(Long id);

    List<EventEnum> getEventEnums();

    List<EventProjection> getEventById(Long id);

    Integer updateEvent(EventRequest eventRequest);
}
