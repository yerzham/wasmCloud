import {LatticeClient, LatticeClientProvider} from '@wasmcloud/lattice-client-react/src';
import * as React from 'react';

const client = new LatticeClient({
  config: {
    latticeUrl: import.meta.env.VITE_NATS_WEBSOCKET_URL || 'ws://localhost:4223',
  },
});

export function AppLatticeClientProvider({children}: React.PropsWithChildren): React.ReactElement {
  return <LatticeClientProvider client={client}>{children}</LatticeClientProvider>;
}
