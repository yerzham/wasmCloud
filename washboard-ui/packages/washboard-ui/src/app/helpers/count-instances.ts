import {WadmComponent} from '@wasmcloud/lattice-client-react/src';

export function countInstances(instances: WadmComponent['instances']): number {
  return Object.values(instances).reduce((accumulator, current) => accumulator + current.length, 0);
}
