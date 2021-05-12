export interface CounterState {
	count: number;
	channel: string;
}

export const initialState: CounterState = {
	count: 0,
	channel: 'Angular Dev'
};
