import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

type EventId = string;

interface Event {
  id: EventId;
  title?: string;
  date: string;
}

type CreateEvent = Pick<Event, 'date' | 'title'>;
type DeleteEvent = Event['id'];
type UpdateEvent = Pick<Event, 'id' | 'date' | 'title'>;

interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    addEvent: (state, action: PayloadAction<CreateEvent>) => {
      const { date, title } = action.payload;
      const newEvent = {
        id: crypto.randomUUID(),
        date,
        title,
      };

      state.events.push(newEvent);
    },
    updateEvent: (state, action: PayloadAction<UpdateEvent>) => {
      const { id, date, title } = action.payload;
      const eventIndex = state.events.findIndex((event) => event.id === id);

      state.events[eventIndex].date = date;
      state.events[eventIndex].title = title;
    },
    removeEvent: (state, action: PayloadAction<DeleteEvent>) => {
      const id = action.payload;
      const eventIndex = state.events.findIndex((event) => event.id === id);

      state.events.splice(eventIndex, 1);
    },
  },
});

const selectEvents = (state: RootState) => state.events.events;
const selectEvent = (state: RootState, id: string) =>
  state.events.events.find((event) => event.id === id);

const {
  actions: { addEvent, removeEvent, updateEvent },
  reducer,
} = settingsSlice;

export { addEvent, removeEvent, selectEvent, selectEvents, updateEvent };
export default reducer;
