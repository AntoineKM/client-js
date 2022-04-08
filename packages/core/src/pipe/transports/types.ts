export type TransportType = 'rtc' | 'hls';

export interface TransportInstance {
	play(): Promise<void>;
	pause(): Promise<void>;
	destroy(): Promise<void>;
}

export interface Transport {
	mount(node: HTMLVideoElement): TransportInstance;
}
