// Re-export core
export * from '@wasmcloud/lattice-client-core/src';

// package exports
export {useLatticeConfig} from './use-lattice-config';
export {useLatticeData} from './use-lattice-data';
export {useLatticeClient, LatticeClientProvider} from './lattice-client-provider';

export type {LatticeClientConfig} from '@wasmcloud/lattice-client-core/src';
export type {LatticeClientProviderProps} from './lattice-client-provider';
